// Set the date we're counting down to (60 days from now)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 60); // 60 days from now

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the results
  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.countdown-container').innerHTML = "<h2>Launching Now!</h2><p>We're live! Visit us at yesyou.cloud</p>";
  }
}, 1000);

// Form submission handling
document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  alert(`Thank you! We'll notify you when yesyou.cloud launches.\nEmail: ${email}`);
  this.reset();
});

// Add smooth animations when elements come into view
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll('.main-title, .subtitle, .countdown-container, .notification-section').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Add floating animation to circles
const circles = document.querySelectorAll('.circle');
circles.forEach((circle, index) => {
  circle.style.animationDelay = `${index * 2}s`;
});

// Add parallax effect to background elements
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  const shapes = document.querySelectorAll('.circle, .shape');
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.02;
    const x = mouseX * speed * 50;
    const y = mouseY * speed * 50;
    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Add scroll animations
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  
  document.querySelectorAll('.circle, .shape').forEach((el) => {
    el.style.transform = `translateY(${rate}px)`;
  });
});