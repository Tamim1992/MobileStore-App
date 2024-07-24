// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Live Clock
  function startClock() {
    var clockElement = document.getElementById('clock');
    if (!clockElement) {
      clockElement = document.createElement('div');
      clockElement.id = 'clock';
      clockElement.style.position = 'fixed';
      clockElement.style.bottom = '20px';
      clockElement.style.right = '20px';
      clockElement.style.backgroundColor = '#4d4599';
      clockElement.style.padding = '10px';
      clockElement.style.borderRadius = '5px';
      clockElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      document.body.appendChild(clockElement);
    }
  
    function updateClock() {
      const now = new Date();
      clockElement.innerText = now.toLocaleTimeString();
    }
  
    setInterval(updateClock, 1000);
    updateClock(); // initial call
  }
  
  startClock();
  
  // Back-to-Top Button
  var backToTopButton = document.getElementById("back-to-top");
  
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  
  backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
  