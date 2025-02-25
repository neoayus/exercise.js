// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative. 

function random(num){
    if( num < 0){
        throw new Error('THIS a CUSTOM Error !!') ;
    }else{
        return ; 
    }
}

// catching error in try block 
try{
    random(-55) ; 
}catch(error){
    console.log(error) ;
}