let currentIndex = 0;

const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const images = slider.querySelectorAll('img');
const imageCount =  images.length;

prevButton.addEventListener("click",showPrevImage)
nextButton.addEventListener("click",showNextImage)

function showPrevImage(){
    currentIndex = (currentIndex-1+imageCount) % imageCount;
    updateSlider();
}
function showNextImage(){
    currentIndex = (currentIndex + 1) % imageCount
    updateSlider();
}

function updateSlider() {
    const slideWidth = 300;
    const offset = -currentIndex * slideWidth;
    slider.style.transform=`translateX(${offset}px)`
}

updateSlider()