(function($){

	$.fn.dissolveGallery = function(){

		console.log(this);
		
		return this.each(function(){

				console.log(this);


			var $this = $(this),
				$thumbs = $this.find('.thumbs img'),
				$images = $this.find('.images img'),
				$nextBtn = $this.find('.next-btn'),
				$prevBtn = $this.find('.prev-btn'),
				currentIndex = 0,
				duration = 5000,
				timer,
				galleryLen = $thumbs.length - 1;

			function changeImg(newIndex){
				stopTimer();
				$thumbs.eq(currentIndex).removeClass('selected');
				$images.eq(currentIndex).velocity('fadeOut',{duration: 400});
				currentIndex = newIndex;
				$thumbs.eq(currentIndex).addClass('selected');
				$images.eq(currentIndex).velocity('fadeIn',{duration: 400});
				startTimer();

			}

			function nextImg(){
				var newIndex =(currentIndex<galleryLen)? currentIndex+1: 0;
				changeImg(newIndex);
			}

			function startTimer(){timer = setInterval(nextImg,duration);};
			function stopTimer(){clearInterval(timer)};
			

			//Intialise
			$images.hide().eq(currentIndex).show();
			$thumbs.eq(currentIndex).addClass('selected');
			startTimer();

			//user codes
			$nextBtn.click(nextImg);

			$prevBtn.click(function(){
				
				var newIndex = (currentIndex>0)? currentIndex-1: galleryLen;
				changeImg(newIndex);

			});

			$thumbs.click(function(e){
				changeImg($thumbs.index(this));		
			});
		})
	}

})(jQuery)





