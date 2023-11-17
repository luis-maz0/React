import { getHeroeById } from "./bases-js/08-imp-exp"

//Creamos una promesa que tiene como parametro un callback con dos parametros, el primer parametro es un callback resolve que se ejecutará cuando la promesa se cumpla correctamente, idem reject pero cuando la promesa falla. 

const promesa = new Promise( ( resolve, reject ) => {
    setTimeout( ()=> {
        const heroe = getHeroeById(2)
        resolve(heroe)
        reject("NO SE PUDO ENCONTRAR EL ERROR")
    }, 2000)
})

promesa
    .then( (heroe) => console.log("promesa resuelta: ", heroe))
    .catch( err => console.warn(err))

//Si necesito pasarle como parametro un heroe que quiero buscar a una promesa. 
//Vamos a tener una función que retornará una promesa, el cual tendrá que buscar un heroe (simulando una consulta a una API). Cuando se llama la función getHeroeByIdAsync tenemos que tratar la promesa con then y catch para saber si se resolvio o no. 

const getHeroeByIdAsync = (idHeroe)=>{
    //Usamos setTimeOut para simular una petición a una API externa. 
    return new Promise( ( resolve, reject ) => {
        setTimeout( ()=> {
            const heroe = getHeroeById(idHeroe)
            if(heroe) resolve(heroe)
            reject("NO SE PUDO ENCONTRAR EL ERROR")
        }, 2000)
    })
}

getHeroeByIdAsync(10)
    .then( (heroe) => console.log("Heroe encontrado: ",heroe))
    .catch( (err) => console.warn(err))
//Podemos simplificar el código del then y catch, como recibe un solo argumento y este es usado en otra función (console.log() o consolo.warn()) podemos obviarlo 
getHeroeByIdAsync(5)
    .then( console.log )
    .catch( console.warn )