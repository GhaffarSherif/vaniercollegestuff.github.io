window.onload = startForm;

function startForm()
{
	document.forms[0].onsubmit = checkForm;
	
	if(retrieveCookie("contactInfo"))
	{
		var tymsg = document.getElementById("tymsg");
		
		tymsg.innerHTML = "Thank you for contacting us " + retrieveMCookie("contactInfo", "fname") + " " + retrieveMCookie("contactInfo", "lname") + ". We will reach you at " + retrieveMCookie("contactInfo", "email") + ".";
    }
	
	/*if(retrieveMCookie("contactInfo"))
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
    }*/
}

function testLength(field)
{
	field = document.getElementById(field);
	if(field.value.length == 0)
	{
		field.style.backgroundColor = "yellow";
		return false;
	}
	else
	{
		field.style.backgroundColor = "white";
		return true;
	}
}

function checkEmail()
{
	var field = document.getElementById("email");
	var email = field.value;
	regx = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[comanet]/;
	
	if(regx.test(email))
	{
		field.style.backgroundColor = "white";
		return true;
	}
	else
	{
		field.style.backgroundColor = "white";
		return false;
	}
}

function checkForm()
{
	if (!testLength("fname"))
	{
		alert("You must enter a first name.");
		return false;
	}
	else if (!testLength("lname"))
	{
		alert("You must enter a last name.");
		return false;
	}
	else if (!testLength("email"))
	{
		alert("You must enter an email.");
		return false;
	}
	else if (!checkEmail())
	{
		alert("Invalid E-mail address.");
		return false;
	}
	else if (!testLength("message"))
	{
		alert("You must enter a message.");
		return false;
	}
	else
	{
		saveInfo();
		//alert("Thank you for contacting us!");
		return true;
	}
}