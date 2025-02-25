// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object

try{
    // declare a const obj 'undefined' and assign it undefined value ; 
    const undefinedObject = undefined ; 
    
    // access a prop. of undefined object causing a error.. 
    console.log(undefinedObject.property) ;

}catch(error){ // catch block to handle errors thrown in try block 
    if(error instanceof TypeError){
        console.log("Error: Property access to undefined object.") ; 
    }else{
        throw error ; 
    }
}
