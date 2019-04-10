$(".link").click(function () {
    var section = $(this).text().toLowerCase();
    if ($(window).width() >= 1000) {
        $("main").scrollTop($("#" + section).position().top);
    } else {
        $("html").scrollTop($("#" + section).position().top);
    }
});

$(window).on('resize', function(){
    var w = $(this);
    if (w.width() >= 1000) {
        $('aside').show();
    }
});

$('#button-open').click(function() {
    $('aside').show();
})

$('#button-close').click(function() {
    $('aside').hide();
})