$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//header_menu-mobile
	$('.btn-menu-mobile').on("click", function(event) {
      event.preventDefault();
      $('.nav-mobile').toggle();
  	});

	//header_slider
	var controlSlide = document.querySelectorAll(".slide-control i");
			Slide = $(this).find(".main_slider .slide");
			timerSlide= 0;
			indexActive = 0;
			timerDurationSlide = 10000;

	for (var i = 0; i < controlSlide.length; i++) {
	  	n = i;
	  	clickControl(controlSlide[i], n);
	}

	function showSlide (control) {
		for (var i = 0; i < Slide.length; i++) {
			controlSlide[i].classList.remove("active-control");
			Slide[i].classList.remove("active-my");
		}
		controlSlide[control].classList.add("active-control");
		Slide[control].classList.add("active-my");
		indexActive = control;
	}
	
	function clickControl(control, n) {
	  control.addEventListener('click', function() {
		  if (timerSlide) {
	 			clearInterval(timerSlide); //обнуляем таймер при нажатии
	 			FtimerSlide();
	 		}
	 	  showSlide(n);
	  });
	}

	if ($('.slide').length) {
	 	showSlide(0);
	}

 	//FtimerSlide(); //запускаем слайдшоу

 	function FtimerSlide() {

 		timerSlide = setInterval(function() {
	 		if (indexActive == 2) {
	 			showSlide(0);
	 		} else {
	 				showSlide(indexActive + 1);
	 		}
 		}, timerDurationSlide);
 	}

 	//попап коучинг
 	$('.kouching_page_5 .btn-more').on('click', function(e) {
 		e.preventDefault();

 		$('.kouching_page_5 .modal-window').addClass('active-modal');
 		$('.kouching_page_5 .modal-bg').addClass('active-modal-bg');
 	});

 	$('.kouching_page_5 .modal-window .modal-closer').on('click', function(e) {
 		e.preventDefault();

 		$('.kouching_page_5 .modal-window').removeClass('active-modal');
 		$('.kouching_page_5 .modal-bg').removeClass('active-modal-bg');
 	});

 	//попап онлайн магазин
 	$('.online_store_page_6 .btn-more').on('click', function(e) {
 		e.preventDefault();

 		$('.online_store_page_6 .modal-store-window').addClass('active-modal-store');
 		$('.online_store_page_6 .modal-store-bg').addClass('active-modal-store-bg');
 	});

 	$('.online_store_page_6 .modal-store-window .btn-close').on('click', function(e) {
 		e.preventDefault();

 		$('.online_store_page_6 .modal-store-window').removeClass('active-modal-store');
 		$('.online_store_page_6 .modal-store-bg').removeClass('active-modal-store-bg');
 	});
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
