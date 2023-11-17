//Importamos la data (shortcut: imp + tab + tab)
import { heroes, owners }   from "../data/heroes"; 

//console.log(heroes)
//console.log(owners)

//Función 1
const getHeroeById = (id)=>{
    return heroes.find( heroe => heroe.id === id)
}

//console.log( getHeroeById(1))

//Función 2
const getHeroeByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner)

//console.log( getHeroeByOwner("DC"))
//console.log( getHeroeByOwner("Marvel"))

export{ 
    getHeroeById,
    getHeroeByOwner
}