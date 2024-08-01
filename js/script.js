const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});
// Smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href');
      const section = document.querySelector(sectionId);
  
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust offset as needed
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Hide loader and show content after delay (simulate loading)
    setTimeout(function() {
      document.querySelector('.loader-container').style.opacity = '0';
      document.querySelector('.content').classList.add('show');
    }, 500); // Adjust delay as needed (milliseconds)
  });

  const button = document.getElementById('myButton');

button.addEventListener('mouseenter', function() {
  this.style.animation = 'pulse 1s forwards';
});

button.addEventListener('animationend', function() {
  this.style.animation = '';
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const navbarLinks = document.querySelectorAll("#navbar a");
  
    // Function to check if element is in view
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to toggle active class on navbar links
    function toggleActiveClass() {
      sections.forEach((section, index) => {
        const link = navbarLinks[index];
        if (isInViewport(section)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    // Event listener for scroll event
    window.addEventListener("scroll", toggleActiveClass);
  
    // Initial check on page load
    toggleActiveClass();
  });
  
  