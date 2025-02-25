// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero. 

function divideNumber(n1, n2){
    if( n2 == 0){ // throw error if you divide things by 0 
        throw new Error('Error: Division by 0 isn\'t allowed') ;
    }
    return n1/n2 ; // return divisor 
}

// try things 
try{
    divideNumber(1,0) ;
}catch(error){
    console.log(error) ; // print throwed error
}