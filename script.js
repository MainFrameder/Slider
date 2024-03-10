const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.sr2');
const sliderLine = document.querySelector('.slider_line');
const sliderPrev = document.querySelector('.slider_button_prev');
const sliderNext = document.querySelector('.slider_button_next');

let	sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderPrev.addEventListener('click', prevSlider);
sliderNext.addEventListener('click', nextSlider);

function prevSlider(){
	sliderCount--;
	if (sliderCount<0){
		sliderCount=sliderImages.length-1;
	}
	rollSlider();
}

function nextSlider(){
	sliderCount++;
	if (sliderCount>=sliderImages.length){
		sliderCount=0;
	}
	rollSlider();
}

function rollSlider(){
	sliderLine.style.transform=`translateX(${-sliderCount*sliderWidth}px)`;
}