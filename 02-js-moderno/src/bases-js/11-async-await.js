/*
//Función que retorna una promesa. 
const getImagenPromesa = ()=> {
    const promesa = new Promise( (resolve, reject) => {
        resolve("https://lalalala.com")
    })
    return promesa
}
console.log( getImagenPromesa() )

//Utilizando Async
const getImagenPromesaAsync = async ()=> {
    return "https://lalalala.com"; 
}
console.log( getImagenPromesaAsync() )

*/
//-------------------------------------------

const colocarImg = (urlImg)=>{
    const img = document.createElement("img")
    img.src = urlImg
    document.body.append(img)
}

const getImagenPromesa2 = async()=>{

    try{
        const APIKey = "4JdbAbpOfEWUuQzdmNCqOGUImUxGpwUe"; 

        //Se va a esperar a que se termine de resolver la promesa del fetch para ejecutar la siguiente linea de código. 
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKey}`)
        const { data } = await resp.json()
        const { url } = data.images.original
        colocarImg(url)

    }catch (error){
        console.warn(error)
    }
}
getImagenPromesa2()

