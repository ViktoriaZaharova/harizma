$(document).ready(function() {
    $('.btn-burger').on('click', function () {
       $('.toggle-navigation').css({
           left: '0'
       });
    });

    $('.btn-close').on('click', function () {
        $('.toggle-navigation').css({
            left: '-100%'
        });
    });


    // slider
    $('.hall-slider').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.hall-arrows',
        appendDots: '.hall-arrows'
    });


    $('.services-slider').slick({
        slidesToShow: 5,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    $('.reviews-slider').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.reviews-arrows',
        appendDots: '.reviews-arrows'
    });

    // fancybox
    $('[data-fancybox="images"]').fancybox();

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });


    // scroll
    $(window).scroll(function(){
        $('header').toggleClass('fix', $(this).scrollTop() > 0);
    });


    // hidden list > 8
    $('.gallery-wrapper').each(function () {
        if ($(this).find('.gallery-box').length > 8) {
            $(this).find('.gallery-box').slice(8).hide();
            // $(this).parent('.modal-body').append('<div class="text-center load-more-wrap"><button class="btn btn-default">Загрузить еще</button></div>');
        }

    });

    // show list all
    $('.btn-more').on('click', function (e) {
        e.preventDefault();
        $('.gallery-box:hidden').slice(0, 4).slideDown();

        var onBlock = $('.gallery-box:hidden').length;
        if(onBlock <= 0) {
            $('.btn-more').hide();
        }
    });
    // show list all


    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .overlay');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('display', 'flex')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });
        });

        close.click(function () {
            modal
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('display', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });
    });
//end

});




