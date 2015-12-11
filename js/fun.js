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
	
	image.onmouseover = function(e)
	{
		var evt = e || window.event;

		var initX = evt.clientX;
		var imageStartPos = parseInt(image.parentNode.style.left);
		var imageEndPos = imageStartPos + parseFloat(image.style.width);

		image.onmousemove = function(e)
		{
			var evt = e || window.event;
			var newX = evt.clientX;
			var distanceX = newX - initX;
			var percentage = distanceX/(imageEndPos-imageStartPos);
			imageNum = (36*percentage);

			if (imageNum < 0)
				image.src = "fun-imgs/tmp-" + Math.ceil(36+imageNum) + ".gif";
			else if (imageNum >= 0 && imageNum <= 36)
				image.src = "fun-imgs/tmp-" + Math.floor(imageNum) + ".gif";
		}
	}

	image.onmouseout = function(e)
	{
		image.onmousemove = null;
	}
}