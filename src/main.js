// Mostrar en consola si el alumno está aprobado o no
const proyectosFinales = [10, 6, 3, 6, 8, 2];

console.log('Resultados de proyectos finales:');

for (i = 0; i <= 5; i++){
    if(proyectosFinales[i] < 6){
        console.log(`ID de Alumno: ${i}\nCalificación: ${proyectosFinales[i]}\nEstado: %cdesaprobado :(`, 'color: red;');
    } else {
        console.log(`ID de Alumno: ${i} \nCalificación: ${proyectosFinales[i]} \nEstado: %caprobado! :)`,'color: green;');
    }
}

// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

const nVeces = Number(prompt('Ingresar un número:'));
i = 0;

while(i < nVeces){
    console.log('Hola');
    i++;
}