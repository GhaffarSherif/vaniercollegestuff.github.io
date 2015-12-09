addEvent(window, "load", initPage, false);

function initPage()
{
	if(retrieveMCookie("contactInfo"))
	{
		var allInputs = document.getElementsByTagName("input");
		for (var i = 0; i < allInputs.length; i++)
		{
			if(allInputs[i].type == "text")
			{
				if (retrieveCookie(allInputs[i].id))
					allInputs[i].value = retrieveCookie(allInputs[i].id);
			}
		}
    }
	
	/*if(retrieveCookie("fName"))
	{
		var allInputs = document.getElementsByTagName("input");
		for (var i = 0; i < allInputs.length; i++)
		{
			if(allInputs[i].type == "text")
			{
				if (retrieveCookie(allInputs[i].id))
					allInputs[i].value = retrieveCookie(allInputs[i].id);
			}
		}
    }
	if(retrieveCookie("lName"))
	{
		var allInputs = document.getElementsByTagName("input");
		for (var i = 0; i < allInputs.length; i++)
		{
			if(allInputs[i].type == "text")
			{
				if (retrieveCookie(allInputs[i].id))
					allInputs[i].value = retrieveCookie(allInputs[i].id);
			}
		}
    }
	if(retrieveCookie("email"))
	{
		var allInputs = document.getElementsByTagName("input");
		for (var i = 0; i < allInputs.length; i++)
		{
			if(allInputs[i].type == "text")
			{
				if (retrieveCookie(allInputs[i].id))
				{
					allInputs[i].value = retrieveCookie(allInputs[i].id);
				}
			}
		}
    }*/
}

function saveInfo()
{
	var expire = new Date();
	expire.setFullYear(expire.getFullYear() + 1);

	var allFields = document.getElementById("form2").elements;
	for(var i = 0; i < allFields.length; i++)
	{
		if(allFields[i].type == "text" && allFields[i].id != "dtable-item4")
			writeMCookie("contactInfo", allFields[i].id, allFields[i].value, expire);
	}
		
	alert("Registration data saved");
}