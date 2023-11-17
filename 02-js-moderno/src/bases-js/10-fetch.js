const APIKey = "4JdbAbpOfEWUuQzdmNCqOGUImUxGpwUe"; 

//Retorna una promesa -> Response. 
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKey}`)

/*
peticion.then( resp => {
    console.log("Cuerpo de la respuesta: ",resp)
    resp.json().then( data => {
        console.log("Data: ",data)
    })
})
    .catch(err => console.warn(err))

//Encadenamiento de promesas 
peticion.then( resp => resp.json())
        .then( data => console.log(data))
        .catch( console.warn)
    */

//Visualización del gif
const colocarImg = (urlImg)=>{
    const img = document.createElement("img")
    img.src = urlImg
    document.body.append(img)
}
peticion
        .then( resp => resp.json())
        .then( ({ data }) => {
            //console.log(data.images.original)
            const { url } = data.images.original
            //console.log(url)
            colocarImg(url)
        })
        .catch( console.warn)
