let menuToggle = document.querySelector('.header__menu-toggle');
menuToggle.onclick = function(e) {
  if (menuToggle.checked) {
      menuToggle.setAttribute('aria-pressed', true);
      menuToggle.setAttribute('aria-expanded', true);
  } else {
      menuToggle.setAttribute('aria-pressed', false);
      menuToggle.setAttribute('aria-expanded', false);
  }
}
