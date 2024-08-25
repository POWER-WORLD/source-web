// Example: Add a click event to buttons (if required)
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} button clicked!`);
    });
});
// When the user scrolls the page, execute the stickyNavbar function
window.onscroll = function() {stickyNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky)

