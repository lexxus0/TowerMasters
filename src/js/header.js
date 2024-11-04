document.addEventListener('DOMContentLoaded', function () {
  const menuOpenBD = document.querySelector('.header-menu-open-btn');
  const closeBtn = document.querySelector('.close-btn');

  // show backdrop
  if (menuOpenBD) {
    menuOpenBD.addEventListener('click', () => {
      const backdrop = document.querySelector('.backdrop');

      if (backdrop) {
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  }
  //==

  // hide backdrop
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const backdrop = document.querySelector('.backdrop');

      if (backdrop) {
        backdrop.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    });
  }
  //==

  // finding anchors
  const menuItems = document.querySelectorAll(
    '.header-menu-list .item-link-bd'
  );
  menuItems.forEach(item => {
    item.addEventListener('click', event => {
      const backdrop = document.querySelector('.backdrop');

      // hide backdrop when clicked on menu item
      if (backdrop) {
        backdrop.classList.remove('show');
        document.body.style.overflow = 'auto';
      }

      const targetId = item.getAttribute('href');

      if (targetId && targetId.startsWith('#')) {
        event.preventDefault();

        // find current section by ID
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // calculate percent for scrolling
          const offset = 100;
          // position to scroll to
          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY - offset;

          // Smoothly scroll to the target section
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      }
    });
  });
});
