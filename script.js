document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('#btn');
    const btn2 = document.querySelector('#btn2');
    const icon = document.querySelector('.icon');
  
    btn.addEventListener('click', toggleIconVisibility);
    btn2.addEventListener('click', hideIcon);
  
    function toggleIconVisibility() {
      icon.style.display = icon.style.display === 'none' ? 'flex' : 'none';
    }
  
    function hideIcon() {
      icon.style.display = 'none';
    }
  });
  