
describe("Primera prueba", ()=>{
    test("Prueba que no puede fallar", ()=>{
        //1. Inicialización
        const mensaje1 = "Hola Mundo"; 
    
        //2. Estimulo
        const mensaje2 = mensaje1.trim();
    
        //3. Observar el comportamiento esperado
        expect( mensaje1 ).to( mensaje2); 
        
    })
})
