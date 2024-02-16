document.addEventListener('click', function (event) {
    if (event.target.classList.contains('increment-btn')) {
      const countElement = event.target.closest('.counter-card').querySelector('.counter');
  
      var count = parseInt(countElement.textContent) || 0;
      
  
      countElement.textContent = count + 1;
    }
  });
  