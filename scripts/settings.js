function hook() {
    document.getElementById("settings").onclick = onSettingsClick;
}
window.addEventListener("load", hook);

document.addEventListener("click", onGlobalClick);

function onGlobalClick(e) {
    if (opened)
        toggle();
}

function onSettingsClick(e) {
    toggle();
    var box = document.getElementById('dselectbox');
    var ul = box.getElementsByTagName("ul")[0];
    var elements = ul.getElementsByTagName("li");

    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        var img = el.getElementsByTagName("img")[0];
        img.onclick = onBackgroundSelect;
    }
    e.stopPropagation();
}

function onBackgroundSelect() {
    document.body.style.backgroundImage = 'url("' + this.src + '")';
    document.cookie = "background="+escape(this.src);
}

var opened = false;
function toggle() {
    var overlay = document.getElementById('doverlay');
    var box = document.getElementById('dselectbox');
    if(overlay.style.display == "block") {
        overlay.style.display = "none";
        box.style.display = "none";
    }
    else {
        overlay.style.display = "block";
        box.style.display = "block";
    }
    opened = !opened;
}
