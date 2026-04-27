// let - Block Scoped
//let b =20; // Global Scope
//console.log(b);

// Defination of the function
function printHello(){
        console.log("Hello TheTestingAcademy!");
        //let b = 30; // Local Scope
        //console.log(b);
        if(true){
            let b = 5;
            b = 10;
            console.log(b); // 10
        }
        else
        {
            //let b = 10;  
            //b=30;
            console.log(b);
        }
        console.log("let ->",b);   
}

// Calling of the function
printHello();

// let does NOT allow re-declaration in the same scope
// let b = 40; // Error: Identifier 'b' has already been declared
// let a = 10;
// let a = 10;