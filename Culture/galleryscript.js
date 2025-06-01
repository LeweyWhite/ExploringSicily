const lightbox = document.getElementById('lightbox');
const imgs = document.querySelectorAll('.galleria img');
const lightboxImg = lightbox.querySelector('img');

imgs.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});