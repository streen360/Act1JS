// Variables
let ordenesHoy = parseInt(prompt("Ingrese el número de órdenes del día: "));
let montoPrevisto = parseInt(prompt("Ingrese el monto previsto de órdenes: "));
let diaMes = parseInt(prompt("Ingrese el día del mes: "));
let esPar = esDiaPar(diaMes);
let demandaAltaImpar = determinarDemandaAlta(ordenesHoy, montoPrevisto);

// Mostrar mensajes
if (ordenesHoy > montoPrevisto) {
  console.log("¡Las órdenes superaron el monto previsto!");
} else {
  console.log("La cantidad de órdenes fue menor al monto previsto.");
}

if (demandaAltaImpar) {
  console.log("La demanda fue alta en un día impar.");
}

// Mostrar alerta
if (esPar === false && demandaAltaImpar === true) {
  alert("¡Alerta! La demanda fue alta en un día impar. Es probable que la demanda sea mayor mañana.");
}

// Funciones
function esDiaPar(dia) {
  return dia % 2 === 0;
}

function determinarDemandaAlta(ordenes, monto) {
  return ordenes > monto;
}
