const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 78) {
    navEl.classList.add('navbar-scrolled');
  } else if (window.screenY < 78) {
    navEl.classList.remove('navbar-scrolled');
  }
});
