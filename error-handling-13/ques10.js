// Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block. 
// 

function divideNumber(x,y){
    try{ // Helps execute a block of code while handling potential errors or uncertainties.

        // check for type error 
        if( typeof x !== 'number' || typeof y !== 'number'){
            throw new TypeError('TypeError : invalid Input !') ;
        }
        
        // check for division with 0 
        if(y === 0){
            throw new Error('Invalid Divisor : Divisior must not be 0') ;
        }
        
        // calC the result for divison 
        const result = x/y ; 
        // log the result to console. 
        console.log('RESULT IS : ', result) ; 

    }catch(error){ // execute if error is caught 
        // log the error in console. 
        console.log(error) ;

    }finally{ // executed regardless of whether an error occured or neh, ensure certain cleanup actions are always performed. 
        // finally block to execute cleanup code regardless :3 
        console.log('CleanUp Code Executed !!') ;
    }
}

// exmaple : 
// right values : 
divideNumber(4,2) ;
// type error 
divideNumber('4',2) ;
// division by zero error : 
divideNumber(5,0) ;