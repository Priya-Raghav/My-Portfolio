const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Change button icon
  toggleButton.textContent = 
    document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Optional: simple form validation message
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! Thank you.');
  this.reset();
});
