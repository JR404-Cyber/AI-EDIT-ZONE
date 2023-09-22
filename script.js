const menuIcon = document.getElementById("menu-icon");
const menuBar = document.getElementById("navbar");

// Toggle menu bar visibility when the menu icon is clicked
menuIcon.addEventListener("click", function() {
  if (menuBar.style.display === "block") {
    menuBar.style.display = "none";
  } else {
    menuBar.style.display = "block";
  }
});

 
    const textLines = [
      "Photographer",
      "Photo Editors",
      "",
      "Video Editor "
    ];

    const textContainer = document.getElementById("text-container");
    let currentIndex = 0;
    let currentLine = "";
    let isTyping = true;

    function typeText() {
      currentLine = textLines[currentIndex];
      textContainer.textContent = currentLine.substring(0, textContainer.textContent.length + 1);

      if (textContainer.textContent === currentLine) {
        isTyping = false;
        setTimeout(eraseText, 1500);
      } else {
        setTimeout(typeText, 80);
      }
    }

    function eraseText() {
      textContainer.textContent = currentLine.substring(0, textContainer.textContent.length - 1);

      if (textContainer.textContent === "") {
        isTyping = true;
        currentIndex = (currentIndex + 1) % textLines.length;
        setTimeout(typeText, 500);
      } else {
        setTimeout(eraseText, 50);
      }
    }

    // Start the typing animation
    setTimeout(typeText, 500);
  

ScrollReveal({
  reset: true,
  distance: '80px',
  decoration: 2000,
  delay: 200
});

ScrollReveal().reveal('', { origin: 'top' });

ScrollReveal().reveal(', .home-img, .services-container, .portfolio-box, .,.about-content p, .navbar a', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img, ', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });





// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
