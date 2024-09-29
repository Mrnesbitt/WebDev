let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Show the first image initially
images[currentIndex].classList.add('active');

// Function to change the slide
function changeSlide(direction) {
    // Remove active class from current image
    images[currentIndex].classList.remove('active');

    // Update the current index
    currentIndex = (currentIndex + 1) % totalImages;

    // Add active class to the new current image
    images[currentIndex].classList.add('active');
}

// Set interval for autoplay
setInterval(() => {
    changeSlide(1); // Change to the next slide
}, 3000); // Change every 3 seconds

// Add event listeners for buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
