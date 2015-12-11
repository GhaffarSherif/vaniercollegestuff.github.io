var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;
document.body.appendChild(canvas);

var fps = 30.0;
setInterval(update, 1.0 / fps);
setInterval(draw, 1.0 / fps);

var keysDown = {};
addEventListener("keydown", function(e) {keysDown[e.keyCode] = true;}, false);
addEventListener("keyup", function(e) {delete keysDown[e.keyCode];}, false);

var Ent = function() {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.color = "250, 250, 250";
	this.velx = 0;
	this.vely = 0;
	
	this.updatebase = function() {
		this.x += this.velx * 1.0 / fps;
		this.y += this.vely * 1.0 / fps;
	}
	this.drawbase = function() {
		ctx.beginPath();
		ctx.fillStyle = "rgb(" + this.color + ")";
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
	}
	this.intersects = function(ent) {
		return !(ent.x > this.x + this.width || 
				 ent.x + ent.width < this.x || 
				 ent.y > this.y + this.height ||
				 ent.y + ent.height < this.y);
	}
	this.dy = function(ent) {
		var midy1 = ent.y + ent.height / 2.0;
		var midy2 = this.y + this.height / 2.0;
		return midy2 - midy1;
	}
	// this.distanceTo = function(ent) {
	// 	var midx1 = ent.x + ent.width / 2.0;
	// 	var midy1 = ent.y + ent.height / 2.0;
	// 	var midx2 = this.x + this.width / 2.0;
	// 	var midy2 = this.y + this.height / 2.0;
	// 	var dx = midx1 - midx2;
	// 	var dy = midy1 - midy2;
	// 	return Math.sqrt(dx*dx+dy*dy);
	// }
}

var Counter = function() {
	this.score = 0;
	this.textAlign = "left";
	this.textBaseline = "top";
	
	this.update = function() {
		this.updatebase();
	}
	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "24px Arial";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("" + this.score, this.x, this.y);
	}
}
Counter.prototype = new Ent();

var Paddle = function() {
	this.width = 32;
	this.height = 128;
	this.keysDown;
	this.upKey;
	this.downKey;
	this.speed = 240;
	
	this.update = function() {
		if (this.upKey in this.keysDown) {
			this.vely = -this.speed;
		}
		else if (this.downKey in this.keysDown) {
			this.vely = this.speed;
		}
		else {
			this.vely = 0;
		}
		
		this.updatebase();
		if (this.y < 0) {
			this.y = 0;
		}
		if (this.y + this.height > canvas.height) {
			this.y = canvas.height - this.height;
		}
	}
	this.draw = function() {
		this.drawbase();
	}
}
Paddle.prototype = new Ent();

var Ball = function() {
	this.width = 24;
	this.height = 24;
	this.speed = 160;
	this.counterLeft;
	this.counterRight;
	this.paddleLeft;
	this.paddleRight;
	
	this.spawn = function() {
		this.y = Math.random() * (canvas.height - this.height);
		this.vely = 0;
		if (Math.random() >= 0.5) {
			this.x = 64;
			this.velx = this.speed;
		}
		else {
			this.x = canvas.width - 64;
			this.velx = -this.speed;
		}
	}
	this.update = function() {
		this.updatebase();
		
		// Check bounds
		if (this.x <= 0) {
			this.counterRight.score++;
			this.spawn();
		}
		else if (this.x >= canvas.width - this.width) {
			this.counterLeft.score++;
			this.spawn();
		}
		else if (this.y <= 0) {
			this.vely = -this.vely;
		}
		else if (this.y >= canvas.height - this.height) {
			this.vely = -this.vely;
		}
		// Check paddles
		else if (this.intersects(this.paddleLeft)) {
			this.velx = Math.abs(this.velx);
			this.vely = this.dy(this.paddleLeft) / this.paddleLeft.height * this.speed * 1.25;
		}
		else if (this.intersects(this.paddleRight)) {
			this.velx = -Math.abs(this.velx);
		}
	}
	this.draw = function() {
		this.drawbase();
	}
}
Ball.prototype = new Ent();

var bg = new Ent();
bg.x = 0; bg.y = 0; bg.width = canvas.width; bg.height = canvas.height; bg.color = "0, 0, 0";

var c1 = new Counter();
c1.x = 96; c1.y = 32;
var c2 = new Counter();
c2.x = canvas.width - 96 - 16; c2.y = 32;

var p1 = new Paddle();
p1.x = 0; p1.y = 0; p1.upKey = 87; p1.downKey = 83; p1.keysDown = keysDown;
var p2 = new Paddle();
p2.x = canvas.width - p2.width; p2.y = 0; p2.upKey = 79; p2.downKey = 76; p2.keysDown = keysDown;

var ball = new Ball();
ball.counterLeft = c1; ball.counterRight = c2; ball.paddleLeft = p1; ball.paddleRight = p2;
ball.spawn();

var maxScore = 20;
function update() {
	c1.update();
	c2.update();
	p1.update();
	p2.update();
	ball.update();
	
	if (c1.score > maxScore || c2.score > maxScore) {
		c1.score = 0;
		c2.score = 0;
		ball.spawn();
	}
}
function draw() {
	bg.drawbase();
	c1.draw();
	c2.draw();
	p1.draw();
	p2.draw();
	ball.draw();
}