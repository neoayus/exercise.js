// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty. 
// 

function validateArray(array){
    if(array.length === 0){ // if array length is smalled than 0 then it is an empty array 
        throw new Error('This Array is Empty !') ;
    }
}


// try nd catch 
try{
    // array with elements 
    const nums = [1,2,3,4,5] ;
    validateArray(nums) ;

    //  array wo elements 
    const names = [] ; 
    validateArray(names) ;

}catch(error){
    console.log('Error:', error.message) ;
}