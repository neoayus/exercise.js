// Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately. 
// 

function divideNumbers(x, y){
    // attemp to perfrom division methods     
    try{
        // check if both 'x' and 'y' are numbers 
        if(typeof x !== 'number' || typeof y !== 'number'){
            // if either of x and y aren't number, throw a TypeError. 
            throw new TypeError('TypeError: One of provided integer isn\'t number') ; 
        }
        
        // check if y is Zero
        if(y === 0){
            throw new Error('Error: Division with 0 isn\'t allowed') ;
        }
        
        //  perform division 
        const result = x/y ; 
        // log the result to the console.
        console.log("Result for ", x, "/", y, "is : ", result) ;

    }catch(error){ // if an error occurs during the execution of try block 
        // check if it's a TypeError 
        if(error instanceof TypeError){
            console.log('TypeError : ', error.message) ; 
        }else{ // if error isn't type error, log the message 
            console.log('Error : ', error.message) ;             
        }
    }
}

// example : 
divideNumbers(2,0) ; // division by 0 
divideNumbers('fineshyt',4) ; // type error  
divideNumbers(4,2) ; // no error 
