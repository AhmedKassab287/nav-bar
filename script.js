document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const underline = document.querySelector('.underline');
  const lightning = document.querySelector('.lightning');
  let activeItem = navItems[0];
  
  setUnderline(activeItem);
  
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          const oldLeft = underline.offsetLeft;
          const oldWidth = underline.offsetWidth;
          const newLeft = this.offsetLeft;
          const newWidth = this.offsetWidth;
          
          // Show lightning image
          lightning.style.display = 'block';
          
          if (newLeft > oldLeft) {
              underline.style.width = (newLeft - oldLeft + newWidth) + 'px';
              setTimeout(() => {
                  underline.style.left = newLeft + 'px';
                  underline.style.width = newWidth + 'px';
              }, 300);
          } else {
              underline.style.left = newLeft + 'px';
              underline.style.width = (oldLeft - newLeft + oldWidth) + 'px';
              setTimeout(() => {
                  underline.style.width = newWidth + 'px';
              }, 300);
          }
          
          // Hide lightning after animation
          setTimeout(() => {
              lightning.style.display = 'none';
          }, 1000); // Adjust timing as needed
          
          activeItem = this;
      });
  });
  
  function setUnderline(element) {
      underline.style.left = element.offsetLeft + 'px';
      underline.style.width = element.offsetWidth + 'px';
  }
});