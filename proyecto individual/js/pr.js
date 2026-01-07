// Efecto hover para imágenes y links en pr.html
document.addEventListener('DOMContentLoaded', function() {
  // Cambiar color de imagen al hacer hover
  document.querySelectorAll('.imagen').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
      img.style.filter = 'brightness(1.2) saturate(1.5) drop-shadow(0 0 10px #64c8ff)';
    });
    img.addEventListener('mouseleave', function() {
      img.style.filter = '';
    });
  });

  // Cambiar color de link al hacer hover
  document.querySelectorAll('.index-grid .item').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      link.style.color = '#4fc3f7';
      link.style.textShadow = '0 2px 8px #64c8ff';
    });
    link.addEventListener('mouseleave', function() {
      link.style.color = '';
      link.style.textShadow = '';
    });
  });
});
