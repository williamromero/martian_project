$(document).ready(function() {
  var header = document.querySelector('.mp-principal-header');
  var list_logo_item = document.querySelector('.mp-nav-item-logo');
  var list_item = document.querySelector('.mp-nav-item');
  
  if (window) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= 300) {
        header.classList.add('mp-principal-header-scrolled');
        list_logo_item.classList.add('mp-nav-item-logo-able');
      }
    });

    window.addEventListener('scroll', function () {
      if (window.pageYOffset == 0) {
        header.classList.remove('mp-principal-header-scrolled');
        list_logo_item.classList.remove('mp-nav-item-logo-able');
        // list_item.classList.add('')
      }
    });

  }

});
