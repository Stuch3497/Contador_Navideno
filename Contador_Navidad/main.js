let christmasYear = (new Date()).getFullYear();
let christmasDate = new Date(christmasYear, 11, 24, 0, 0, 0); // Diciembre es el mes 11, 17:00 horas (5 PM)

// Función para actualizar el contador
function updateCountdown() {
  const todayDate = new Date();
  const secDiff = Math.floor((christmasDate.getTime() - todayDate.getTime()) / 1000);

  if (secDiff <= 0) {
    // Si el tiempo ha llegado a cero, mostrar "0" y ajustar la fecha objetivo al próximo año (o evento)
    displayCountdown(0, 0, 0, 0);

    // Verificar si la animación ya se aplicó
    const countdownElement = document.querySelector('.countdown');
    if (!countdownElement.classList.contains('zoom-animation')) {
      // Agregar la clase y la animación solo cuando el contador llega a cero
      countdownElement.classList.add('zoom-animation');
      // Realizar la redirección después de 5 segundos
      setTimeout(() => {
        window.location.href = '/Regalos/Regalos_del_stuch.html';
      }, 4000);
    }
  } else {
    // Si el tiempo no ha llegado a cero, actualizar el contador
    const days = Math.floor((secDiff / (60 * 60)) / 24);
    const hours = Math.floor(secDiff / (60 * 60)) % 24;
    const minutes = Math.floor(secDiff / 60) % 60;
    const seconds = Math.floor(secDiff) % 60;

    displayCountdown(days, hours, minutes, seconds);
  }
}

// Función para mostrar el contador en el documento
function displayCountdown(days, hours, minutes, seconds) {
  dayElement.innerText = days;
  hourElement.innerText = hours;
  minElement.innerText = minutes;
  secElement.innerText = seconds;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);



