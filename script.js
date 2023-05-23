// Obtener la fecha y hora actual
let fechaHoraActual = new Date();

// Formatear la fecha y hora actual
let fechaFormateada = fechaHoraActual.getDate() + ' ' + obtenerNombreMes(fechaHoraActual.getMonth()) + ' ' + fechaHoraActual.getFullYear();
let horaFormateada = fechaHoraActual.getHours() + ':' + fechaHoraActual.getMinutes();

// Concatenar el texto y la fecha formateada
let textoCompleto = fechaFormateada + ' ' + horaFormateada;

// Obtener el elemento por su id y asignarle el contenido
let elementoFechaActual = document.getElementById("time");
elementoFechaActual.innerHTML = textoCompleto;

// Función auxiliar para obtener el nombre del mes en español
function obtenerNombreMes(numeroMes) {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return meses[numeroMes];
}

