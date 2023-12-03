import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp' , () => { 
    test('Debe hacerse match con el snapshot', () => {
        const saludo = "hola mundo";
        
        const {container, getByText, getByTestId} = render( <FirstApp saludo={ saludo }/>)
        //Realizamos un snapshot 
        expect(container).toMatchSnapshot()
        //Verificamos la existencia del texto
        expect(getByText(saludo)).toBeTruthy()
        //Verifico si existe el atributo test-saludo
        expect(getByTestId("test-saludo")).toBeTruthy()
        
        //Verificamos el contenido del elemento
        expect(getByTestId("test-saludo").innerHTML).toContain( saludo )
    })
    test('Debe de mostrar el subtitulo enviado por props', () => { 
        const saludo = "Hola!",
              nombre = "luis",
              edad = 25; 

        const { getByTestId } = render(
            <FirstApp
                saludo={saludo}
                nombre = {nombre}
                edad = {edad}
            />
        )
        expect( getByTestId("test-p").innerHTML).toContain(nombre, edad);
     })
 })