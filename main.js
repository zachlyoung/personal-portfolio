//Initialization

var isAsideOpen;
var isExpanded;

$(document).ready(function () {
    isAsideOpen = true;
    if ($(window).width() >= 1000){
        isExpanded = true;
        $('.nav-bar').css('background', '#000');
        $('#top-bar').toggleClass("exit");
        $('#middle-bar').toggleClass("exit");
        $('#bottom-bar').toggleClass("exit");
        $('#top-bar').toggleClass("open");
        $('#middle-bar').toggleClass("open");
        $('#bottom-bar').toggleClass("open");
    } else {
        isExpanded = false;
    }
});

//Resizing

$(window).on('resize', function(){
    if ($(this).width() < 1000){
        updateProgressMobile();
    }
    if ($(this).width() >= 1000 && !isAsideOpen)
    {
        $('aside').show();
        isAsideOpen = true;
        isExpanded = true;
    } else if ($(this).width() < 1000 && isExpanded) {
        $('aside').hide();
        isAsideOpen = false;
        isExpanded = false;
    }
});

//Progress Bar

$('main').scroll(function(){
    if ($(window).width() < 1000){
        updateProgressMobile();
    }
});

function updateProgressMobile() {
    var percentage = $('main').scrollTop() / ($('main')[0].scrollHeight - $(window).height()) * 100;
    $('#progress-bar-mobile').width(percentage + '%');
}

//Navigation

$('#button-nav').click(function() {
    if (isAsideOpen) {
        $('.nav-bar').css('background', '#000');
        $('#top-bar').toggleClass("exit");
        $('#middle-bar').toggleClass("exit");
        $('#bottom-bar').toggleClass("exit");
        $('#top-bar').toggleClass("open");
        $('#middle-bar').toggleClass("open");
        $('#bottom-bar').toggleClass("open");
        $('aside').fadeOut();
        isAsideOpen = false;
    } else {
        $('.nav-bar').css('background', '#fff');
        $('#top-bar').toggleClass("exit");
        $('#middle-bar').toggleClass("exit");
        $('#bottom-bar').toggleClass("exit");
        $('#top-bar').toggleClass("open");
        $('#middle-bar').toggleClass("open");
        $('#bottom-bar').toggleClass("open");
        $('aside').fadeIn();
        isAsideOpen = true;
    }
});

$('.link').click(function () {
    var section = $(this).text().toLowerCase();
    $('main').scrollTop($('main').scrollTop() + $('#' + section).position().top);
    if ($(window).width() < 1000) {
        $('.nav-bar').css('background', '#000');
        $('aside').fadeOut();
        isAsideOpen = false;
    }
});