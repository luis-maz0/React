const persona = {
    nombre : "Raul",
    edad : 45,
    clave : "raul1987"
};

//Sin asignación desestructurante. 
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

//Con asignación desestructurante
//Se crean todas las constantes con el mismo nombre que las claves y se les asigna los valores.
//También se puede renombrar.  
const { nombre, clave:sobreNombre, edad } = persona

//--------------------------------------------

//Si desestructurar el argumento. 
const retornaPersona = ( usuario ) => {
    const { nombre, clave:sobreNombre, edad } = usuario
    console.log(nombre, sobreNombre, edad)
}

retornaPersona(persona)

//Desestructurando el argumento. 
const retornaPersona2 = ( { nombre, clave:sobreNombre, edad } ) => {
    console.log(nombre, sobreNombre, edad)
}
retornaPersona2(persona)

//Agregando valores por defecto
const retornaPersona3 = ( { nombre, clave:sobreNombre, edad, estadoCivil = "soltero"} ) => {
    console.log(nombre, sobreNombre, edad, estadoCivil)
}
retornaPersona3(persona)

//Use context: Función que retorna un objeto. 
//Desestructuración anidada 
const useContext = ({ nombre, edad}) => {
    return {
        usuario: nombre,
        anios: edad,
        direccion:{
            ciudad: "Villa Bosch",
            cp: 1682
        }
    }
}
const {usuario, anios, direccion:{ ciudad, cp }} = useContext(persona)
console.log( usuario, anios, ciudad, cp)