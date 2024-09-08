// Select the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Add an event listener for the button
themeToggleBtn.addEventListener('click', function() {
  // Toggle the dark-theme class on the body
  document.body.classList.toggle('dark-theme');
  
  // Change button text depending on the theme
  if (document.body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = 'Switch to Light Theme';
  } else {
    themeToggleBtn.textContent = 'Switch to Dark Theme';
  }
});
