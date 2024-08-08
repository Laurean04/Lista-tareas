//console.log('hola consola');

//alert('Hola desde alert');

//Definir variables
//var apellido = "Vieyra";
let nombre = "Stephanie";

//definir constantes
const pi = 3.14;

//Tipos de datos
//no definido
let NoDefinido;
let cantidad = 50;
let bebida = "agua";
let activo = true;

//Objetos 

//Persona: nombre, apellido, edad, peso
let persona = {nombre: 'Aurora', apellido : 'Pinzon', edad : 20,};
console.log(persona);
//Array coleccion Personas
let personas =[
    {nombre : 'Melanie', Apellido : 'Matus', edad : 21},
    {nombre : 'Mayra', Apellido : 'Arias', edad : 19},
    {nombre : 'Karla', Apellido : 'Yuleni', edad : 22}, 
    persona
]
console.log(personas);
console.log(personas[2]);

//Funciones JS son un listado de instrucciones
function suma(a, b) {
    return a+b;
}
let resultado = suma(5,3);
console.log(resultado);

function multiplicacion(a,b) {
    return a * b; 
}
let resultadoMultiplicacion = multiplicacion(5,7);
console.log(resultadoMultiplicacion);
