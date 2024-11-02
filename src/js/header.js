document.addEventListener('DOMContentLoaded', function () {
  const menuOpenBD = document.querySelector('.header-menu-open-btn');
  const closeBtn = document.querySelector('.close-btn');

  if (menuOpenBD) {
    menuOpenBD.addEventListener('click', () => {
      const backdrop = document.querySelector('.backdrop');

      if (backdrop) {
        backdrop.classList.add('show');
      }
    })
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const backdrop = document.querySelector('.backdrop');

      if (backdrop) {
        backdrop.classList.remove('show');
      }
    });
  }

});