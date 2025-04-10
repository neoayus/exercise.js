// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function cap(str){  
    var stringArray = str.split(' ') ;  
    var modifiedString = [] ; 
    for(var x = 0 ; x < stringArray.length ; x++){
        modifiedString.push(stringArray[x].charAt(0).toUpperCase() + stringArray[x].slice(1)) ;        
    }
    return modifiedString.join(' ');
}

let ex = "this is a string."
console.log(cap(ex)) ;