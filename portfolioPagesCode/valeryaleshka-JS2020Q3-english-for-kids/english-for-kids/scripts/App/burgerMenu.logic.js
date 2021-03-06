export default function burgerMenu() {
  const hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.navToggle.addEventListener('click', (e) => { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', (e) => { hamburger.doToggle(e); });
}
