import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe("Prueba en 08-imp-exp",()=>{
    test("getHeroeById debe retornar un heroe por ID",()=>{
        const id = 1; 
        const heroe = getHeroeById(id); 
        
        expect( heroe ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });
    test("getHeroeById debe retornar undefined si no existe",()=>{
        const id = 100; 
        const heroe = getHeroeById(id); 
        expect( heroe ).toBe(undefined); 
        expect( heroe ).toBeFalsy(); 
    });

    test("getHeroeByOwner debe retonrar un arr de DC",()=>{
        const owner = "DC"; 
        const cantidadHeroes = 3; 

        const heroes = getHeroesByOwner(owner); 
        expect( heroes.length ).toBe(cantidadHeroes);
        expect( heroes ).toEqual(
            [{"id": 1, "name": "Batman", "owner": "DC"}, 
            {"id": 3, "name": "Superman", "owner": "DC"}, 
            {"id": 4, "name": "Flash", "owner": "DC"}]); 
    });
    test("getHeroeByOwner debe retonrar un arr de Marvel",()=>{
        const owner = "Marvel"; 
        const cantidadHeroes = 2; 

        const heroes = getHeroesByOwner(owner); 
        expect( heroes.length ).toBe(cantidadHeroes);
        expect( heroes ).toEqual([
            {"id": 2, "name": "Spiderman", "owner": "Marvel"}, 
            {"id": 5, "name": "Wolverine", "owner": "Marvel"}]); 
    });
})