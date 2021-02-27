$(document).ready(() => {
    

    // Mobile navigation
    $("#open-menu").click(() => {
        $(".navigation__list").css("width", "30rem");
        $(".navigation__list").css("padding", "0 3rem");
        $(".navigation__list").css("paddingTop", "8rem");
        setTimeout(() => {
            $(".navigation__list > *").css("visibility", "visible");
            $(".navigation__list > *").css("opacity", "0.9");
        }, 300);

    });

    $("#close-menu").click(() => {
        $(".navigation__list").css("width", 0);
        $(".navigation__list").css("padding", 0);
        $(".navigation__list > *").css("visibility", "hidden");
        $(".navigation__list > *").css("opacity", "0");
    });

    // Sticky navigation
    $(".js--section-about").waypoint(function (direction) {
        if (direction == "down") {
            $(".navigation").addClass("navigation--sticky");
        } else {
            $(".navigation").removeClass("navigation--sticky");
        }
    }, {
        offset: "55px"
    });

    // Scroll on buttons
    $(".js--scroll-to-reserve").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-reserve").offset().top }, 1500);
    });

    $(".js--scroll-to-start").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-about").offset().top }, 1000);
    });

    $(".js--scroll-to-profit").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-profit").offset().top }, 1000);
    });

    $(".js--scroll-to-footer").click(function () {
        $("html, body").animate({ scrollTop: $(".js--footer").offset().top }, 1000);
    });

    $(".js--scroll-to-organisers").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-organisers").offset().top }, 1000);
    });

    $(".js--scroll-to-about").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-about").offset().top }, 1000);
    });

    // Animations on scroll 
    $(".js--section-about").waypoint(function () {
        this.element.querySelector(".heading-secondary").style.animation = "moveFromTop .75s ease-in forwards";
        this.element.querySelector(".section-about__features").style.animation = "appearance 1.5s .75s forwards";
    }, {
        offset: "50%"
    });

    $(".js--section-clients").waypoint(function () {
        this.element.querySelector(".section-clients__features").style.animation = "appearance 1.5s forwards";
    }, {
        offset: "50%"
    });

    $(".js--section-profit").waypoint(function () {
        this.element.querySelectorAll(".section-profit__item").forEach(function (elem) {
            elem.style.animation = "moveFromBottom 1s forwards";
        });
    }, {
        offset: "25%"
    });

    $(".js--section-organisers").waypoint(function () {
        this.element.querySelector(".section-organisers__box").style.animation = "moveFromBottom 1s forwards";
    }, {
        offset: "50%"
    })

    quotationsVisited = false;

    // Changing quotations on scroll
    $(".js--section-quotations").waypoint(function () {
        if (!quotationsVisited) {
            const quotations = Array.from(this.element.querySelectorAll(".quote-box__quotation"));
            const visible = "quote-box__quotation--visible";

            let i = 0;
            quotationsVisited = true;

            const waitForAnimation = index => {
                return new Promise((resolve, reject) => {
                    quotations[index].style.animation = "moveToRightScreen 1s ease-in forwards";

                    setTimeout(() => {
                        // waiting
                        resolve();
                    }, 900);
                });
            }

            setInterval(() => {
                waitForAnimation(i).then(() => {
                    quotations[i].classList.remove(visible);

                    i = (i === 3) ? 0 : i + 1;

                    quotations[i].style.animation = "moveFromLeftScreen 1s ease-out 1.25s backwards";
                    quotations[i].classList.add(visible);
                });
            }, 5000);


        }
    }, {
        offset: "25%"
    });


//pierwszy slajder

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        // cssEase: 'linear',
        touchMove: true,
        prevArrow:'<button class="slick-prev"> < </button>',
        nextArrow:'<button class="slick-next"> > </button>',
        
        //         responsive: [                        
        //             {
        //               breakpoint: 576,
        //               settings: {
        //                 centerMode: false,
        //                 variableWidth: false,
        //               }
        //             },
        //         ]
      });
      
      
      var imgs = $('.slider img');
      imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
          'background-image': 'url(' + $(this).attr('src') + ')', 
          'background-position': 'center',            
          '-webkit-background-size': 'cover',
          'background-size': 'cover', 
        });
        $(this).hide();
      });


//drugi slajder

      $('.gallery-inner').on( "mousemove", function( event ) {
  
        var ePageX = event.pageX;
        var ePageY = event.pageY;
        var $captionBlock = $('.caption-block');
      
        
        $(this).css({
          'transform' : 'translateX(-'+(ePageX * 0.5)+'px)'
        });
        
        
        $captionBlock.css({
          top: (ePageY + 30) + 'px',
          left: (ePageX + 30) + 'px'
        }); 
       
       
        
      });
      
      $('.gallery-inner .item').on('mouseenter', function() {
        var $description = $(this).find('.description');
        var $desc = $description.html();
        var $captionBlock = $('.caption-block');
        $captionBlock.html($desc).addClass('visible');
      });
      
      $('.gallery-inner').on('mouseleave', function() {
        var $captionBlock = $('.caption-block');
        $captionBlock.html('').removeClass('visible');
      });
      
      $('.gallery-inner .item').on('click', function(event) {
        event.stopPropagation();
        
        var ePageX = event.pageX;
        var ePageY = event.pageY;
        var $this = $(this);
        var $img = $this.find('img').clone();
        var $viewer = $('.viewer');
        var $imgContainer = $('.viewer').find('.img-container');
      
        $imgContainer.html($img);
       
        
        $viewer.fadeIn(500, function() {
          
        });
        
      });
      
      $('.viewer').on('click', function(event) {
        event.stopPropagation();
      });
      
      $('body').on('click', function(e) {
          $('.viewer').fadeOut(500);
      
      });
      
      $('.close-viewer').on('click', function() {
        $('.viewer').fadeOut(500);
      });
      
      $('.gallery-inner .item').on('transitionend', function() {
         
      });

//trzeci


});




 
 