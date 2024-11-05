document.addEventListener('DOMContentLoaded', function () {
  const videoIframe = document.getElementById('video-iframe');
  const videoSection = document.getElementById('about-app');

  // Создаем наблюдатель для отслеживания появления секции в области видимости
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Устанавливаем атрибут src, когда секция видна
          videoIframe.src = videoIframe.getAttribute('data-src');
          observer.unobserve(videoSection); // Останавливаем наблюдение после первого срабатывания
        }
      });
    },
    { threshold: 0.5 }
  ); // 50% секции должно быть видно для срабатывания

  observer.observe(videoSection);
});
