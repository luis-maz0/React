import PropTypes from 'prop-types';

const getSaludo = ()=> "Hola mundo"; 
const array = [1,2,3,4]; 
const objeto = { 
    titulo: "First App"
}

export const FirstApp = ( {saludo, edad, nombre } )=> {
    return(
        <> 
            {/*
            <h2>Titulo objeto: { props.title }</h2>
             <p>Mensaje retorno de función: { getSaludo() } </p>
            <p>Contenido de array: { array } </p>
            <p> {true } </p>
            <code>Visualizar objeto:  {JSON.stringify(objeto)} </code>
             */}
             <h1>{saludo} {nombre}, {edad} </h1>
             
        </>
)}

FirstApp.propTypes = {
    saludo: PropTypes.string,
    edad: PropTypes.number,
    nombre: PropTypes.string
};

FirstApp.defaultProps = {
    saludo: "NO HAY TITULO",
    nombre: "NO HAY NOMBRE",
    edad: 0
}