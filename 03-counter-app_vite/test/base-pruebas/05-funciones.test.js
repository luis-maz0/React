import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones.js";

describe("Prueba en 05-funciones",()=>{
    test("getUser debe retornar un objeto", ()=>{
        
        const testUser = {
            uid: "ABC123", 
            userName: "El_Papi1502",
        }; 

        const { userName, uid} = getUser(testUser); 

        expect( testUser.uid ).toEqual( uid); 
        expect( testUser.userName ).toEqual( userName); 
        expect ( testUser).toEqual(testUser)
    });
    test("getUser debe retornar un objeto",()=>{
        const name = "Rue"; 
      
        const userActivo = getUsuarioActivo(name); 
        
        expect( userActivo ).toEqual({
            uid: "ABC567",
            userName: "Rue"
        });  
    })
})