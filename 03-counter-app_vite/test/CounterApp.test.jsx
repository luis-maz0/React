import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en CounterApp', () => { 
    const valorInicial = 100; 
    test('Match con el snapshot', () => { 
        //1. Renderizo el componente con la función render y desestructuro el objeto container para hacer el snapshot. 
        
        const { container } = render(
            <CounterApp
                value={ valorInicial}
            />
         )
        expect(container).toMatchSnapshot(); 
     })
     test("Debe mostrar el valor inicial de 100",()=>{
        render(
            <CounterApp
                value={ valorInicial}
            />
         )
         //Existe un h2
         expect( screen.getByRole("heading", {level: 2})).toBeTruthy()
         //Existe un h2 que contiene el valor inicial de 100
         expect( screen.getByRole( "heading", {level: 2}).innerHTML).toContain( valorInicial.toString())
     })
     test("Debe incrementar con el botón +1",()=>{
        render(
            <CounterApp
                value={ valorInicial}
            />
         )
         fireEvent.click(screen.getByText("+1"))
         expect(screen.getByText("101")).toBeTruthy()
     })
     test("Debe decrementar con el botón -1",()=>{
        render(
            <CounterApp
                value={ valorInicial}
            />
         )
         fireEvent.click(screen.getByText("-1"))
         expect(screen.getByText("99")).toBeTruthy()
     })
     test("Debe volver al valor inicial con el boton reset",()=>{
        render(
            <CounterApp
                value={ valorInicial}
            />
         )
         fireEvent.click(screen.getByText("+1"))
         fireEvent.click(screen.getByText("+1"))
         fireEvent.click(screen.getByText("+1"))
         
         //Utilizando la referencia del aria-label
         fireEvent.click( screen.getByRole("button", {name: "btn-reset"}))
         expect(screen.getByText("100")).toBeTruthy()
     })
 })