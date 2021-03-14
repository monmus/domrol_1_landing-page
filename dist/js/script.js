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
            }, 3000);


        }
    }, {
        offset: "25%"
    });

//     //slideshow style interval
// var autoSwap = setInterval( swap,3500);

// //pause slideshow and reinstantiate on mouseout
// $('ul, span').hover(
//   function () {
//     clearInterval(autoSwap);
// }, 
//   function () {
//    autoSwap = setInterval( swap,3500);
// });

// //global variables
// var items = [];
// var startItem = 1;
// var position = 0;
// var itemCount = $('.carousel li.items').length;
// var leftpos = itemCount;
// var resetCount = itemCount;

// //unused: gather text inside items class
// $('li.items').each(function(index) {
//     items[index] = $(this).text();
// });

// //swap images function
// function swap(action) {
//   var direction = action;
  
//   //moving carousel backwards
//   if(direction == 'counter-clockwise') {
//     var leftitem = $('.left-pos').attr('id') - 1;
//     if(leftitem == 0) {
//       leftitem = itemCount;
//     }
    
//     $('.right-pos').removeClass('right-pos').addClass('back-pos');
//     $('.main-pos').removeClass('main-pos').addClass('right-pos');
//     $('.left-pos').removeClass('left-pos').addClass('main-pos');
//     $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
    
//     startItem--;
//     if(startItem < 1) {
//       startItem = itemCount;
//     }
//   }
  
//   //moving carousel forward
//   if(direction == 'clockwise' || direction == '' || direction == null ) {
//     function pos(positionvalue) {
//       if(positionvalue != 'leftposition') {
//         //increment image list id
//         position++;
        
//         //if final result is greater than image count, reset position.
//         if((startItem+position) > resetCount) {
//           position = 1-startItem;
//         }
//       }
    
//       //setting the left positioned item
//       if(positionvalue == 'leftposition') {
//         //left positioned image should always be one left than main positioned image.
//         position = startItem - 1;
      
//         //reset last image in list to left position if first image is in main position
//         if(position < 1) {
//           position = itemCount;
//         }
//       }
   
//       return position;
//     }  
  
//    $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
//    $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
//    $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
//    $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

//     startItem++;
//     position=0;
//     if(startItem > itemCount) {
//       startItem = 1;
//     }
//   }
// }

// //next button click function
// $('#next').click(function() {
//   swap('clockwise');
// });

// //prev button click function
// $('#prev').click(function() {
//   swap('counter-clockwise');
// });

// //if any visible items are clicked
// $('li').click(function() {
//   if($(this).attr('class') == 'items left-pos') {
//      swap('counter-clockwise'); 
//   }
//   else {
//     swap('clockwise'); 
//   }
// });


//pierwszy slajder




    // $('.slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     centerMode: true,
    //     variableWidth: true,
    //     infinite: true,
    //     focusOnSelect: true,
    //     // cssEase: 'linear',
    //     touchMove: true,
    //     prevArrow:'<button class="slick-prev"> < </button>',
    //     nextArrow:'<button class="slick-next"> > </button>',
        
        //         responsive: [                        
        //             {
        //               breakpoint: 576,
        //               settings: {
        //                 centerMode: false,
        //                 variableWidth: false,
        //               }
        //             },
        //         ]
    //   });
      
      
    //   var imgs = $('.slider img');
    //   imgs.each(function(){
    //     var item = $(this).closest('.item');
    //     item.css({
    //       'background-image': 'url(' + $(this).attr('src') + ')', 
    //       'background-position': 'center',            
    //       '-webkit-background-size': 'cover',
    //       'background-size': 'cover', 
    //     });
    //     $(this).hide();
    //   });


//drugi slajder

    //   $('.gallery-inner').on( "mousemove", function( event ) {
  
    //     var ePageX = event.pageX;
    //     var ePageY = event.pageY;
    //     var $captionBlock = $('.caption-block');
      
        
    //     $(this).css({
    //       'transform' : 'translateX(-'+(ePageX * 0.5)+'px)'
    //     });
        
        
    //     $captionBlock.css({
    //       top: (ePageY + 30) + 'px',
    //       left: (ePageX + 30) + 'px'
    //     }); 
       
       
        
    //   });
      
    //   $('.gallery-inner .item').on('mouseenter', function() {
    //     var $description = $(this).find('.description');
    //     var $desc = $description.html();
    //     var $captionBlock = $('.caption-block');
    //     $captionBlock.html($desc).addClass('visible');
    //   });
      
    //   $('.gallery-inner').on('mouseleave', function() {
    //     var $captionBlock = $('.caption-block');
    //     $captionBlock.html('').removeClass('visible');
    //   });
      
    //   $('.gallery-inner .item').on('click', function(event) {
    //     event.stopPropagation();
        
    //     var ePageX = event.pageX;
    //     var ePageY = event.pageY;
    //     var $this = $(this);
    //     var $img = $this.find('img').clone();
    //     var $viewer = $('.viewer');
    //     var $imgContainer = $('.viewer').find('.img-container');
      
    //     $imgContainer.html($img);
       
        
    //     $viewer.fadeIn(500, function() {
          
    //     });
        
    //   });
      
    //   $('.viewer').on('click', function(event) {
    //     event.stopPropagation();
    //   });
      
    //   $('body').on('click', function(e) {
    //       $('.viewer').fadeOut(500);
      
    //   });
      
    //   $('.close-viewer').on('click', function() {
    //     $('.viewer').fadeOut(500);
    //   });
      
    //   $('.gallery-inner .item').on('transitionend', function() {
         
    //   });

//trzeci

// var $item = 0,
// $itemNo = $(".hero figure").length;
// function transitionSlide() {
// $item++;
// if ($item > $itemNo - 1) {
//   $item = 0;
// }
// $(".hero figure").removeClass("on");
// $(".hero figure")
//   .eq($item)
//   .addClass("on");
// }
// var $autoTransition = setInterval(transitionSlide, 5500);

// $(".hero figure").click(function() {
// clearInterval($autoTransition);
// $item = $(this).index();
// $(".hero figure").removeClass("on");
// $(".hero figure")
//   .eq($item)
//   .addClass("on");
// $autoTransition = setInterval(transitionSlide, 5500);
// });




// const current = document.querySelector('#current');
// const imgs = document.querySelector('.imgs');
// const img = document.querySelectorAll('.imgs img');
// const opacity = 0.6;

// // Set first img opacity
// img[0].style.opacity = opacity;

// imgs.addEventListener('click', imgClick);

// function imgClick(e) {
//   // Reset the opacity
//   img.forEach(img => (img.style.opacity = 1));

//   // Change current image to src of clicked image
//   current.src = e.target.src;

//   // Add fade in class
//   current.classList.add('fade-in');

//   // Remove fade-in class after .5 seconds
//   setTimeout(() => current.classList.remove('fade-in'), 500);

//   // Change the opacity to opacity var
//   e.target.style.opacity = opacity;
// }




// console.clear();
// initslider();
// function initslider() {
//   const elPrevButton = document.querySelector('.slider #prev');
//   const elNextButton = document.querySelector('.slider #next');

//   const elImages = Array.from(document.querySelectorAll('.slider .image'));

//   let state = {
//     photo: 0
//   };

//   function send(event) {

//     const elActives = document.querySelectorAll('.slider [data-active]');

//     Array.from(elActives)
//       .forEach(el => el.removeAttribute('data-active'));

//     switch (event) {
//       case 'PREV':
//         state.photo--;
//         // Math.max(state.photo - 1, 0);
//         break;
//       case 'NEXT':
//         state.photo++;
//         // Math.min(state.photo + 1, elImages.length - 1);
//         break;
//       default:
//         state.photo = +event;
//         break;
//     }

//     var len = elImages.length;
//     // Loop Around
//     //state.photo = ( ( state.photo % len) + len ) % len;
//     state.photo = Math.max(0, Math.min( state.photo, len - 1) );

//     Array.from(document.querySelectorAll(`.slider [data-key="${state.photo}"]`))
//       .forEach( el => {
//       el.setAttribute('data-active', true);
//     });


//   }
//   elPrevButton.addEventListener('click', () => {
//     send('PREV');
//   });

//   elNextButton.addEventListener('click', () => {
//     send('NEXT');
//   });

//   const elStatus = Array.from(document.querySelectorAll('.slider .stat'));
//   elStatus.forEach( stat => { 
//     stat.addEventListener('click', () => {
//       send(stat.dataset.key);
//     });
//   });
//   send(0);
// };


(function($) {
 
    var Slider = (function () {
      
        function _Slider(element, settings) {
            this.defaults = {
                slideDuration: '3000',
                speed: 500
                /*
                ,
                arrowRight: '.right-arrow',
                arrowLeft: '.left-arrow'
                */
            };

            this.settings = $.extend({}, this.defaults, settings);

            this.initials = {
                currentSlide: 0,
                $currentSlide: null,
                totalSlides: false,
                cssTransitions: false
            };

            $.extend(this, this.initials);

            this.$el = $(element);

            this.changeSlide = $.proxy(this.changeSlide, this);

            this.init();

        }

        return _Slider;

    })();

    Slider.prototype.init = function () {
        this.cssTransitionTest();
        this.$el.addClass('slider');
        this.build();
        this.events();
        this.activate();
        this.initTimer();
    };

    Slider.prototype.cssTransitionTest = function () {
        var elem = document.createElement('modernizr');

        var props = ['transition', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];

        for (var i in props) {
            var prop = props[i];
            var result = elem.style[prop] !== undefined ? prop : false;
            if (result) {
                this.cssTransitions = result;
                break;
            }
        }
    };

    Slider.prototype.addCSSDuration = function () {
        var sliderModule = this;

        sliderModule.$el.find('.testimonial-slide').each(function () {

            this.style[sliderModule.cssTransitions + 'Duration'] = sliderModule.settings.speed + 'ms';
        });
    };

    Slider.prototype.removeCSSDuration = function () {
        var sliderModule = this;

        //here we are using 'this' but we can also write sliderModule
        //since we are refering to the same element...shorter and cleaner
        this.$el.find('.testimonial-slide').each(function () {
            this.style[sliderModule.cssTransitions + 'Duration'] = '';
        });
    };


    //create indicator dots below which also have the functionality
    //as the arrows
    Slider.prototype.build = function () {
        var $indicators = this.$el.append("<ul class='dots-wrapper'>").find('.dots-wrapper');
        this.totalSlides = this.$el.find('.testimonial-slide').length;
        for (var i = 0; i < this.totalSlides; i++) {
            $indicators.append("<li data-index=" + i + ">");
        }
    };

    Slider.prototype.activate = function () {
        this.$currentSlide = this.$el.find('.testimonial-slide').eq(0);
        this.$el.find('.dots-wrapper li').eq(0).addClass('active');
    };

    Slider.prototype.events = function () {
        $('body')
            .on('click', this.settings.arrowRight, {
            direction: 'right'
        }, this.changeSlide)
            .on('click', this.settings.arrowLeft, {
            direction: 'left'
        }, this.changeSlide)
            .on('click', '.dots-wrapper li', this.changeSlide);
    };

    Slider.prototype.clearTimer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };

    Slider.prototype.initTimer = function () {
        this.timer = setInterval(
        this.changeSlide, this.settings.slideDuration);
    };

    Slider.prototype.startTimer = function () {
        this.initTimer();
        this.throttle = false;
    };

    Slider.prototype.changeSlide = function (e) {
        if (this.throttle) {
            return;
        }
        this.throttle = true;

        this.clearTimer();

        var direction = this._direction(e);

        var animate = this._next(e, direction);
        if (!animate) {
            return;
        }

        var $nextSlide = this.$el.find('.testimonial-slide').eq(this.currentSlide).addClass(direction + ' active');

        if (!this.csstransitions) {
            this._jsAnimation($nextSlide, direction);
        } else {
            this._cssAnimation($nextSlide, direction);
        }
    };

    Slider.prototype._direction = function (e) {
        var direction;
        if (typeof e !== 'undefined') {
            direction = (typeof e.data === 'undefined' ? 'right' : e.data.direction);
        } else {
            direction = 'right';
        }
        return direction;
    };

    Slider.prototype._next = function (e, direction) {
        var index = (typeof e !== 'undefined' ? $(e.currentTarget).data('index') : undefined);
        switch (true) {
            case (typeof index !== 'undefined'):
                if (this.currentSlide == index) {
                    this.startTimer();
                    return false;
                }
                this.currentSlide = index;
                break;
            case (direction == 'right' && this.currentSlide < (this.totalSlides - 1)):
                this.currentSlide++;
                break;
            case (direction == 'right'):
                this.currentSlide = 0;
                break;
            case (direction == 'left' && this.currentSlide === 0):
                this.currentSlide = (this.totalSlides - 1);
                break;
            case (direction == 'left'):
                this.currentSlide--;
                break;
        }
        return true;
    };

    Slider.prototype._cssAnimation = function ($nextSlide, direction) {
        setTimeout(function () {
            this.$el.addClass('transition');
            this.addDuration();
            this.$currentSlide.addClass('shift' + direction);
        }.bind(this), 100);

        setTimeout(function () {
            this.$el.removeClass('transition');
            this.removeCSSDuration();
            this.$currentSlide.removeClass('active shift-left shift-right');
            this.$currentSlide = $nextSlide.removeClass(direction);
            this._updateIndicators();
            this.startTimer();
        }.bind(this), 100 + this.settings.speed);
    };

    Slider.prototype._jsAnimation = function ($nextSlide, direction) {
        var sliderModule = this;

        if (direction == 'right') {
            sliderModule.$currentSlide.addClass('js-reset-left');
        }
        var animation = {};
        animation[direction] = '0%';

        var animationPrev = {};
        animationPrev[direction] = '100%';

        this.$currentSlide.animate(animationPrev, this.settings.speed);

        $nextSlide.animate(animation, this.settings.speed, 'swing', function () {
            sliderModule.$currentSlide.removeClass('active js-reset-left').attr('style', '');
            sliderModule.$currentSlide = $nextSlide.removeClass(direction).attr('style', '');
            sliderModule._updateIndicators();
            sliderModule.startTimer();
        });
    };

    Slider.prototype._updateIndicators = function () {
        this.$el.find('.dots-wrapper li').removeClass('active').eq(this.currentSlide).addClass('active');
    };

    $.fn.Slider = function (options) {
        return this.each(function (index, el) {
            el.Slider = new Slider(el, options);
        });
    };
})(jQuery);

var args = {
    arrowRight: '.right-arrow',
    arrowLeft: '.left-arrow',
    speed: 500,
    slideDuration: 3000
};

$('.testimonial').Slider(args);





});






 
 