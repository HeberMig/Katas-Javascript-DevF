/*Ejercicio 3 : Estructuras de control: WHILE.
Deberas realizar los ejercicios anexados abajo:*/

// 1. Crea un programa que pregunte al usuario un número.
//  Mostrar los números que son múltiplos de 5 desde 1 hasta 
//  el número introducido por el usuario.
let inicio = 1;
let numero = prompt("Introduce un numero");
while (inicio <= numero ) {
    if (inicio % 5 === 0 ) {
        console.log(`${inicio} es múltiplo de 5.`);
    }
        else {
    console.log(`${inicio} no es múltiplo de 5.`);
    }
    inicio++;
  }

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50.
//  Posteriormente mostrar en consola los números del 1 hasta el 50,
// pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let inicial = 1;
let numero1 = prompt("Introduce el primer numero que este entre 1 y 50");
let numero2 = prompt("Introduce el segundo numero que este entre 1 y 50");
while (inicial <=  50) {
        if(inicial == numero1 || inicial == numero2){
            console.log(inicial+" ¡Lotería!");
        }
        else{
            console.log(inicial+"Lo sentimos, siga participando");
        }
    inicial++;
  }

// 3. Crea un programa que solicite al usuario números, si lo que este introduce 
// es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe 
// ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
let arreglo = [];
let numeroUsuario;

do {
    numeroUsuario = prompt("Introduce un numero, si ingresa 0 se termina");

    if (numeroUsuario !== "0") {
        let numero = numeroUsuario;

        if (numero) {
            arreglo.push(numero);
        } else {
            alert("Error, introduce un numero válido por favor");
        }
    }

} while (numeroUsuario !== "0");
alert("La lista de numeros que ingresaste es: " +arreglo);
alert("Se termina de pedir numeros");




// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado.
// Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, 
//mostrar en pantalla la concatenación de todas las palabras capturadas.
let concantenacion = "";
while(true){
    let entradaUsuario = prompt("Ingresa una letra o palabra");
    if(entradaUsuario === null || entradaUsuario === ''){
        break;
    }
    if(!isNaN(entradaUsuario)){
        alert("Por favor, ingresa solo texto o letras. Los números no son permitidos.");
    } else {
        concantenacion += entradaUsuario + ' '; 
    }
} 
alert("Solo se acepta texo o letra: " + concantenacion.trim()); //uso trim para separar



// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
// El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
// Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo 
// mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let diaSemana;

while (true) {
    let entradaDiaSemana = prompt("Ingresa un día de la semana, lunes..domingo");

    if (entradaDiaSemana === null || entradaDiaSemana === "") {
        alert("Debes ingresar un día, no puede quedar vacío");
        continue;
    }

    diaSemana = entradaDiaSemana.toLowerCase();  // Convertir la entrada a minúsculas

    if (diaSemana === "lunes") {
        alert("Excelente inicio de semana");
    } else if (diaSemana === "martes") {
        alert("Excelente Martes ya casi miércoles");
    } else if (diaSemana === "miercoles") {
        alert("Ya mitad de semana");
    } else if (diaSemana === "jueves") {
        alert("Ya jueves, ya casi viernes");
    } else if (diaSemana === "viernes") {
        alert("Viernecito Alegre");
    } else if (diaSemana === "sabado") {
        alert("Ya Sabadito alegre");
    } else if (diaSemana === "domingo") {
        alert("Ya es Domingo, Ve a descansar");
        break;
    } else {
        alert("No es un día válido");
    }
}


