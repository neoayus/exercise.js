// Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable. 
// 

function accessVar(){ // this function tries to accessa an undefined var. causing an Refrence Error 
    try{
        console.log(Undefinedvariable) ; // try to access an undefined variable

    }catch(error){ // caught block to handle erros 
        // checking if it's an Reference Error 
        if(error instanceof ReferenceError){ // log if it's an REF error 
            console.log('REFERENCE ERROR : ', error.message) ; 
        }else{ // log if it ain't ref. error 
            console.log('ERROR : ', error.message) ; 
        }
    }
}