const link = document.querySelector('.google-play-link');
const svgObject = document.querySelector('.svg-btn');

link.addEventListener('mouseenter', () => {
  svgObject.setAttribute('data', './svg/gp-btn-hover.svg');
});

link.addEventListener('mouseleave', () => {
  svgObject.setAttribute('data', './svg/gp-btn.svg');
});
