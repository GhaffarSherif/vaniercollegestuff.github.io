function hook() {
    addBullets();
}
window.addEventListener("load", hook);

function addBullets() {
    var list = document.getElementById("selectlist");
    var elements = list.getElementsByTagName("li");
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        var header = e.getElementsByTagName("h3")[0];
        header.textContent = "* " + header.textContent;
        header.onclick = onGifSelect;
    }
}

function onGifSelect() {
    var img = document.getElementById("thegif");
    img.src = "gif/" + unescape(this.textContent.substring(2)) + ".gif";

    var list = document.getElementById("selectlist");
    var elements = list.getElementsByTagName("li");
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        if (e == this.parentNode)
            e.className = "dactiveselect";
        else
            e.className = "";
    }
    delay();
}
