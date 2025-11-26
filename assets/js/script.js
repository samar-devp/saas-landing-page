(function ($) {
	"use strict";

	var $slimScrolls = $('.slimscroll');

	var $slimScrolled = $('.slimscrolled');
	

	// Stick Sidebar

	// if ($(window).width() > 767) {
	// 	if ($('.theiaStickySidebar').length > 0) {
	// 		$('.theiaStickySidebar').theiaStickySidebar({
	// 			// Settings
	// 			additionalMarginTop: 30
	// 		});
	// 	}
	// }

	// Sidebar

	if ($(window).width() <= 991) {
		$(document).on('click', '.main-nav a', function (e) {
			if ($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if (!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if ($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});
	}

	// Select 2

	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}

	// Date Time Picker

	if ($('.datetimepicker').length > 0) {
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY',
			icons: {
				up: "fas fa-chevron-up",
				down: "fas fa-chevron-down",
				next: 'fas fa-chevron-right',
				previous: 'fas fa-chevron-left'
			}
		});
	}

	if ($('.timepicker1').length > 0) {
		$('.timepicker1').datetimepicker({
			format: 'HH:mm A',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	// AOS Animation

	if ($('.main-wrapper .aos').length > 0) {
		AOS.init({
			duration: 1200,
			once: true,
		});
	}

	// Mobile menu sidebar overlay

	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function () {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').toggleClass('menu-opened');
		return false;
	});

	$(document).on('click', '.sidebar-overlay', function () {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});

	$(document).on('click', '#menu_close', function () {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});

	// Tooltip

	if ($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}

	// Content div min height set

	function resizeInnerDiv() {
		var height = $(window).height();
		var header_height = $(".header").height();
		var footer_height = $(".footer").height();
		var setheight = height - header_height;
		var trueheight = setheight - footer_height;
		$(".content").css("min-height", trueheight);
	}

	if ($('.content').length > 0) {
		resizeInnerDiv();
	}

	$(window).resize(function () {
		if ($('.content').length > 0) {
			resizeInnerDiv();
		}
	});

	document.addEventListener('partials:loaded', function () {
		if ($('.content').length > 0) {
			resizeInnerDiv();
		}
	});

	//owl carousel

	

	// Service slider 
	if ($('.owl-carousel.client-slider').length > 0) {
		$('.owl-carousel.client-slider').owlCarousel({
			loop: true,
			margin: 24,
			nav: false,
			dots: true,
			smartSpeed: 2000,
			autoplay: true,
			responsive: {
				0: {
					items: 2
				},

				550: {
					items: 3
				},
				700: {
					items: 4
				},
				1200: {
					items: 6
				},
				1400: {
					items: 6
				}
			}
		})
	}

	// Features Details Page slider 
	if ($('.owl-carousel.ftrs-slider').length > 0) {
		$('.owl-carousel.ftrs-slider').owlCarousel({
			loop: true,
			margin: 24,
			nav: false,
			dots: true,
			smartSpeed: 2000,
			autoplay: true,
			responsive: {
				0: {
					items: 1
				},

				768: {
					items: 2
				},
				992: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		})
	}

	// Service slider 
	if ($('.owl-carousel.casestudy-slider').length > 0) {
		$('.owl-carousel.casestudy-slider').owlCarousel({
			loop: true,
			margin: 24,
			nav: false,
			dots: true,
			smartSpeed: 2000,
			autoplay: false,
			responsive: {
				0:{
					items:1
				},
				768:{
					items:2
				},
				1000:{
					items:3
				}
			}
		})
	}
// Service slider 
if ($('.owl-carousel.cust-slider').length > 0) {
	$('.owl-carousel.cust-slider').owlCarousel({
		loop: true,
		margin: 24,
		nav: false,
		dots: true,
		smartSpeed: 2000,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
}	

if ($('.owl-carousel.retailer-slider').length > 0) {
	$('.owl-carousel.retailer-slider').owlCarousel({
		items: 6,
		margin: 15,
		nav: true,
		dots: false,
		loop: false,
		autoWidth:true,
		responsiveClass: true,
		navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1170: {
				items: 4,
			},
			1200: {
				items: 4,
			},
			1400: {
				items: 4,
			}
		}
	})
}

	// Service slider 
	if ($('.owl-carousel.reviews-slider').length > 0) {
		$('.owl-carousel.reviews-slider').owlCarousel({
			loop: true,
			margin: 24,
			nav: true,
			dots: false,
			smartSpeed: 2000,
			navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				},

				550: {
					items: 2
				},
				700: {
					items: 2
				},
				1200: {
					items: 3
				},
				1400: {
					items: 3
				}
			}
		})
	}

	//Pricing-Testi-slider
	if ($('.testi-slider').length > 0) {
		$('.testi-slider').owlCarousel({
			loop: true,
			margin: 15,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navText: ['<i class="feather-arrow-left"></i>', '<i class="feather-arrow-right"></i>'],
			responsive: {
				0: {
					items: 1
				}
			}
		})
	}

    //Slimscroll JS 
	if($slimScrolls.length > 0) {
			$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#0049CB',
			wheelStep: 10,
			touchScrollStep: 100
			});
			var wHeight = $(window).height() - 60;
			$slimScrolls.height(wHeight);
			$('.sidebar .slimScrollDiv').height(wHeight);
			$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
			});
		}

		 //Slimscroll JS 
	if($slimScrolled.length > 0) {
		$slimScrolled.slimScroll({
		height: 'auto',
		width: '100%',
		position: 'left',
		size: '7px',
		color: '#0049CB',
		wheelStep: 10,
		touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolled.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
		var rHeight = $(window).height() - 60;
		$slimScrolled.height(rHeight);
		$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}

	// Preloader

	$(window).on('load', function () {
		if ($('#loader').length > 0) {
			$('#loader').delay(350).fadeOut('slow');
			$('body').delay(350).css({ 'overflow': 'visible' });
		}
	})

	// Datepicker
	var maxDate = $('#maxDate').val();
	if ($('#dob').length > 0) {
		$('#dob').datepicker({
			startView: 2,
			format: 'dd/mm/yyyy',
			autoclose: true,
			todayHighlight: true,
			endDate: maxDate
		});
	}
	if ($('#editdob').length > 0) {
		$('#editdob').datepicker({
			startView: 2,
			format: 'dd/mm/yyyy',
			autoclose: true,
			todayHighlight: true,
			endDate: maxDate
		});
	}

	function mim_tm_cursor() {
		var myCursor = jQuery('.mouse-cursor');
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n, i = 0,
					o = !1;
				window.onmousemove = function (s) {
					o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
				}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
					e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
				}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
					$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
				}), e.style.visibility = "visible", t.style.visibility = "visible"
			}
		}
	};
	mim_tm_cursor()

	// Toggle Password

	$('#cancel-msg').click(function(e){
		$(this).parent().addClass('d-none');
	  });

    $('.testi-card .media-icon a').on('click', function () {
	    var currentVideo = $(this).parent().parent().parent().parent().parent().parent().find(".testimonial-video").get(0);
	    var allVideos = $(".testimonial-video");
	    $(this).parent().parent().parent().parent().parent().parent().find(".testimonial-video").toggleClass('active');
	    $(this).toggleClass('active');
	    allVideos.each(function(){
	       if (currentVideo != this)
	       this.pause();
	    });
	    if (currentVideo.paused){        
	        currentVideo.play();
	    } else {       
	        currentVideo.pause();
	    }
	});

	// Floating WhatsApp button: pulse + sound every 2 minutes
	(function initFloatingWhatsapp() {
		var btn = document.getElementById('floatingWhatsapp');
		if (!btn) return;

		function playBeep() {
			try {
				var AudioContext = window.AudioContext || window.webkitAudioContext;
				if (!AudioContext) return;
				var ctx = new AudioContext();
				var oscillator = ctx.createOscillator();
				var gainNode = ctx.createGain();
				oscillator.type = 'sine';
				oscillator.frequency.setValueAtTime(880, ctx.currentTime);
				gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
				oscillator.connect(gainNode);
				gainNode.connect(ctx.destination);
				oscillator.start();
				oscillator.stop(ctx.currentTime + 0.25);
				oscillator.onended = function () {
					ctx.close();
				};
			} catch (e) {
				// ignore audio errors (e.g. autoplay restrictions)
			}
		}

		function triggerAttention() {
			btn.classList.add('is-active');
			playBeep();
			setTimeout(function () {
				btn.classList.remove('is-active');
			}, 1500);
		}

		// first trigger after 2 minutes, then every 2 minutes
		setTimeout(function () {
			triggerAttention();
			setInterval(triggerAttention, 120000);
		}, 120000);
	})();

})(jQuery);
