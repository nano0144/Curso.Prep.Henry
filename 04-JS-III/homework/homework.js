// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length) ;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 
  for (var i = 0 ; i < array.length ; i++) {
    array[i] = array[i] + 1
 }

  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = [];
  
  for (var i = 0 ; i < palabras.length - 1 ; i++) {
    frase += (palabras[i] + " ");
    
  }
  
  frase +=  (palabras[palabras.length - 1]);

  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) {
    // la funcion includes la encontre buscando en Internet
    return true;
  }
  return false;

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  
  var suma = 0

  for (var i = 0 ; i < numeros.length ; i++) {

    suma = (suma + numeros[i]);
   
  }
  return suma;
     
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  
  for (var i = 0 ; i < resultadosTest.length ; i++) {

  promedio = (promedio + resultadosTest[i]);
    
  }

  promedio = promedio / resultadosTest.length

  return promedio;
  
}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var elMayor = 0;
  for (var i = 0 ; i < numeros.length ; i++) {
    if (numeros[i] > elMayor) {
      elMayor = numeros[i];
    }
    
  }
  return elMayor;
  
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var mul = 1; // funciona, si no pongo nungun argumento me decuelve 0
  
    for (var i = 0 ; i < arguments.length ; i++) {

            if (arguments.length === 1) { // funciona, deveulve el argumento cuando solo pongo un argumento
        return arguments[0];
        
      }

      if (arguments.length === 2) {
        mul = (arguments[0]) * arguments[1]; // me devuelve el producto de los argumentos
        return mul;
      }

      if (arguments.length > 2) {
        mul = mul * (arguments[i]); // me devuelve el producto de los argumentos
      }
  
    }
  //console.log(arguments.length);
  //console.log(arguments);
  //console.log(mul);
  if (mul === 1) {
    return 0;
  }
  return mul;

}

function func1() {
  var mult = 0 ;
  console.log(arguments[0]);
  console.log(arguments[1]);
  //console.log(arguments[0]*arguments[1]);
  mult = (arguments[0]*arguments[1]);

  return mult;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayoresDe18 = [];
  for (var i = 0 ; i < arreglo.length ; i++) {
    if (arreglo[i] > 18) {
      mayoresDe18.push(arreglo[i]);
    }
  }
  return mayoresDe18.length;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí

  if (numeroDeDia === 1 || numeroDeDia === 7 ) {
  // cuando defino explicitamente la condición, me toma 1 o 7 y no el intervalo [1,2,3,4,5,6,7].
    return "Es fin de semana";

  }

  if (numeroDeDia === 2 || 6 ) {
  // cuando pongo 2 || 6 me toma de 2 hasta 6, como si fuese un intervalo [2,3,4,5,6].
    return "Es dia Laboral";
  } 

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = String(n);

  if (n % 1 === 0 ) {
    if (num.charAt(0) == 9 ) {
    return true;
    }
    return false;

  } else {
    return false;
  }
 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 0 ; i < arreglo.length ; i++) {
    for (var j = 0 ; i < arreglo.length; j++) {

      if (i != j) {
        if (arreglo[i] == arreglo[j]) {
          return true;
        }
        return false;
      }
    }

  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];
  let mess = ["Marzo", "Noviembre", "Enero"];
 
  for (var i = 0 ; i < mess.length ; i++ ) {
    if (array.includes(mess[i]) ) {
    
      meses.push(mess[i]);
    }
    if (!(array.includes(mess[i])) ) {
      return "No se encontraron los meses pedidos";
    }
        
  }
  return meses;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let mayoresA100 = array.filter(element => element > 100);
  
  return mayoresA100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let arr1 = [];
  // + 2 hasta 10 veces
  var i = 0 ;
  while (i < 10 ) {
    numero += 2 ;
    i++;
    arr1.push(numero);

    if (i === (numero + 2)) {
      return "Se interrumpió la ejecución";
    break;
    
    } 
        
  }
  return arr1  
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arr1 = [];
  // + 2 hasta 10 veces
  var i = 0 ;
  //var j = 0 ;
  while (i < 10 ) {
    i++;
    
    if (i === 5) {
      continue;
    }

    numero += 2 ;
 
    arr1.push(numero);

  }

  return arr1;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
