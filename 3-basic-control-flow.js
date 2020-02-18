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

function priceFormatted(number) {
  return `$${number.toFixed(2)}`
}

total = coffeePrice * parseFloat(cupsOfCoffee);
// Usamos toFixed() para mostrar N número de decimales
console.log("Total: " + total.toFixed(2)); // -> Total: 75.60
console.log("Total: " + priceFormatted(total)); // -> Total: 75.60
// Supongamos que alguien por error guarda cierta cantidad como un String, pasa
var breads = "3";
// ¿Qué va a suceder? Que obtendremos mal el número de artículos
console.log("Artículos vendidos: " + (cupsOfCoffee + breads)); // -> Artículos vendidos: 43
// De vuelta, realizamos una conversión para asegurarnos de no mezclar tipos y deformar los datos
console.log("Artículos vendidos: " + (cupsOfCoffee + parseInt(breads))); // -> Artículos vendidos: 7

// 2c Strings
var artist = "Chelsea Wolfe";
console.log(artist);
console.log(typeof(artist));

// Concatenation
var artistInfo = artist + " tiene 5 discos";
console.log(artistInfo);
console.log();

// Interpolation
var coffeeInfo = `El precio del café es ${coffeePrice} y yo pedí ${cupsOfCoffee} tazas, entonces pagaré: ${priceFormatted(total)}`;
console.log(coffeeInfo);

function greeting(name) {
  return `Hola, ${name}`
}

console.log(greeting("David"));
console.log(greeting("Ari"));
console.log(greeting("Norma"));
console.log(greeting(artist));

// Strings methods
console.log(artist.charAt(8));
console.log(artist.length);
console.log(artist.toUpperCase());
console.log(artist.toLowerCase());

//Challenge 2da de febrero

//1
const firstName= "David";
const lastName= "Tovar";
//2
const fullName= firstName+ " " + lastName;
console.log(fullName);
//3
const myDetails= `Mi nombre es tan comun que es facil recordarlo, me llamo ${fullName}`; 
console.log(myDetails);
//4
const myName= "David";
const himName= "Luis";
const herName= "Ariana";
const cont= `Mi nombre tiene ${myName.length} caracteres, y el nombre del man tiene ${himName.length} y el nombre de la profe tiene ${herName.length}`;
console.log (cont);