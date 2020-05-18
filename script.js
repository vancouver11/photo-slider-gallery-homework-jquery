var arrayPhoto = [
'https://www.nastol.com.ua/pic/201303/1920x1080/nastol.com.ua-42380.jpg',
'https://c.wallhere.com/photos/e7/46/landscape_nature-159249.jpg!d',
'https://avatars.mds.yandex.net/get-pdb/1641895/357b1e3d-1c50-4d47-a4b3-3ac610464c8e/s1200?webp=false',
'https://c.wallhere.com/photos/81/7f/red_panda_tree_leaves-714037.jpg!d',
'https://c.wallhere.com/photos/56/a7/tanagra_bird_branch_flower-692184.jpg!d'
];
var isMoving = false;
$(document).ready(function() {
	
	createPhoto();
	defineWrapPhoto();
	var leghtGallery = $('#gallery .wrapPhoto').width();
	var leghtPhoto = $('#gallery .wrapPhoto .photo').eq(0).width();
	var lengthMoving = leghtGallery - leghtPhoto;
	movePhoto(lengthMoving); 
	
});


/*Добавление фото в галерею*/
function createPhoto(){

	var galleryWindow = $('#gallery .wrapPhoto');
	arrayPhoto.forEach((element) =>{
		var photo = $('<li class="photo"></>');
		photo.css({'background-image':`url(${element})`});
		galleryWindow.append(photo);
	})

}
/*Задание размера обертки галереи*/
function defineWrapPhoto(){
	var photoWidth = $('#gallery .wrapPhoto .photo').eq(0).width();
	$('#gallery .wrapPhoto').css('width', `${arrayPhoto.length*photoWidth}`);
}




function movePhoto(lengthMoving){
	
		let blockArrows  = $('.directionMove');
			var offsetPhoto = 0;
		/*	Нажатие левой стрелки*/
			blockArrows.find('.leftMove').on('click', function() {
				if(isMoving===false){
					
					console.log(offsetPhoto);
				if(offsetPhoto === -lengthMoving ) return null;
				isMoving = true;
				offsetPhoto += -400;
				opacityAnimate();
				}
				
			});	
		/*	Нажатие правой стрелки*/
			blockArrows.find('.rightMove').on('click', function() {
					if(isMoving===false){

				if(offsetPhoto === 0) return null;
				isMoving = true;
				offsetPhoto += 400;
				opacityAnimate();
				}
			});	

	
	

/*	анимация c уменьшением прозрачности*/
	function opacityAnimate(){
		 $('.wrapPhoto').animate({
			opacity:'0.4'
			},
			500, function(){doAnimate()});	
	}

/*	анимация при перелистовании*/
	function doAnimate() {
			$('#gallery').addClass('trans');
			$('#gallery').css('width', '0px');
			$('.wrapPhoto').css('transform', `translateX(${offsetPhoto}px)`);
			$('#gallery').animate({width: '400px'}, 3000, function(){
				$('#gallery').removeClass('trans');
				$('.wrapPhoto').animate({
						opacity:'1'
					},500, function(){isMoving = false})

			})
	}

}

///////////////