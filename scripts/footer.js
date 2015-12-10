$(document).ready(sendFooterBottom);
$(document).resize(delay);
$(window).resize(delay);

function delay() {
    setTimeout(sendFooterBottom, 1000);
}

function sendFooterBottom()
{
    $('#thegif').resize(delay);
    var docHeight = $(window).height();
    var footerHeight = $('#footer').height();
    var footerTop = $('#footer').position().top + footerHeight;

    var paddingBottom = parseInt($('article').css('padding-bottom'));
    $('article').css('padding-bottom', (paddingBottom + docHeight - footerTop) + 'px');
}
