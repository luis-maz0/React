import { render, screen} from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas optimizadas FirstApp ', () => {
    //Utilizamos constantes globales para todos los test
    const textoSaludo = "HOLA",
          textoNombre = "luis",
          textoEdad = 25; 

    test('Hacer match con el snapshot', () => {
        const {container} = render( <FirstApp
            saludo={ textoSaludo }
            nombre={ textoNombre }
            edad={ textoEdad }
        />)
        expect( container ).toMatchSnapshot()
      });
    
    test("Debe existir el mensaje del saludo",()=>{
       render( <FirstApp
            saludo={ textoSaludo }
            nombre={ textoNombre }
            edad={ textoEdad }
        />)
        //Mostrar el componente entero renderizado
        screen.debug() 

        //Verificar existencia del saludo
        expect( screen.getByText(textoSaludo)).toBeTruthy()
    })
    test('Debe mostrar el contenido del h1', () => {
        render( <FirstApp
            saludo={ textoSaludo }
            nombre={ textoNombre }
            edad={ textoEdad }
        />)
        expect( screen.getByRole("heading", {level:1}).innerHTML).toContain(textoSaludo)
    })
  })