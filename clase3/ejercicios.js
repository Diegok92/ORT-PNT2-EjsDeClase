/*
Ejercicio 1 - Filtrar personajes menores de edad
Crear un array de objetos con información de personajes de Los Simpsons, cada 
objeto debe contener el nombre, la edad y el rol del personaje. Utilizar el método 
filter  para obtener un nuevo array que contenga solamente los personajes 
menores de 18 años
*/

let simpsons = [
	{
		nombre: "Homero",
		edad: 35,
		rol: "Padre",
	},
	{
		nombre: "Marge",
		edad: 35,
		rol: "Madre",
	},
	{
		nombre: "Bart",
		edad: 10,
		rol: "Hijo",
	},
	{
		nombre: "Lisa",
		edad: 8,
		rol: "Hija",
	},
	{
		nombre: "Maggie",
		edad: 2,
		rol: "Bebe",
	},
	{
		nombre: "Hugo",
		edad: 10,
		rol: "mellizo malvado",
	},
];

console.log(simpsons.filter((e) => e.edad < 18));

/*
Ejercicio 2: Sumar edades de los personajes

Utilizar el método  reduce  para sumar las edades de todos los personajes del array 
creado en el Ejercicio 1. Mostrar el resultado en la consola.
*/

console.log(simpsons.reduce((acc, personaje) => acc + personaje.edad, 0));

/*
Ejercicio 3: Obtener los nombres de los personajes

Utilizar el método  map  y una función arrow para crear un nuevo array que contenga 
solamente los nombres de los personajes del array del Ejercicio 1. Mostrar el nuevo 
array en la consola
*/

let nombresSimpsons = simpsons.map((e) => e.nombre);
console.log(nombresSimpsons);
