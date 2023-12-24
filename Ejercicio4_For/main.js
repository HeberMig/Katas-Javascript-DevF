// Ejercicio 4 : Estructuras de control: FOR.
// Deberas realizar los ejercicios anexados abajo:
// 1. Crea un programa que imprima en consola los números impares del 1 al 50.

for (let index = 1; index <= 50 ; index++) {
    if (index % 2 === 1) {
        console.log("Es impar"+index); 
        
    }   
}

// 2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons,
// mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 
// hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.

var pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ]
  
  let numerosPokemons = pokemons.length;
console.log("El arreglo de pokemon tiene " + numerosPokemons + " elementos.");
  
let entradaUsuario = prompt("Ingresa un número");
  if  (!isNaN(entradaUsuario) && entradaUsuario !== null && entradaUsuario !== "") { 
      entradaUsuario = parseInt(entradaUsuario);
for (let index = 0; index <= entradaUsuario; index++) {
    if(index % 5 === 0 && pokemons[index - 1]){
        console.log("Los pokemons multiplos de 5 son : "+ pokemons[index - 1]);
    }
    else if(index % 5 !== 0 && pokemons[index - 1]){
        console.log("No son multiplos de 5 : " + pokemons[index -1])
    }else{
        console.log("Número incorrecto o no hay un Pokémon correspondiente.");
    } 
  }
}   else{
        console.log("Numero invalido");
    }


// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y 
// muestre en consola solo los elementos que son tipo número.

let arregloNumeros = [4,"dos",8,"tres",5,9,1,"cero"];

for (let index = 0; index < arregloNumeros.length; index++) {
    if(typeof arregloNumeros[index] === 'number' ){
        console.log(arregloNumeros[index]);
    }
    
}


