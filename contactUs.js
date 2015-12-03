window.onload = startForm;

function startForm()
{
	document.forms[0].onsubmit = checkForm;
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
	else if (!testLength("message"))
	{
		alert("You must enter a message.");
		return false;
	}
	else if (!checkEmail())
	{
		alert("Invalid E-mail address.");
		return false;
	}
	else
		return true;
}

function checkEmail()
{
	var email = document.getElementById("email").value;
	regx = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[comanet]/;
	return regx.test(email);
}