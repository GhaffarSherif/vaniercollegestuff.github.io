# BEAUTIFUL FRAMES
```
<div class="dmenu pure-g">
    <div class="pure-u-3-4 pure-u-md-1-4 dpanel">
    	YOUR STUFF HERE
    </div>
    <div class="pure-u-3-4 pure-u-md-1-4 dpanel">
    	YOUR STUFF HERE
    </div>
    <div class="pure-u-3-4 pure-u-md-1-4 dpanel">
    	YOUR STUFF HERE
    </div>
</div>
```
* pure-u-md-1-4: notice the 1/4 -> 25% of the dmenu's width
* pure-u-3-4: 75% of the dmenu's width WHEN THE WINDOW BECOMES SMALL

# To apply the CSS style
```
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Clock Slap</title>

    <link rel="stylesheet" href="lib/pure-min.css">
    <link rel="stylesheet" href="lib/grids-responsive-min.css">
    <link rel="stylesheet" href="styles/default.css">
</head>
<body>
    <div id="doverlay"></div>
    <div id="dselectbox">
        <ul>
            <li><img src="img/bg0.png"/></li>
            <li><img src="img/bg1.png"/></li>
            <li><img src="img/bg2.png"/></li>
            <li><img src="img/bg3.png"/></li>
            <li><img src="img/bg4.png"/></li>
            <li><img src="img/bg5.png"/></li>
            <li><img src="img/bg6.png"/></li>
            <li><img src="img/bg7.png"/></li>
            <li><img src="img/bg8.png"/></li>
            <li><img src="img/bg9.png"/></li>
        <ul/>
    </div>
    <header>
        <div id="dmenu" class="dmenu pure-g">
            <div class="dmenu-item pure-u-1 pure-u-lg-1-4">
                <a href="index.html" class="">Clock Slap</a>
            </div>
            <div class="dmenu-item pure-u-1 pure-u-lg-1-8">
                <a href="fun.html" class="">Fun</a>
            </div>
            <div class="dmenu-item pure-u-1 pure-u-lg-1-8">
                <a href="games.html" class="">Games</a>
            </div>
			<div class="dmenu-item pure-u-1 pure-u-lg-1-8">
                <a href="#" class="">GIFs</a>
            </div>
            <div class="dmenu-item pure-u-1 pure-u-lg-1-8">
                <a href="contactUs.html" class="">Contact</a>
            </div>
			<div class="dmenu-item pure-u-1 pure-u-lg-1-8">
                <a href="faq.html" class="">FAQ</a>
            </div>
            <div id="settings" class="dmenu-item pure-u-1 pure-u-lg-1-8">
                <a href="#" class="">Settings</a>
            </div>
        </div>
    </header>
    
    <article>
        YOUR STUFF HERE
    </article>

    <footer>
        <div id="footer" class="dfooter">
            Copyright 2015 Evil Corp
        </div>
    </footer>
    <script src="lib/jquery.js"></script>
    <script defer="defer" src="scripts/menu.js"></script>
    <script src="scripts/scroll.js"></script>
    <script defer="defer" src="scripts/footer.js"></script>
    <script defer="defer" src="scripts/settings.js"></script>
</body>
</html>
```
