//Guardar el numero de ordenes - listo
// que el programa determine y diga si las ordenes superaron el monto previsto 
// elegir si incrementar su capacidad el dia siguiente 
//  si por el contrario la cantidad de órdenes fue menor, 
//para así reducir su capacidad del siguiente día y ahorrar gastos.

// Función para determinar si el día es par o impar
function esPar(dia) {
    return dia % 2 === 0;
  }


// Registrar el número de órdenes y el día del mes
    const dia = 8; // Ingresar el día del mes
    const numeroOrdenes = 70; // Ingresar el número de órdenes
  
// Calcular la demanda esperada
    const demandaEsperada = 60; // Ingresar la demanda esperada
  
// Mostrar información al usuario
    console.log(`Día: ${dia}`);
    console.log(`Número de órdenes: ${numeroOrdenes}`);
    console.log(`Demanda esperada: ${demandaEsperada}`);
  
// Determinar si la cantidad de órdenes superó la demanda esperada
    const superoDemanda = numeroOrdenes > demandaEsperada;
    if (superoDemanda) {
      console.log("¡La cantidad de órdenes superó la demanda esperada!");
    } else {
      console.log("La cantidad de órdenes no superó la demanda esperada.");
    }
  
// Alertar si el día es impar y la demanda fue alta
    if (!esPar(dia) && superoDemanda) {
      console.log("¡Alerta! El día es impar y la demanda fue alta. Es probable que la demanda del siguiente día sea mayor.");
    }
  
// Sugerir si aumentar o disminuir la capacidad del restaurante
    if (superoDemanda) {
      console.log("Se recomienda aumentar la capacidad del restaurante para el siguiente día.");
    } else {
      console.log("Se recomienda disminuir la capacidad del restaurante para el siguiente día.");
    }
 


