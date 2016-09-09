var wheight,smoke;
	smoke = {
		sizes: function(){
			wheight = $(window).height();
			$('.wheight').css({'height': wheight});
		},
		accordion: function(){
			$('.question-answer h6').click(function(){
				
				if($(this).parent().find('.answer').hasClass('active')){
					$(this).parent().find('.answer').removeClass('active').slideUp(500);
					$(this).find('.plus').removeClass('minus');
				}else{
					$('.question-answer h6').parent().find('.answer').removeClass('active').slideUp(500);
					$('.question-answer h6').find('.plus').removeClass('minus');
					$(this).parent().find('.answer').addClass('active').slideDown(500);
					$(this).find('.plus').addClass('minus');
				}
			});
		},feeds: function(){
			userFeed = new Instafeed({
			 get: 'user',
			 limit:30,
			 userId: '2285661877',
			 accessToken: '2285661877.0fe4f3d.bf0b644e3e494bd5b0bf4ccc8ebac9d2',
			 resolution: 'low_resolution',
			 after: function () {
			  var owl = $("#instafeed");
			  owl.owlCarousel({ 
			  loop:true,
			  responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1000:{
						items: 6
					}
				}

			  });
			  // Custom Navigation Events
			 $(".next").click(function(){
				owl.trigger('next.owl.carousel');
			  })
			  $(".prev").click(function(){
				owl.trigger('prev.owl.carousel');
			  })
			 },
			 template: '<div class="item"><a href="{{link}}" target="_blank"><span><img src="{{image}}" alt="{{caption}}"/></span></a></div>', 
			});
			userFeed.run();
		},
		
	}
	$(document).ready(function(){
		smoke.sizes();
		smoke.accordion();
		if($('.gallery').length){
			$(".gallery a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:400, autoplay_slideshow: false});
		}
		if($("#instafeed").length){
			smoke.feeds();
		}
		if($(".home-slider").length){
			$('.home-slider').bxSlider({
				auto: true
			})
		}
	});
	$(window).on("load resize",function(e){
		smoke.sizes();
	});

