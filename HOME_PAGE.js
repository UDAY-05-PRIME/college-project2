


const images = ["\\images\\image-1.png", "\\images\\image-2.png", "\\images\\image-3.jpg", "\\images\\image-4.jpg"];
let slideIndex = 0;


const slideImg = document.getElementById("slideImg");
const buttons = document.querySelectorAll('.btn');


function showSlide(index) {
    slideIndex = index;
    slideImg.src = images[slideIndex];
    updateActiveButton(slideIndex);
}


function updateActiveButton(index) {
    buttons.forEach((btn, i) => {
        btn.classList.remove('active');
        if (i === index) {
            btn.classList.add('active');
        }
    });
}


buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showSlide(index);
    });
});


setInterval(() => {
    slideIndex = (slideIndex + 1) % images.length;
    showSlide(slideIndex);
}, 4000);
