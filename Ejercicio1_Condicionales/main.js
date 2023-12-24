
// //Primer ejecicio Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
// //en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

const respuesta = prompt("¿Eres bellisimo/a? SI o NO");
if (respuesta.toUpperCase() === 'SI') {
    console.log("Ciertamente");
    
}
else if (respuesta.toUpperCase() === 'NO'){
    console.log("No te creo");
}
else{
    console.log("Respuesta invalida");
}

// //Segundo ejecicio Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
// //Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.


const numero = prompt("Introduce un numero");
if (numero % 2 === 0) {
    console.log(numero + " es divisible entre 2");
} else {
    console.log(numero + " no es divisible entre 2");
}

// // Tercer ejercicio 3. Crear un programa que determine 
// // si un número introducido en un Prompt es par o no, 
// // la respuesta será mostrada en un Alert.

const numeroPar = prompt("Introduce un numero");
if (numeroPar % 2 === 0) {
    alert(numeroPar + " es par");
} else {
    alert(numeroPar + " no es par");
}

// //Cuarto Ejercicio
// //Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 
// //'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

const numeroUsuario = prompt("Introduce un numero");
if (numeroUsuario  === 1000) {
    alert("Ganaste un premio");
} else {
    alert("Lo sentimos, sigue participando");
}

// /*5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
// No considerar el caso en que ambos números son iguales.*/

const numero1 = prompt("Introduce el primer numero");
const numero2 = prompt("Introduce el segundo numero");
if(numero1 < numero2){
    console.log(numero1,"es menor que", numero2);
}
else if(numero2 < numero1){
    console.log(numero2,"es menor que", numero1);
}
else if(numero1 === numero2){
    console.log("Numeros iguales");
    }
    else{
        console.log("Numero incorrecto");
    }
    

// /*6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor.
//  Considerar el caso en que 2 números sean iguales.*/

const numeroM1 = prompt("Introduce el primer número");
const numeroM2 = prompt("Introduce el segundo número");
const numeroM3 = prompt("Introduce el tercer número");

if (isNaN(numeroM1) || isNaN(numeroM2) || isNaN(numeroM3)) {
    console.log("Por favor, ingrese números válidos.");
} else {
    if (numeroM1 === numeroM2 && numeroM2 === numeroM3) {
        console.log("Los tres números son iguales.");
    }
     else {
//         // Encuentra el mayor de los tres números
        let mayor = numeroM1;

        if (numeroM2 > mayor) {
            mayor = numeroM2;
        }

        if (numeroM3 > mayor) {
            mayor = numeroM3;
        }

        console.log(`El mayor es: ${mayor}`);

       
        if (numeroM1 === numeroM2 || numeroM1 === numeroM3 || numeroM2 === numeroM3) {
            console.log("Al menos dos números son iguales.");
        }
    }
}

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
//otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
//Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

const diaSemana = prompt("Ingrese un día de la semana");
if(diaSemana !== null){
if (diaSemana === "lunes") {
    console.log("Excelente inicio de semana");    
}
else if (diaSemana === "viernes") {
    console.log("Gracias a Dios ya es viernes");    
} else if (diaSemana === "sabado" || diaSemana === "domingo" ) {
    console.log("Bonito fin de semana");
}
 else{
    console.log("Ya falta poco para viernes");
 }
}else{
    console.log("Ingresa un dia valido");
}

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que 
//el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. 
//Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” 
//si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

const calificacion = prompt("Ingresa tu calificacion");
if (calificacion > 0  &&  calificacion <= 10) {
     if (calificacion < 6) {
        alert("Estas reprobado");    
    }
    else if (calificacion >= 6 && calificacion <= 8 ) {
        alert("Tines una calificacion regular")
    }
    else if (calificacion == 9){
        alert("Tienes una calificacion promedio")
    }
    else if(calificacion == 10){
        alert("Tienes un calificacion excelente")
    }
        
}
else{
    alert("Error, supera el rango");
}

// 9. Escribe un programa que responda a un usuario que quiere comprar un helado 
//en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.


const precioBase = 50
const responde = prompt("Quieres un helado? si/no")
if(responde == 'si'){
const toppingUsuario = prompt('Deseas topping? si/no')
if(toppingUsuario == 'si'){
    let saborTopping = prompt('Que sabor deseas? oreo $10, kitkat $15, browie $20')
    if(saborTopping == 'oreo'){
        let nuevoPrecio = precioBase + 10
        console.log('El precio total es de:', nuevoPrecio);
    }
    else if(saborTopping == 'kitkat'){
        let nuevoPrecio = precioBase + 15
        console.log('El precio total es de:', nuevoPrecio);
    }
    else if(saborTopping == 'brownie'){
        let nuevoPrecio = precioBase + 10
        console.log('El precio total es de:', nuevoPrecio);
    }
    else{
        console.log('Ese topping no esta disponible');
    }
}
else{
    console.log('aqui esta tu helado, el precio es:', precioBase);
}
}
else{
    console.log("Vuelva pronto");
}

// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
//Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, 
//tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses
// const curso = 4999;
// const carrera = 3999;
// const master = 2999;

// let programa1 = prompt("Te gustaria aprender a desarrollar aplicaciones");
//     if(programa1.toLocaleLowerCase() === "si"){
//     let programas = prompt('Deseas conocer los precios? si/no')
//         if(programas.toLocaleLowerCase() == 'si'){
//         alert("Los programas y sus precios son los siguientes: elige un inciso a)Curso $4999, b)Carrera $3999, c)Master $2999");
//         let elegir = prompt("Cual inciso te gustaria elegir");
//         if(elegir.toLocaleLowerCase() === "a"){ //  El programa que elegi aqui es Curso
//             console.log("Felicidades has elegido el programa Curso su costo es $4999");
//             let validarBeca = prompt("¿Tienes alguna beca? si/no")//Validar si tienes beca si o no
//                 if(validarBeca.toLocaleLowerCase() === "si"){
//                     let tipoBeca = prompt("Cual Beca tienes: a)Facebook descuento 20%, b) Google descuento 15%, C) Jesua descuento 5%");
//                     if(tipoBeca.toLocaleLowerCase() === "a"){//Beca facebook
//                         var descuento = (curso * 20) /100;
//                         var precioFinal = curso - descuento;
//                         var precioDuracion = precioFinal * 2;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Facebook es de 20%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son dos meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else if(tipoBeca.toLocaleLowerCase() === "b"){//Beca google
//                         var descuento = (curso * 15) /100;
//                         var precioFinal = curso - descuento;
//                         var precioDuracion = precioFinal * 2;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Google es de 15%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son dos meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else if(tipoBeca.toLocaleLowerCase() === "c"){//Beca Jesua
//                         var descuento = (curso * 5) /100;
//                         var precioFinal = curso - descuento;
//                         var precioDuracion = precioFinal * 2;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Jesua es de 5%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son dos meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else{
//                         alert("Opcion incorrecta, elige un descuento");
                    
//                     }
//                 }
//                 else if(validarBeca.toLocaleLowerCase() === "no"){
//                     let tipoSinBeca = prompt("Cual programa eliges? a)Curso $4999, Carrera $3999, Master $2999");
//                     if(tipoSinBeca.toLocaleLowerCase() === "a"){
//                         alert("Felicidades elegiste el programa Curso")
//                         var precioFinal = curso * 2;
//                                 alert("El costo mensual incial es de: " +curso +" El curso completo son dos meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else if(tipoSinBeca.toLocaleLowerCase() === "b"){
//                         alert("Felicidades elegiste el programa Carrera")
//                         var precioFinal = carrera * 6;
//                             alert("El costo mensual incial es de: " +carrera +" El curso completo son seis meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else if(tipoSinBeca.toLocaleLowerCase() === "c"){
//                         alert("Felicidades elegiste el programa Master")
//                         var precioFinal = master * 12;
//                                 alert("El costo mensual incial es de: " +master +" El curso completo son doce meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else{
//                         alert("Opcion incorrecta, elige un descuento");
                    
//                     }

//                 }
//                 else{
//                     alert("Opcion incorrecta, elige si o no");
//                 }
                

//          }
//          else if(elegir.toLocaleLowerCase() === "b"){ //Programa Carrera
//             alert("Felicidades has elegido el programa Carrera su costo es $3999");
//             let validarBeca = prompt("¿Tienes alguna beca? si/no")
//                 if(validarBeca.toLocaleLowerCase() === "si"){ //con beca
//                     let tipoBeca = prompt("Cual Beca tienes: a)Facebook descuento 20%, b) Google descuento 15%, C) Jesua descuento 5%");
//                     if(tipoBeca === "a"){ //facebook
//                         var descuento = (carrera * 20) /100;
//                         var precioFinal = carrera - descuento;
//                         var precioDuracion = precioFinal * 6;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Facebook es de 20%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son seis meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else if(tipoBeca === "b"){//google
//                         var descuento = (carrera * 15) /100;
//                         var precioFinal = carrera - descuento;
//                         var precioDuracion = precioFinal * 6;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Google es de 15%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son seis meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else if(tipoBeca === "c"){//jesua
//                         var descuento = (carrera * 5) /100;
//                         var precioFinal = carrera - descuento;
//                         var precioDuracion = precioFinal * 6;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Jesua es de 5%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son seis meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else{
//                         alert("Opcion incorrecta, elige un descuento");
                    
//                     }
//                 }
//                 else if(validarBeca.toLocaleLowerCase() === "no"){
//                     let tipoSinBeca = prompt("Cual programa eliges? a)Curso $4999, Carrera $3999, Master $2999");
//                     if(tipoSinBeca.toLocaleLowerCase() === "a"){
//                         alert("Felicidades elegiste el programa Curso")
//                         var precioFinal = curso * 2;
//                                 alert("El costo mensual incial es de: " +curso +" El curso completo son dos meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else if(tipoSinBeca.toLocaleLowerCase() === "b"){
//                         alert("Felicidades elegiste el programa Carrera")
//                         var precioFinal = carrera * 6;
//                             alert("El costo mensual incial es de: " +carrera +" El curso completo son seis meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else if(tipoSinBeca.toLocaleLowerCase() === "c"){
//                         alert("Felicidades elegiste el programa Master")
//                         var precioFinal = master * 12;
//                                 alert("El costo mensual incial es de: " +master +" El curso completo son doce meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else{
//                         alert("Opcion incorrecta, elige un descuento");
                    
//                     }

//                 }
//                 else{
//                     alert("Opcion incorrecta, elige si o no");
//                 }
//          }
//          else if(elegir.toLocaleLowerCase() === "c"){ //Master
//             alert("Felicidades has elegido el programa Master su costo es $2999");
//             let validarBeca = prompt("¿Tienes alguna beca? si/no")
//                 if(validarBeca.toLocaleLowerCase() === "si"){
//                     let tipoBeca = prompt("Cual Beca tienes: a)Facebook descuento 20%, b) Google descuento 15%, C) Jesua descuento 5%");
//                     if(tipoBeca.toLocaleLowerCase() === "a"){ //facebook
//                         var descuento = (master * 20) /100;
//                         var precioFinal = master - descuento;
//                         var precioDuracion = precioFinal * 12;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Facebook es de 20%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son doce meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else if(tipoBeca.toLocaleLowerCase() === "b"){//google
//                         var descuento = (master * 15) /100;
//                         var precioFinal = master - descuento;
//                         var precioDuracion = precioFinal * 12;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Google es de 15%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son doce meses por lo tanto pagara: " + precioDuracion);
//                     }
//                     else if(tipoBeca.toLocaleLowerCase() === "c"){//jesua
//                         var descuento = (master * 5) /100;
//                         var precioFinal = master - descuento;
//                         var precioDuracion = precioFinal * 12;
//                                 alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Jesua es de 5%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son doce por lo tanto pagara: " + precioDuracion);
//                     }
//                     else{
//                         alert("Opcion incorrecta, elige un descuento");
                    
//                     }
//                 }
//                 else if(validarBeca.toLocaleLowerCase() === "no"){
//                     let tipoSinBeca = prompt("Cual programa eliges? a)Curso $4999, Carrera $3999, Master $2999");
//                     if(tipoSinBeca.toLocaleLowerCase() === "a"){
//                         alert("Felicidades elegiste el programa Curso")
//                         var precioFinal = curso * 2;
//                                 alert("El costo mensual incial es de: " +curso +" El curso completo son dos meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else if(tipoSinBeca.toLocaleLowerCase() === "b"){
//                         alert("Felicidades elegiste el programa Carrera")
//                         var precioFinal = carrera * 6;
//                             alert("El costo mensual incial es de: " +carrera +" El curso completo son seis meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else if(tipoSinBeca.toLocaleLowerCase() === "c"){
//                         alert("Felicidades elegiste el programa Master")
//                         var precioFinal = master * 12;
//                                 alert("El costo mensual incial es de: " +master +" El curso completo son doce meses por lo tanto pagara: " + precioFinal);
//                     }
//                     else{
//                         alert("Opcion incorrecta, elige un descuento");
                    
//                     }

//                 }
//                 else{
//                     alert("Opcion incorrecta, elige si o no");
//                 }
//          }
//          else{
//             alert("Opcion incorrecta, lo sentimos no elegió algun programa");
//          }
//         }
//         else{
//             alert("Necesita conocer los precios, para poder tomar una decision");
//         }
//     }
//     else{
//         alert("Lamentamos que no le interese, vuelva pronto");
//     }
// Hice otra version para mi mejor:_____________________________________________________________________________________________________________

const curso = 4999;
const carrera = 3999;
const master = 2999;

let programa1 = prompt("Te gustaria aprender a desarrollar aplicaciones");
    if(programa1.toLocaleLowerCase() === "si"){
    let programas = prompt('Deseas conocer los precios? si/no')
        if(programas.toLocaleLowerCase() == 'si'){
        alert("Los programas y sus precios son los siguientes: elige un inciso a)Curso $4999, b)Carrera $3999, c)Master $2999");
        let elegir = prompt("Cual inciso te gustaria elegir");
        if(elegir.toLocaleLowerCase() === "a"){ //  El programa que elegi aqui es Curso
            console.log("Felicidades has elegido el programa Curso su costo es $4999");
            let validarBeca = prompt("¿Tienes alguna beca? si/no")//Validar si tienes beca si o no
                if(validarBeca.toLocaleLowerCase() === "si"){
                    let tipoBeca = prompt("Cual Beca tienes: a)Facebook descuento 20%, b) Google descuento 15%, C) Jesua descuento 5%");
                    if(tipoBeca.toLocaleLowerCase() === "a"){//Beca facebook
                        var descuento = (curso * 20) /100;
                        var precioFinal = curso - descuento;
                        var precioDuracion = precioFinal * 2;
                                alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Facebook es de 20%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son dos meses por lo tanto pagara: " + precioDuracion);
                    }
                    else if(tipoBeca.toLocaleLowerCase() === "b"){//Beca google
                        var descuento = (curso * 15) /100;
                        var precioFinal = curso - descuento;
                        var precioDuracion = precioFinal * 2;
                                alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Google es de 15%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son dos meses por lo tanto pagara: " + precioDuracion);
                    }
                    else if(tipoBeca.toLocaleLowerCase() === "c"){//Beca Jesua
                        var descuento = (curso * 5) /100;
                        var precioFinal = curso - descuento;
                        var precioDuracion = precioFinal * 2;
                                alert("El costo mensual incial es de: " +curso +" tu descuento por tener la Beca de Jesua es de 5%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son dos meses por lo tanto pagara: " + precioDuracion);
                    }
                    else{
                        alert("Opcion incorrecta, elige un descuento");
                    
                    }
                }
                else if(validarBeca.toLocaleLowerCase() === "no"){
                    alert("Felicidades elegiste el programa Curso")
                    var precioFinal = curso * 2;
                      alert("El costo mensual incial es de: " + curso +" El curso completo son dos meses por lo tanto pagara: " + precioFinal);
                }
                    else{
                        alert("Opcion incorrecta, elige una opcion si o no");
                    
                    }

            } 
         else if(elegir.toLocaleLowerCase() === "b"){ //Programa Carrera
            alert("Felicidades has elegido el programa Carrera su costo es $3999");
            let validarBeca = prompt("¿Tienes alguna beca? si/no")
                if(validarBeca.toLocaleLowerCase() === "si"){ //con beca
                    let tipoBeca = prompt("Cual Beca tienes: a)Facebook descuento 20%, b) Google descuento 15%, C) Jesua descuento 5%");
                    if(tipoBeca === "a"){ //facebook
                        var descuento = (carrera * 20) /100;
                        var precioFinal = carrera - descuento;
                        var precioDuracion = precioFinal * 6;
                                alert("El costo mensual incial es de: " + carrera +" tu descuento por tener la Beca de Facebook es de 20%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son seis meses por lo tanto pagara: " + precioDuracion);
                    }
                    else if(tipoBeca === "b"){//google
                        var descuento = (carrera * 15) /100;
                        var precioFinal = carrera - descuento;
                        var precioDuracion = precioFinal * 6;
                                alert("El costo mensual incial es de: " + carrera +" tu descuento por tener la Beca de Google es de 15%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son seis meses por lo tanto pagara: " + precioDuracion);
                    }
                    else if(tipoBeca === "c"){//jesua
                        var descuento = (carrera * 5) /100;
                        var precioFinal = carrera - descuento;
                        var precioDuracion = precioFinal * 6;
                                alert("El costo mensual incial es de: " + carrera +" tu descuento por tener la Beca de Jesua es de 5%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son seis meses por lo tanto pagara: " + precioDuracion);
                    }
                    else{
                        alert("Opcion incorrecta, elige un descuento");
                    
                    }
                }
                else if(validarBeca.toLocaleLowerCase() === "no"){
                    alert("Felicidades elegiste el programa Carrera")
                    var precioFinal = carrera * 6;
                            alert("El costo mensual incial es de: " +carrera +" El curso completo son seis meses por lo tanto pagara: " + precioFinal);
                }//prueba
                    else{
                        alert("Opcion incorrecta, debes elegir si o no");
                    
                    }
                
         }
         else if(elegir.toLocaleLowerCase() === "c"){ //Master
            alert("Felicidades has elegido el programa Master su costo es $2999");
            let validarBeca = prompt("¿Tienes alguna beca? si/no")
                if(validarBeca.toLocaleLowerCase() === "si"){
                    let tipoBeca = prompt("Cual Beca tienes: a)Facebook descuento 20%, b) Google descuento 15%, C) Jesua descuento 5%");
                    if(tipoBeca.toLocaleLowerCase() === "a"){ //facebook
                        var descuento = (master * 20) /100;
                        var precioFinal = master - descuento;
                        var precioDuracion = precioFinal * 12;
                                alert("El costo mensual incial es de: " + master +" tu descuento por tener la Beca de Facebook es de 20%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son doce meses por lo tanto pagara: " + precioDuracion);
                    }
                    else if(tipoBeca.toLocaleLowerCase() === "b"){//google
                        var descuento = (master * 15) /100;
                        var precioFinal = master - descuento;
                        var precioDuracion = precioFinal * 12;
                                alert("El costo mensual incial es de: " + master +" tu descuento por tener la Beca de Google es de 15%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son doce meses por lo tanto pagara: " + precioDuracion);
                    }
                    else if(tipoBeca.toLocaleLowerCase() === "c"){//jesua
                        var descuento = (master * 5) /100;
                        var precioFinal = master - descuento;
                        var precioDuracion = precioFinal * 12;
                                alert("El costo mensual incial es de: " + master +" tu descuento por tener la Beca de Jesua es de 5%  es de "+descuento+" el total del descuento mensual a pagar es de "+precioFinal+ " El curso completo son doce por lo tanto pagara: " + precioDuracion);
                    }
                    else{
                        alert("Opcion incorrecta, elige un descuento");
                    
                    }
                }
                else if(validarBeca.toLocaleLowerCase() === "no"){
                    alert("Felicidades elegiste el programa Master")
                    var precioFinal = master * 12;
                            alert("El costo mensual incial es de: " +master +" El curso completo son doce meses por lo tanto pagara: " + precioFinal);
                }
                    else{
                        alert("Opcion incorrecta, debes elegir si o no");
                    
                    }
    }
            else{
                alert("Opcion incorrecta, tienes que elegir algun inciso")
        }
    } //fin programas
             else{
                 alert("Tienes que conocer los precios, para tomar un desicion")
    }
}   //fin programa1
    else{
        alert("Lo senteimos, considerelo y vuelva pronto")
    }

// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida
// por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, 
// si es “moto” ha de ser 0.10 y 
// si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la 
//cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. 
//Entregables

const precioViajeCoche = 0.20;
const precioViajeMoto = 0.10;
const precioViajeAutobus = 0.05;
const tipoVehiculo = prompt("Que vehiculo utilizó: coche/moto/autobus");
if(tipoVehiculo.toLocaleLowerCase() === 'coche'){
    let kmsRecorridos = prompt("Cuantos kms recorriste");
    if (kmsRecorridos > 0) {
        var costoTotal = kmsRecorridos * precioViajeCoche;
    let litrosConsumidos = prompt("Cuantos litros consumiste? ");
    if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
            var totalPagar = costoTotal + 5;
        alert("Total a pagar es "+ totalPagar);
    } else if(litrosConsumidos > 100){
            var totalPagar = costoTotal + 10
        alert("Total a pagar es. "+ totalPagar);
    }
    else{
        alert("Lo siento, ingrese un numero de listros consumidos")
    }
    }   
     else{
        alert("Lo siento, solo ingrese kms recorridos")
    }

}
else if(tipoVehiculo.toLocaleLowerCase() === 'moto'){
    let kmsRecorridos = prompt("Cuantos kms recorriste");
    if (kmsRecorridos > 0) {
        var costoTotal = kmsRecorridos * precioViajeMoto;
    let litrosConsumidos = prompt("Cuantos litros consumiste? ");
    if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
            var totalPagar = costoTotal + 5;
        alert("Total a pagar es "+ totalPagar);
    } else if(litrosConsumidos > 100){
            var totalPagar = costoTotal + 10
        alert("Total a pagar es. "+ totalPagar);
    }
    else{
        alert("Lo siento, ingrese listros consumidos")
    }
    }   
     else{
        alert("Lo siento, solo ingrese kms recorridos")
    }
}
else if(tipoVehiculo.toLocaleLowerCase() === 'autobus'){
    let kmsRecorridos = prompt("Cuantos kms recorriste");
    if (kmsRecorridos > 0) {
        var costoTotal = kmsRecorridos * precioViajeAutobus;
    let litrosConsumidos = prompt("Cuantos litros consumiste? ");
    if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
            var totalPagar = costoTotal + 5;
        alert("Total a pagar es "+ totalPagar);
    } else if(litrosConsumidos > 100){
            var totalPagar = costoTotal + 10
        alert("Total a pagar es. "+ totalPagar);
    }
    else{
        alert("Lo siento, ingrese listros consumidos")
    }
    }   
     else{
        alert("Lo siento, solo ingrese kms recorridos")
    }
}
else{
    alert("Opcion incorrecta, debe elegir un vehiculo");
}