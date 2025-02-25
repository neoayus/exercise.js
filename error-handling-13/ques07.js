// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index. 
 
function accessArrayElement(array, index){ // try to put an out of bound array index 
    try{
        const element = array[index] ; // access the index in array 
        if(element == undefined){ 
            throw new RangeError('RangeError: the element you trynna access is out of range') ;
        }
        console.log('Accessed Element : ', element) ; // element found 
    }catch(error){ // if error is found
        if(error instanceof RangeError){ // if the error in a range error, log a message 
            console.log('Error: Invalid Index, please try again!') ;
        }else{ // if the error isn't a range error 
            console.log('Error : Not a Range Error : ', error.mesage) ;
        }
    }
}

const newArray = [0,1,2,3] ; 
accessArrayElement(newArray, 4) ; // access invalid index. 