// Get all video elements
const videos = document.querySelectorAll("video");

// Function to play videos one after another
function playNextVideo(currentVideoIndex) {
  // Calculate next video index
  const nextVideoIndex = (currentVideoIndex + 1) % videos.length;

  // Play the next video
  videos[nextVideoIndex].play();

  // Pause the current video
  videos[currentVideoIndex].pause();

  // When the next video ends, play the next one
  videos[nextVideoIndex].addEventListener("ended", () => {
    playNextVideo(nextVideoIndex);
  });
}

// Play the first video
videos[0].play();

// When the first video ends, play the next one
videos[0].addEventListener("ended", () => {
  playNextVideo(0);
});

//--------------Testimonials carasole slider----------------
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial() {
  testimonials.forEach((testimonial) => testimonial.classList.remove("active"));
  testimonials[index].classList.add("active");
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial();
}

function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial();
}

function autoSlide() {
  nextTestimonial();
}

// Start auto sliding every 3 seconds
let autoSlideInterval = setInterval(autoSlide, 3000);

document.querySelector(".next").addEventListener("click", function () {
  clearInterval(autoSlideInterval); // Stop auto sliding when manually navigating
  nextTestimonial();
  autoSlideInterval = setInterval(autoSlide, 3000); // Restart auto sliding
});
document.querySelector(".prev").addEventListener("click", function () {
  clearInterval(autoSlideInterval); // Stop auto sliding when manually navigating
  prevTestimonial();
  autoSlideInterval = setInterval(autoSlide, 3000); // Restart auto sliding
});

showTestimonial(); // Show initial testimonial
