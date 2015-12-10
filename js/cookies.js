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