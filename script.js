// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});

// Carousel logic
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('img');

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 4000);

// JavaScript
function showTab(subject) {
  document.querySelectorAll('.tab-content').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(subject).style.display = 'block';
}








