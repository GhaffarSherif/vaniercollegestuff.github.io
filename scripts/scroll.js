function hook() {
    loadBackground();
    startMove();
}
window.addEventListener("load", hook);

function startMove() {
    var y = 0;
    setInterval(function() {
        y -= 1;
        if (y <= -100000)
            y = 0;
        document.body.style.backgroundPosition = "0 " + y + "px";
    }, 100);
}

function loadBackground() {
    var cookies = document.cookie.split(";");
    var backgroundSrc = cookies[0].split("=")[1];
    if (backgroundSrc.length > 0)
        document.body.style.backgroundImage = 'url("' + unescape(backgroundSrc) + '")';
}
