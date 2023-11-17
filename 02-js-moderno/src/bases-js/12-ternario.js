//Sin operador ternario
const activo = true; 
let mensaje = ""; 

if(activo){
    mensaje = "activo"
}else{
    mensaje = "Inactivo"
}
console.log( mensaje)

//Con operador tenario
mensaje = activo ? "activo": "inactivo"; 
console.log( mensaje)

//Si quiero solamente mostrar algo cuando es true, de lo contrario no quiero nada.
//Si la primera partes es false, no ejecutará el resto de la expresión. 
mensaje = !activo && "Activo"
console.log( mensaje)