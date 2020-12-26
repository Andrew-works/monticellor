'use strict';



function initMap() {
	let map, coords, styles, marker, info, content;

	coords = {
		lat: 40.6819486,
		lng: -73.9043534
	}

	styles = [
		{
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f5f5f5"
				}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#616161"
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#f5f5f5"
				}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#bdbdbd"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#eeeeee"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#757575"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e5e5e5"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#757575"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#dadada"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#616161"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e5e5e5"
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#eeeeee"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#c9c9c9"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		}
	]


	map = new google.maps.Map(document.getElementById("map"), {
		center: coords,
		zoom: 15,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
		},
		streetViewControl: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ["roadmap", "satellite"],
		},

	});

	marker = new google.maps.Marker({
		position: coords,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: 'images/marker.png'
	});

	content = `<h1 class="map__title">get in touch</h1>
			   `;

	info = new google.maps.InfoWindow({
		content: content,
	});

	marker.addListener("click", () => {
		info.open(map, marker);
	});
}


(function ($) {
	$(document).ready(function () {
		// Fancybox
		$('.photo').fancybox({
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: 'zoom-in-out',
			animationDuration: 800,
			transitionEffect: 'tube',
			transitionDuration: 1000,
			// fullScreen: {
			// 	autoStart: true
			// },
			loop: true
		});

		$('.modal').fancybox({
			afterClose: () => {
				alert('Window is closed, da Vlad?');
			}
		});

		// Slick Slider
		$('.slider').slick({
			dots: true,
			arrows: true,
			prevArrow: '<div class="slider-prev">&larr;</div>',
			nextArrow: '<div class="slider-next">&rarr;</div>',
			appendArrows: $('.slider-arrows'),
			appendDots: $('.slider-dots'),
			slidesToShow: 3,
			slidesToScroll: 2,
			// infinite: false,
			speed: 1500,
			// centerMode: true,
			// initialSlide: 4,
			// autoplay: true,
			// autoplaySpeed: 500,
			// pauseOnHover: false,
			// fade: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						dots: false,
						speed: 500,
						swipe: true
					}
				}
			]
		});
		// Menu
		let sections = {
			slider: $('#slider').offset().top,
			gallery: $('#products').offset().top,
			map: $('#map').offset().top
		};

		$(window).scroll(() => {
			let scrTop = $(document).scrollTop() + $(window).height() / 3,
				position = '';

			if (scrTop < sections.gallery) {
				position = 'slider';
			} else if (scrTop >= sections.gallery && scrTop < sections.map) {
				position = 'gallery';
			} else {
				position = 'map';
			}
			$('.menu__link').removeClass('menu__active');
			$('.menu').find(`[href='#${position}]'`).addClass
				('menu__active');
		});

	});
})(jQuery);
