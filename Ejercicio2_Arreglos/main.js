/* Deberas realizar los ejercicios anexados abajo:
1. Crear un array vacío, luego generar 10 números al azar y 
guardarlos en un array. Mostrar en consola el resultado del array.*/
// Crear un array vacío
 
let arregloVacio = [];
let rango = 40;

for (let index = 0; index < 10; index++) {
    let numeros = Math.floor(Math.random() * rango); // Genera un número entre 0 y 99
    arregloVacio.push(numeros);
}

alert("Los 10 numeros al azar son: "+arregloVacio);

/*2. El usuario deberá ingresar un string con varias palabras separadas 
por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). 
Mostrar en consola dicho resultado.*/
let palabras = prompt("Ingresa una cadena con palabras, y seperalo con coma porfavor");
let arregloSeparado = palabras.split(',')
console.log(arregloSeparado);

/*3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo 
ordenado de menor a mayor, muestra el número menor y el número mayor. 
Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/

let arreglo = [10, 40, 30, 20, 15, 5];

const ordenarNumeros = (a, b) => a - b;
arreglo.sort(ordenarNumeros);


let numeroMenor = arreglo[0];
let numeroMayor = arreglo[arreglo.length - 1];

console.log("El arreglo ordenado de menor a mayor:", arreglo);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
