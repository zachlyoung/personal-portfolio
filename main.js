$(document).ready(function () {
    //Initialization

    var mobileBreakpoint = 1100;
    var isAsideOpen = true;
    var isExpanded;

    if ($(window).width() < mobileBreakpoint){
        isExpanded = false;
    } else {
        isExpanded = true;
        $('.nav-bar').css('background', '#000');
        toggleNav();
    }

    //Resizing

    $(window).on('resize', function(){
        updateProgress();
        updateActive();
        if ($(this).width() < mobileBreakpoint && isExpanded) {
            $('aside').hide();
            isAsideOpen = false;
            isExpanded = false;
        } else if ($(this).width() >= mobileBreakpoint && !isAsideOpen) {
            $('aside').show();
            isAsideOpen = true;
            isExpanded = true;
        }
    });

    //Progress Bar and Active Links

    $('main').scroll(function(){
        updateProgress();
        updateActive();
    });

    function updateProgress() {
        if ($(window).width() < mobileBreakpoint) {
            var percentage = $('main').scrollTop() / ($('main')[0].scrollHeight - $(window).height()) * 100;
            $('#progress-bar-mobile').width(percentage + '%');
        }
    }

    function updateActive() {
        if ($("main").scrollTop() + $(window).height() > $('main')[0].scrollHeight - 5 || $("main").scrollTop() >= $("#blog").position().top) {
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
            $('aside').fadeOut(250);
            isAsideOpen = false;
        } else {
            $('.nav-bar').css('background', '#fff');
            toggleNav();
            $('aside').fadeIn(250);
            isAsideOpen = true;
        }
    });

    $('.link').click(function () {
        var section = $(this).text().toLowerCase();
        $('main').scrollTop($('#' + section).position().top + parseInt($('#' + section).css("marginTop")));
        if ($(window).width() < mobileBreakpoint) {
            $('.nav-bar').css('background', '#000');
            toggleNav();
            $('aside').fadeOut(250);
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
});