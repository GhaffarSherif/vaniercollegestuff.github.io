window.onload = setupImage;

var imageNum = 0;

function setupImage()
{
	var image = document.getElementById("image");
	
	image.parentNode.style.left = (window.innerWidth/2)-(parseFloat(image.style.width)/2) + "px";
	image.parentNode.style.right = (window.innerWidth/2)+(parseFloat(image.style.width)/2) + "px";
	image.parentNode.style.top = (window.innerHeight/2)-(parseFloat(image.style.width)/2) + "px";
	image.parentNode.style.bottom = (window.innerHeight/2)+(parseFloat(image.style.width)/2) + "px";
}

function controlGIF()
{
	var image = document.getElementById("image");
	
	// Select the slider bar in response to the mousedown event
	image.onmouseover = function(e)
	{
		var evt = e || window.event;

		// Record the initial position of the mouse and the slider bar
		var initX = evt.clientX;
		var imageStartPos = parseInt(image.parentNode.style.left);
		var imageEndPos = imageStartPos + parseFloat(image.style.width);

		// As the mouse moves, move the slider bar from its initial position
		image.onmousemove = function(e)
		{
			var evt = e || window.event;
			var newX = evt.clientX;
			var distanceX = newX - initX;
			var percentage = distanceX/(imageEndPos-imageStartPos);
			imageNum = (37*percentage)-1;

			if (imageNum >= 0 && imageNum <= 36)
				image.src = "fun-imgs/tmp-" + Math.floor(imageNum) + ".gif";
		}
	}

	// In response to the mouseout event, stop moving the slider bar
	image.onmouseout = function(e)
	{
		image.onmousemove = null;
	}
}