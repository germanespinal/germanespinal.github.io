function updateClock() {
    const clockText = document.getElementById('clockText');
    const now = new Date();
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  
    clockText.innerText = formattedTime;
  }
  
  updateClock(); // Llamar la función una vez para mostrar la hora actual de inmediato.
  
  // Llamar a la función de actualización de hora cada segundo utilizando setInterval.
  setInterval(updateClock, 1000);
  