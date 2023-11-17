const personajes = ["superman", "batman", "flash"]; 

console.log( personajes[0])
console.log( personajes[1])
console.log( personajes[2])

//Desestructuración de arreglos
//Hay que tener en cuenta el orden. 
const [p1 , ,p3 ] = personajes
console.log(p1 , p3) //superman Flash 

//Con función 
const retornaArreglo = () => {
    return ["ABC", 123]
}
const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros) 

//useState: Función que retorna un arreglo
//Vamos a tener un arreglo con un valor y una función. 
const useState = ( nombre )=> {
    return [ nombre , ()=> { console.log(`Holaa ${ nombre}`)}]; 
}

const [ nombre, saludar ] = useState("Luis"); 
console.log( nombre)
saludar()

