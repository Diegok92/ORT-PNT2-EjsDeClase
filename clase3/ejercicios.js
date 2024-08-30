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
