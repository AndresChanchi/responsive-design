// Obtener la fecha y hora actual
let fechaHoraActual = new Date();

// Formatear la fecha y hora actual
let fechaFormateada = fechaHoraActual.getDate() + ' ' + obtenerNombreMes(fechaHoraActual.getMonth()) + ' ' + fechaHoraActual.getFullYear();
let horaFormateada = fechaHoraActual.getHours() + ':' + fechaHoraActual.getMinutes();

// Concatenar el texto y la fecha formateada
let textoCompleto = fechaFormateada + ' ' + horaFormateada;

// Obtener el elemento por su clase y asignarle el contenido
let elementosFechaActual = document.getElementsByClassName("time");

// Recorrer los elementos y asignarles el contenido
for (let i = 0; i < elementosFechaActual.length; i++) {
  elementosFechaActual[i].innerHTML = textoCompleto;
}

// Función auxiliar para obtener el nombre del mes en español
function obtenerNombreMes(numeroMes) {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return meses[numeroMes];
}

