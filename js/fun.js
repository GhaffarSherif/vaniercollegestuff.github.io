var imageNum = 0;

function controlGIF()
{
	var image = document.getElementById("image");
	
	// Select the slider bar in response to the mousedown event
	image.onmouseover = function(e)
	{
		var evt = e || window.event;

		// Record the initial position of the mouse and the slider bar
		var initX = evt.clientX;
		var imageStartPos = image.parentNode.style.left;
		var imageEndPos = imageStartPos + parseFloat(image.style.width);

		// As the mouse moves, move the slider bar from its initial position
		image.onmousemove = function(e)
		{
			var evt = e || window.event;
			var newX = evt.clientX;
			var distanceX = newX - initX;
			var percentage = distanceX/(imageEndPos-imageStartPos);
			imageNum = (149*percentage)-1;

			if (imageNum >= 0 && imageNum <= 148)
				image.src = imageNum + ".gif";
		}
	}

	// In response to the mouseout event, stop moving the slider bar
	image.onmouseout = function(e)
	{
		image.onmousemove = null;
	}
}