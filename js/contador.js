// Función para actualizar el contador
function actualizarContador() {
  const fechaEvento = new Date("December 21, 2024 2:00:00").getTime();
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  // Cálculos de tiempo
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostrar resultados en el HTML
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

  // Si el contador llega a 0
  if (diferencia < 0) {
      clearInterval(intervalo);
      document.querySelector(".contador-seccion h2").textContent = "¡Es Hoy, es Hoy!";
      document.querySelector(".contador").style.display = "none";
  }
}

// Actualizar cada segundo
const intervalo = setInterval(actualizarContador, 1000);
