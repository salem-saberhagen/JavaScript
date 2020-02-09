// 2-Type Operations

// 2a Introduction
// Type Inference - Cuando el compilador infiere el tipo de dato que asignaste a tus variables, etc.
// Asigna por default el tipo de dato Float
var coffeePrice = 18.90;
// Type Safety - Asegura que uses tus variables de forma apropiada de acuerdo a los valores que haz guardado en ellas
// Asigna por default el tipo de dato Int
var cupsOfCoffee = 4;
// Esta operación se va a llevar acabo porque JS no es de tipado seguro :(
console.log(coffeePrice * cupsOfCoffee); // -> 75.6

// Type Annotation - Ser explícitos acerca del tipo de dato que queremos guardar en nuestras variables
var total = 0;
/*
  En JS no hay una forma de definir explicitamente el tipo de dato como en Switf, por ejemplo:
  var total: Double = 0
*/

// 2b Type conversion
// Para mantener la coherencia podemos igualar los tipos en la operación
total = coffeePrice * parseFloat(cupsOfCoffee);
// Usamos toFixed() para mostrar N número de decimales
console.log("Total: " + total.toFixed(2)); // -> Total: 75.60
// Supongamos que alguien por error guarda cierta cantidad como un String, pasa
var breads = "3";
// ¿Qué va a suceder? Que obtendremos mal el número de artículos
console.log("Artículos vendidos: " + (cupsOfCoffee + breads)); // -> Artículos vendidos: 43
// De vuelta, realizamos una conversión para asegurarnos de no mezclar tipos y deformar los datos
console.log("Artículos vendidos: " + (cupsOfCoffee + parseInt(breads))); // -> Artículos vendidos: 7

//Challenge 
//##1

var name= prompt("¿Como te llamas?" , "");
var saludo= "";

if (name=="") {
console.log("No me has dado tu nombre")

}
else{
console.log	(saludo = "Hola " + name);
}

//easy xd 

//##2
const  miEdad= 21;
var  mascotas= 1;
var pregunta = prompt("¿cuantas mascotas has comprado ?" , "");


	if(pregunta>=1  ){
		console.log ("Ahora tienes " + (mascotas + parseInt(pregunta)));
	}
else {
	console.log("menos mal xd");
}

//No tan easy xd
//##3

const edad = 16
console.log(edad);
if(edad==16){
const edad =30
console.log(edad);
}

// xd compilo jejejejeje
//##4

var rating1= 6.8;
var rating2=8.34;
var rating3 =4.12;
var ratingPromedio;

ratingPromedio= (rating1+rating2+rating3)/3;
console.log("El promedio es " + ratingPromedio.toFixed(2));

// :O
//##5

const numerorandom= Math.random();
const tiradedados=5;
console.log(numerorandom+tiradedados);
