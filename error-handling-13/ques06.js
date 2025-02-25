// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty. 
 
function validateString(string){
    if(string.length === 0){
        throw new Error('String is empty!') ;
    }
}

try{
    // string 
    string01 = "this that slime shit" ; 
    // empty string ; 
    string02 = "" ; 

    // validation 
    validateString(string01) ;
    validateString(string02) ;

}catch(error){
    console.log(error.message); 
}