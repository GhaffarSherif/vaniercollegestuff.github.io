/*
   Author: Kourouklis, Lucas
   Student-ID: 1472102
   Course: Internet-II
   Section: 1
   Date: 05/11/2015
   Chapter 9 Tutorial

   Filename: KourouklisLucas_cookies.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   writeDateString(dateObj)
      Returns the date contained in the dateObj date object as
      a text string in the format mmm. dd, yyyy

   writeCookie(cName, cValue, expDate, cPath, cDomain, cSecure)
      Write a cookie named cName with a value, cValue. The expDate parameter
      contains a date object specifying the expiration date. The cPath and
      cDomain parameters specify the path and domain for the cookie. The
      cSecure parameter is a Boolean that specifies whether or not to include
      the secure flag. The expDate, cPath, cDomain, and cSecure parameters
      are all optional.

   retrieveCookie(cName)
      Retrieves the value of the cookie, cName.

   deleteCookie(cName)
      Deletes the cName cookie.

   writeMCookie(cName, fName, fValue, expDate, cPath, cDomain, cSecure)
      Writes a multi-valued cookie where cName is the name of the cookie,
      fName is a field name in the cookie, fValue is the field's value,
      and expDate, cPath, cDomain, and cSecure are optional parameters that
      specify the cookie's expiration date, path, domain, and secure flag.

   retrieveMCookie(cName, fName)
      Retrieves the field value for the fName field from the multi-valued
      cookie, cName.  

   cookiesEnabled()
      Returns a Boolean value indicating whether cookies have been enabled
      under the current browser.

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function writeCookie(cName, cValue, expDate, cPath, cDomain, cSecure)
{
	if(cName && cValue != "")
	{
		var cString = cName + "=" + escape(cValue);
		
		if(expDate) cString += ";expires=" + expDate.toGMTString();
		if(cPath)	cString += ";path=" + cPath;
		if(cDomain) cString += ";domain=" + cDomain;
		if(cSecure) cString += ";secure";
		
		document.cookie = cString;
	}
}

function retrieveCookie(cName)
{	
	if (document.cookie)
	{	
		var cookiesArray = document.cookie.split("; ");
		for (var i = 0; i < cookiesArray.length; i++)
		{
			if (cookiesArray[i].split("=")[0] == cName)
			{
				return unescape(cookiesArray[i].split("=")[1]);
			}
		}
	}
}

function deleteCookie(cName) {

   if (document.cookie) {

      var cookiesArray = document.cookie.split("; ");
      for (var i = 0; i < cookiesArray.length; i++) {
         if (cookiesArray[i].split("=")[0] == cName) {
            document.cookie = cName + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT";
         }
      }

   }

}

function writeMCookie(cName, fName, fValue, expDate, cPath, cDomain, cSecure)
{
	if(cName && fName && fValue != "")
	{
		// Create the subkey
		var subkey = fName + "=" + escape(fValue);
		
		// Retrieve the current cookie value
		var cValue = null;
		var cookiesArray = document.cookie.split("; ");
		for(var i = 0; i < cookiesArray.length; i++)
		{
			if(cookiesArray[i].split("=")[0] == cName)
			{
				var valueIndex = cookiesArray[i].indexOf("=") + 1;
				cValue = cookiesArray[i].slice(valueIndex);
				break;
			}
		}
		
		if(cValue)
		{
			var fieldExists = false;
			var cValueArray = cValue.split("&");
			for(var i = 0; i < cValueArray.length; i++)
			{
				if(cValueArray[i].split("=")[0] == fName)
				{
					fieldExists = true;
					cValueArray[i] = subkey;
					break;
				}
			}
			
			if(fieldExists) cValue = cValueArray.join("&")
			else cValue += "&" + subkey;
		}
		else
		{
			cValue = subkey;
		}
		
		var cString = cName + "=" + cValue;
		
		if(expDate) cString += ";expires=" + expDate.toGMTString();
		if(cPath)	cString += ";path=" + cPath;
		if(cDomain) cString += ";domain=" + cDomain;
		if(cSecure) cString += ";secure";
		
		document.cookie = cString;
	}
}

function retrieveMCookie(cName, fName)
{
	if (document.cookie)
	{
		// Retrieve the cookie value
		var cValue = null;
		var cookiesArray = document.cookie.split("; ");
		for (var i = 0; i < cookiesArray.length; i++)
		{
			if (cookiesArray[i].split("=")[0] == cName)
			{
				var valueIndex = cookiesArray[i].indexOf("=") + 1;
				cValue = cookiesArray[i].slice(valueIndex);
				break;
			}
		}
		
		// Retrieve the field value within the cookie
		if (cValue)
		{
			var cValueArray = cValue.split("&");
			for (var i = 0; i < cValueArray.length; i++)
			{
				if (cValueArray[i].split("=")[0] == fName)
					return unescape(cValueArray[i].split("=")[1]);
			}
		}
	}
}