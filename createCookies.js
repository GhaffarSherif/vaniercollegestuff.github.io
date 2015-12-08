/*
   Author: Kourouklis, Lucas
   Student-ID: 1472102
   Course: Internet-II
   Section: 1
   Date: 05/11/2015
   Chapter 9 Tutorial

   Filename: KourouklisLucas_register.js

   Functions List:

   initPage()
      Adds an event handler to the registration form submit button
      when the page is opened.

   saveMemberInfo()
      Saves the values in the member registration form to fields in
      the memberInfo multi-valued cookie

*/
addEvent(window, "load", initPage, false);

function initPage()
{
	if(retrieveMCookie("info"))
	{
		var allInputs = document.getElementsByTagName("input");
		for (var i = 0; i < allInputs.length; i++)
		{
			if(allInputs[i].type == "text")
			{
				if (retrieveCookie(allInputs[i].id))
				{
					allInputs[i].value = retrieveCookie(allInputs[i].value);
				}
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
				{
					allInputs[i].value = retrieveCookie(allInputs[i].id);
				}
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
				{
					allInputs[i].value = retrieveCookie(allInputs[i].id);
				}
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
	// Set the cookie expiration date one year hence
	var expire = new Date();
	expire.setFullYear(expire.getFullYear() + 1);
	
	// Loop through all of the elements in the form
	var allFields = document.form.elements;
	for(var i = 0; i < allFields.length; i++)
	{
		if(allFields[i].type == "text")
		{
			// Write input box value to a cookie
			writeMCookie("contactInfo", allFields[i].id, allFields[i].value, expire);
		}
	}
		
	alert("Registration data saved");
}