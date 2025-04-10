// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longestString(string){

    var arrayOStrings = string.split(" ") ; // split the array by " " so each word is a new element in new array 

    var maxWordCount = arrayOStrings[0].length ; 
    var returnIdx = 0 ; 

    for(var x=0 ; x<arrayOStrings.length ; x++){

        if(arrayOStrings[x].length > maxWordCount){
            maxWordCount = arrayOStrings[x].length ; 
            returnIdx = x ; 
        }
    }     
    console.log("The longest Word in the given String is : " + arrayOStrings[returnIdx]) ; 
}

