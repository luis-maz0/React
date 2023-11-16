const arreglo = [1,2,3,4]

let arreglo2 = [55,...arreglo, 5]

console.log(arreglo)
console.log(arreglo2)

//Recibe como argumento un callback
let arreglo3 = arreglo2.map( function(num){ 
    return num * 2
})

//Se puede simplificar con un arrow function
arreglo3 = arreglo2.map(num => num * 2)

console.log(arreglo3)