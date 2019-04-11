//Initialization

var isAsideOpen;
var isExpanded;

$(document).ready(function () {
    isAsideOpen = true;
    if ($(window).width() < 1000){
        isExpanded = false;
    } else {
        isExpanded = true;
        $('.nav-bar').css('background', '#000');
        toggleNav();
    }
});

//Resizing

$(window).on('resize', function(){
    updateProgress();
    updateActive();
    if ($(this).width() < 1000 && isExpanded) {
        $('aside').hide();
        isAsideOpen = false;
        isExpanded = false;
    } else if ($(this).width() >= 1000 && !isAsideOpen) {
        $('aside').show();
        isAsideOpen = true;
        isExpanded = true;
    }
});

//Progress Bar

$('main').scroll(function(){
    updateProgress();
    updateActive();
});

function updateProgress() {
    if ($(window).width() < 1000) {
        var percentage = $('main').scrollTop() / ($('main')[0].scrollHeight - $(window).height()) * 100;
        $('#progress-bar-mobile').width(percentage + '%');
    }
}

function updateActive() {
    if ($("main").scrollTop() + $(window).height() > $('main')[0].scrollHeight - 5) {
        $(".link").removeClass("active");
        $(".link").eq(4).addClass("active");
    } else if ($("main").scrollTop() < $("#code").position().top) {
        $(".link").removeClass("active");
        $(".link").eq(0).addClass("active");
    } else if ($("main").scrollTop() < $("#design").position().top) {
        $(".link").removeClass("active");
        $(".link").eq(1).addClass("active");
    } else if ($("main").scrollTop() < $("#music").position().top) {
        $(".link").removeClass("active");
        $(".link").eq(2).addClass("active");
    } else if ($("main").scrollTop() < $("#blog").position().top) {
        $(".link").removeClass("active");
        $(".link").eq(3).addClass("active");
    }
}

//Navigation

$('#button-nav').click(function() {
    if (isAsideOpen) {
        $('.nav-bar').css('background', '#000');
        toggleNav();
        $('aside').fadeOut();
        isAsideOpen = false;
    } else {
        $('.nav-bar').css('background', '#fff');
        toggleNav();
        $('aside').fadeIn();
        isAsideOpen = true;
    }
});

$('.link').click(function () {
    var section = $(this).text().toLowerCase();
    $('main').scrollTop($('#' + section).position().top);
    if ($(window).width() < 1000) {
        $('.nav-bar').css('background', '#000');
        $('aside').fadeOut();
        isAsideOpen = false;
    }
});

function toggleNav() {
    $('#top-bar').toggleClass("exit");
    $('#middle-bar').toggleClass("exit");
    $('#bottom-bar').toggleClass("exit");
    $('#top-bar').toggleClass("open");
    $('#middle-bar').toggleClass("open");
    $('#bottom-bar').toggleClass("open");
}