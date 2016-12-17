(function($) {
    $(document).ready(function() {
        var _smenu = $('#sidebar-menu');

        var _menu_index = 1;
        _smenu.find('.navbar-header > ul > li').each(function(key, value) {
            var _url = $(value).find('>a').attr('href');

            var _text_index = '';
            if(_menu_index < 10)
                _text_index = '0' + _menu_index;

            if(paths.pageUrlBase === _url && !$(value).hasClass('active-item')) {
                $(value).addClass('active-item');
            }

            $(value).find('>a').after('<a href="'+ _url +'" class="item-index">'+ _text_index +'</a>');

            var _child_menu_index = 1;
            $(value).find('>ul.nav-children > li').each(function(ckey, cvalue) {
                _url = $(cvalue).find('>a').attr('href');

                if(paths.pageUrlBase === _url && !$(cvalue).hasClass('active-item')) {
                    $(cvalue).addClass('active-item');
                }
                if(_child_menu_index < 10)
                    _text_index = '0' + _child_menu_index;

                $(cvalue).find('>a').after('<a href="'+ _url +'" class="item-index">'+ _text_index +'</a>');
                _child_menu_index++;
            });
            _menu_index++;
        });

        _smenu.find('#sidebar-navbar li a').on('click', function(e) {
            e.preventDefault();

            var _id = $(this).attr('href');
            //window.location.hash = _id;
            if($(_id).length > 0) {
                $('body, html').animate({
                    scrollTop: parseInt($(_id).offset().top - 67)
                }, '500');
            }
        });

        var _site_header = $('header.site-header > nav.navbar').clone();
        _site_header.find('button[data-target="#navbar-header-toggle"].navbar-toggler').attr({'data-target': '#navbar-header-toggle-sticky', 'aria-controls': '#navbar-header-toggle-sticky'});
        _site_header.find('div.navbar-header[id="navbar-header-toggle"]').attr('id', 'navbar-header-toggle-sticky');
        $('header.site-header').append('<nav class="navbar navbar-fixed-top sticky">'+ _site_header.html() +'</nav>');

        var _scrollTop = $(window).scrollTop();
        var _content_height = $('.page-content').height();

        if(_scrollTop > 130) {
            $('.site-header > .navbar.sticky').addClass('scroll-active');
        }

        $(window).on('scroll', function() {
            _scrollTop = $(window).scrollTop();

            if(_scrollTop > 130) {
                $('.site-header > .navbar.sticky').addClass('scroll-active');
            } else {
                $('.site-header > .navbar.sticky').removeClass('scroll-active');
            }
        });

        _smenu.find('.navbar-toggler').on('click', function(e) {
            $('body').toggleClass('sidebar-active');
            $(this).find('.nav-toggle').toggleClass('active');
        });

        _smenu.find('.navbar-wrapper').slimScroll({
            height: '100%',
            alwaysVisible:true
        });

        var _same_event = '';
        $(document).on('click', '.text-highlighted', function(e) {
            var _header_text = $(this).text();
            if(_same_event !== _header_text) {
                _same_event = _header_text;
                var data_text = $(this).attr('data-text');
                $('.text-highlighted').removeClass('text-selected');
                $(this).addClass('text-selected');
                $('.code-display').addClass('active');

                $('.show-highlighted-text').html('<h1>'+ _header_text +'</h1><p>' + data_text + '</p>');
            } else {
                $('.code-display').toggleClass('active');
                $(this).toggleClass('text-selected');
            }
        });

        $('.code-display .show-highlighted-text').slimScroll({
            height: '100%',
            alwaysVisible:true
        });

        $(document).on('click', '.pricing-container .row-item.row-details .col-price .col-desc:not(.has-no-plan)', function() {
            var _parents = $(this).parents('.row-item.row-details');
            _parents.addClass('row-active');
            _parents.find('.plan-details').slideToggle();
            _parents.find('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
        });

        $(document).on('click', '.data-toggle', function() {
            if(!$(this).find('>div').hasClass('has-no-plan')) {
                var _item = $(this).next('.toggle-details');
                _item.slideToggle();
                $(this).find('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
            }
        });

        $(document).on('change', 'input#annual-toggle', function() {
            $('.price-rate-annual').toggle('slow');
            $('.price-rate').toggle('slow');
        });

        $(document).on('change', 'input#book-toggle', function() {
            $('#book-consultation').toggle('slow');
            $('#book-try-demo').toggle('slow');
        });

        var pricing = {
            80000: {
                price: 0,
                price_annual: 0,
                ecommerce: 6,
                transaction: 110
            },
            450000: {
                price: 285,
                price_annual: 243,
                ecommerce: 2,
                transaction: 85
            },
            1000000: {
                price: 480,
                price_annual: 408,
                ecommerce: 1.5,
                transaction: 75
            },
            20000000: {
                price: 930,
                price_annual: 791,
                ecommerce: 1,
                transaction: 65
            }
        };

        function updateSlider(volume) {
            var price_wrapper = $('.pricing-calculation');
            price_wrapper.find('.price-rate>span').text(pricing[volume].price);
            price_wrapper.find('.price-rate-annual>span').text(pricing[volume].price_annual);
            price_wrapper.find('.ecommerce-text').text(pricing[volume].ecommerce);
            price_wrapper.find('.transaction-text').text(pricing[volume].transaction);

            if (pricing[volume].price == 0) {
                price_wrapper.find('.not-free').addClass('has-no-plan');

            } else {
                price_wrapper.find('.not-free').removeClass('has-no-plan');
            }
        }

        $('#pricing-in-slider').slider({
            min: 10000,
            max: 20000000,
            step: 1000,
            scale: 'logarithmic',
            tooltip: 'always',
            formatter: function(value) {
                if (value == 20000000) return "$20,000,000 and over";
                return '$' + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }
        });

        $('#pricing-in-slider').on("change", function(slideEvt) {
            for (var i in pricing) {
                if (slideEvt.value.newValue < i) {
                    break;
                }
            }
            updateSlider(i);
        });

        updateSlider(80000);

        $('.site-list > ul').bxSlider({
            mode: 'horizontal',
            slideWidth: 395,
            maxSlides: 4,
            randomStart: true
        });

        $('#preferred-dates-times').datetimepicker({
            mask:'9999/19/39 29:59',
        });

        $('.form-newsletter input[type="checkbox"]').iCheck({
            checkboxClass: 'icheckbox_flat-dark-grey'
        });

        /* Fullscreen video */
        $.base.video_yt.init();
        $.base.video_vimeo.init();

         enquire.register("screen and (min-width: 992px)", {
            setup: function() {
                if(is_page_features) {
                    $('body').removeClass('sidebar-active');
                    $('.nav-toggle').removeClass('active');
                }
            },
            match: function() {
                if(is_page_features) {
                    $('body').addClass('sidebar-active');
                }
            },
            unmatch: function() {
                if(is_page_features) {
                    $('body').removeClass('sidebar-active');
                    $('.nav-toggle').removeClass('active');
                }
            }
        });
    })
})(jQuery);