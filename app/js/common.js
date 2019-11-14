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

    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });

    $('.toggle-links').click(function () {
       $(this).siblings('.dropdown-menu').slideToggle();
    });


    // slider
    $('.hall-slider').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendDots: '.hall-arrows',
        responsive: [
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.services-slider').slick({
        slidesToShow: 5,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.reviews-slider').slick({
        slidesToShow: 3,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.reviews-arrows',
        appendDots: '.reviews-arrows',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // fancybox
    $('[data-fancybox="images"]').fancybox();

    $('[data-fancybox="photo"]').fancybox();

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });

    $('[data-fancybox="gallery"]').fancybox({
        caption : function( instance, item ) {
            var caption = $(this).data('caption') || '';

            if ( item.type === 'image' ) {
                caption = (caption.length ? caption + '<br />' : '') + '<a href="' + item.src + '"></a>' ;
            }

            return caption;
        },
        buttons: [
            'download',
            'thumbs',
            'close'
        ],
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
        $('.gallery-box:hidden').slice(0, 4).fadeIn();

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
        var close = $('.modal__close, .overlay, .btn-yes');
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

    // mail
    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });

});




