$(document).ready(function() {
  var responsive_btn = document.querySelector('.mp-menu-responsive-btn');
  var header = document.querySelector('.mp-principal-header');
  var list_logo_item = document.querySelector('.mp-nav-item-logo');
  var list_item = document.querySelector('.mp-nav-item');
  var header_nav = document.querySelector('.mp-principal-header-nav');
  
  // if (window.location.pathname !== '/index.html') {
  //   header.classList.add('mp-principal-header-scrolled');
  //   list_logo_item.classList.add('mp-nav-item-logo-able');
  // }

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

  if(responsive_btn){
    responsive_btn.addEventListener('click', () => {
      header_nav.classList.toggle('mp-principal-header-nav-open');
    });
  }

  $(function() {
    $('.link-item').click(function() {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top, behavior: 'smooth' }, 4000);
        return false;
      }
    });
  });  

});
