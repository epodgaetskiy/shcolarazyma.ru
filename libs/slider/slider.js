var slider = (function(){

	var flag = true;
		timerDuration = 10000000;
		timer = 0;

	//приватные методы
	return {
		init: function(){

			var _this = this;
			//включим автопереключение

			_this.autoSwitch();

			$('.slider-control').on('click', function(e){
				e.preventDefault();

				var $this = $(this);
					slides = $this.closest('.slider').find('.slider-item');
					activeSlide = slides.filter('.active');
					nextSlide = activeSlide.next();
					prevSlide = activeSlide.prev();
					firstSlide = slides.first();
					lastSlide = slides.last();

				_this.clearTimer(); //чистка таймера при нажатии

				if ($this.hasClass('slider-arrows-next')) {
					if (nextSlide.length) {
						_this.moveSlide(nextSlide, 'forward');
					} else {
							_this.moveSlide(firstSlide, 'forward');
					}
				}	else {
					if (prevSlide.length) {
						_this.moveSlide(prevSlide, 'backward');
					} else {
							_this.moveSlide(lastSlide, 'backward');
					}
				}

			});

		},

		moveSlide: function(slide, direction){

			var	container = slide.closest('.slider');
					slides = container.find('.slider-item');
					activeSlide = slides.filter('.active');
					slideWidth = slides.width();
					duration = 500;
					reqCssPosition = 0;
					reqSlideStrafe = 0;

			if (flag) {
				flag = false;
				if (direction === 'forward') {
					reqCssPosition = slideWidth;
					reqSlideStrafe = -slideWidth;
				} else if (direction === 'backward') {
						reqCssPosition = -slideWidth;
						reqSlideStrafe = slideWidth;
				}

				slide.css('left', reqCssPosition).addClass('inslide');

				var movableSlide = slides.filter('.inslide');

				activeSlide.animate({left: reqSlideStrafe}, duration);
				movableSlide.animate({left: 0}, duration, function(){

					var $this = $(this);

					slides.css('left', '0').removeClass('active');
					$this.toggleClass('inslide active');

					flag = true;

				});
			}
		},

		autoSwitch : function(){

			var _this = this;

			timer = setInterval(function(){
				var slider = $('.slider-list .slider-item');
					activeSlide = slider.filter('.active');
					nextSlide = activeSlide.next();
					firstSlide = slider.first();

				if (nextSlide.length) {
						_this.moveSlide(nextSlide, 'forward');
					} else {
							_this.moveSlide(firstSlide, 'forward');
					}

			}, timerDuration);

		},

		clearTimer: function(){
			if (timer) {
				clearInterval(timer);
				this.autoSwitch();
			}
		},

	}
}());

$(document).ready(function(){
	if ($('.slider').length) {
		slider.init();
	}
});


