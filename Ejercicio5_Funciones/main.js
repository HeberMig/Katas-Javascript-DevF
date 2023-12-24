// Ejercicio 5 : Funciones.
// Deberas realizar un semáforo utilizando JS.
// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
// Se debe respetar el orden de los colores:
// De rojo pasa a Verde.
// De amarillo puede pasar a Rojo.
// De Verde pasa a Amarillo.

const semaforoColorImagen = document.getElementById('semaforoColorImagen');

function cambiarColor(colorCirculo, imagenCirculo) {
    console.log("El semáforo cambió a " + colorCirculo);
    semaforoColorImagen.src = imagenCirculo;
  

}
function semaforo() {
    cambiarColor("Rojo", "Imagen/circuloRojo.png");
    setTimeout(() => {
        cambiarColor("Verde", "Imagen/circuloVerde.png");
        

        setTimeout(() => {
            cambiarColor("Amarillo", "Imagen/circuloAmarillo.png");
            

            setTimeout(() => {
                cambiarColor("Rojo", "Imagen/circuloRojo.png");
                
                setTimeout(() => {
                    cambiarColor("Verde", "Imagen/circuloVerde.png");
                    setTimeout(semaforo, 2000);
                }, 2000);
                
            }, 2000); 
        }, 2000); 
    }, 2000);
}

window.onload = semaforo;

