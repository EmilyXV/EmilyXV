// Obtener referencias a los elementos
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

// Abrir el sidebar al hacer clic en el botón de menú
menuBtn.addEventListener('click', function() {
  sidebar.classList.add('active');
});

// Cerrar el sidebar al hacer clic en la tacha (botón de cierre)
closeBtn.addEventListener('click', function() {
  sidebar.classList.remove('active');
});
