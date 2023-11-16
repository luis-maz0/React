//Qué son los Prototypes? 
//Qué son los objetos literales? 
//

const persona = {
    nombre: "Tony",
    apellido: "Soprano",
    edad: 45,
};

console.log( persona) //{ nombre: 'Tony', apellido: 'Soprano', edad: 45 }

//Poder ver el nombre del objeto
//Se crea un objeto que tiene como propiedad el nombre del objeto, 
//El valor será con todas las propiedades y valores. 

//Antes
console.log( {persona: persona }) 
//Ahora (ECma6)
console.log( { persona }) //{ persona: { nombre: 'Tony', apellido: 'Soprano', edad: 45 } }

//Visualizarlo como table
console.table( persona)


//Anidamiento de objetos
const persona2 = {
    nombre:"Bryan",
    apellido: "Goslyn",
    edad: 45, 
    direccion: {
        ciudad: "Buenos Aires",
        calle: "Rodriguez peña",
        altura: 2020
    }
}

//HACER COPIA DE UNA OBJETO
//Se copia la referencia en memoria del objeto persona2. 
const persona3 = persona2
persona3.nombre = "Raul" //Afectará al objeto persona2

console.log(persona3.nombre) //Raul
console.log(persona2.nombre) //Raul

//Para hacer una copia correctamente 
//Se podria craar un nuevo objeto con todas las propiedades del objeto que queremos copiar

const persona4 = { nombre: "Bryan", } //Si es un objeto muy grande es muy tedioso. 
const persona5 = {... persona3 } //Utilizando operador spread es más sencillo. 
