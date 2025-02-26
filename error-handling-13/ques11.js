// Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression. 

function evalExpression(exp){
    try{
        const result = eval(exp) ; // eval() function takes a string as input and execute it like it's javascript 
        console.log('result is : ', result) ;

    }catch(error){
        // check if the error occured is an evaluation error 
        if(error instanceof EvalError){ // log if it's an evaluation error 
            console.log('EvalError : there are some evaluation error in the input string') ;
        }else{ // log if it ain't an eval. error 
            console.log('Error :', error.message) ;
        }
    }
}

// example : 
// valid expression 
evalExpression('30 + 30') ; 

// invalid expression 
evalExpression('20 +') ; 