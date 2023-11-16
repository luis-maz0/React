//NO RECOMENDADO
function saludar1(nombre){
    return `Hola ${nombre}`
}
console.log(saludar1) //Referenica a la función
saludar1 = 20
console.log(saludar1) //20

//RECOMENDADO 
const saludar2 = function(nombre){
    return `Hola ${nombre}`
}
//Con arrow function
const saludar3 = (nombre) => { 
    return `Hola ${nombre}`
}
//Con arrow function simplificado
const saludar4 = nombre => `Hola ${nombre}`

//--------------

const getUser = ()=>{
    return{
        id: "abc123",
        userName: "RAUL_89"
    }
}
console.log(getUser())

//Con arrow function
const getUser2 = (nombre)=>
    ({
        id: "abc123",
        userName: nombre
    })
console.log(getUser2("Luis"))


