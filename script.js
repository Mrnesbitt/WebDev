let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Show the first image initially
images[currentIndex].style.display = 'block';

// Function to change the slide
function changeSlide() {
    // Hide the current image
    images[currentIndex].style.display = 'none';

    // Update the current index
    currentIndex = (currentIndex + 1) % totalImages;

    // Show the new current image
    images[currentIndex].style.display = 'block';
}

// Set interval for autoplay
let interval = setInterval(changeSlide, 3000); // Change every 3 seconds

// Pause autoplay on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(interval));
carousel.addEventListener('mouseleave', () => {
    interval = setInterval(changeSlide, 3000); // Restart autoplay
});

// Add event listeners for buttons
document.querySelector('.prev').addEventListener('click', () => {
    // Hide the current image
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Move to previous
    images[currentIndex].style.display = 'block'; // Show new image
});

document.querySelector('.next').addEventListener('click', changeSlide);
