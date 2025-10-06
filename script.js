document.addEventListener('DOMContentLoaded', function(){
  // Set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', function(){
    if(nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'white';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.padding = '12px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 30px rgba(2,6,23,0.08)';
    }
  });

  // Airbnb links
  var airbnbUrl = 'https://www.airbnb.com/l/jYwwrCNw'; 
  var bookBtns = document.querySelectorAll('#bookBtn, #primaryBook, #bookNow, .card-meta a');
  bookBtns.forEach(function(b){ b.href = airbnbUrl; });

  // Contact form UX
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      var formMsg = document.getElementById('formMsg');
      formMsg.style.display = 'block';
      formMsg.textContent = 'Sending...';
      setTimeout(function(){
        formMsg.textContent = 'If you do not get a success message, please email ankush.bahuguna1994@gmail.com';
      }, 1500);
    });
  }
});
