import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe("Pruebas en 02-template-string", ()=>{
    test('getSaludo debe retornar "Hola luis"', ()=>{
        const nombre = "luis"; 
        const mensaje = getSaludo(nombre);

        expect(mensaje).toBe(`Hola luis`)
    })
})