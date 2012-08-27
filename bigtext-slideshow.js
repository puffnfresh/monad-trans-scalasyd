$(function() {
    try {
        WebFont.load({
            google: {
                families: fonts
            },
            active: function() {
                // Ugly hack
                setTimeout(renderSlide, 500);
            }
        });
    } catch(e) {
        console.log("No web fonts");
    }

    console.log($('body > div').length + " slides");

    function renderSlide() {
        var current = $('body > div.current');
        $('body').attr('class', current.attr('class') || '');
        $('#bigtext-styleinjection style').text('');
        current.bigtext();
    }
    function gotoSlide(slide) {
        if(!slide.length) return;
        var current = $('body > div.current').removeClass('current');
        slide.addClass('current');
        renderSlide();
    }
    function firstSlide() {
        gotoSlide($('body > div:first'));
    }
    function lastSlide() {
        gotoSlide($('body > div:last'));
    }
    function nextSlide() {
        gotoSlide($('body > div.current').next());
    }
    function prevSlide() {
        gotoSlide($('body > div.current').prev());
    }
    function reloadSlide() {
        gotoSlide($('body > div.current'));
    }
    $(window).resize(reloadSlide);
    $(document).click(nextSlide);
    $(document).keydown(function(e) {
        switch(e.keyCode) {
        case 34:
        case 39:
        case 40:
            nextSlide();
            break;
        case 33:
        case 37:
        case 38:
            prevSlide();
            break;
        case 36:
            firstSlide();
            break;
        case 35:
            lastSlide();
            break;
        }
    });
});
