// TODO Хлебные крошки в виде слайдера
function initBreadcrumbsSlider() {
	let bradCrumbsSlider = new Swiper('.breadcrumbs-slider__area', {
		autoplay: false,
		slidesPerView: 'auto',
		//width: 'auto',
		grabCursor: true,
		speed: 800,
		navigation: false,
		pagination: false,
		initialSlide: countSlides(),
		watchOverflow: true,
	});
	function countSlides() {
		let slides, countSlides;
		slides = document.querySelectorAll('.breadcrumbs-slider__item');
		countSlides = slides.length
		return countSlides;
	}
}
// ? END Хлебные крошки в виде слайдера