// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// BRUTE FORCE : 
function checkPallindrome(string){
    var reverseString = string.split("").reverse().join("") ;  // reverse the string 
    // check if it's pallindrome 
    if( string === reverseString)
        return true ; 
    else    
        return false ; 
}

// FINESSE 
function check_pallindrome(string){
    // Change the string into lower case and remove  all non-alphanumeric characters
    var changedString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'') ; // this regex will take all the occurence of smthn which isn't [^a-zA-Z0-9] and replace it with '' globally. 
    var char_count = 0 ; // count the number of characters in da string. 

    // chekc if string is empty or not ? 
    if(changedString === ""){
        console.log("Nothing Found!") ;
        return false ;  
    }
    
    // check if lengh of string is even or odd 
    if((changedString.length) % 2 === 0 ){
        char_count = (changedString.length)/2 ; 
    }else{
        // if lengh is '1' it's pallindrome already 
        if(changedString.length === 1){
            console.log("Entry is Pallindrom!") ;
            return true ; 
        }else{
            // if the length of string is odd, ignore middle character 
            Ccount = (changedString.length - 1) / 2 ; 
        }
    }

    // loop thru and check the first character to the last character 
    for(var x = 0 ; x < char_count ; x++){
        if(changedString[x] != changedString.slice(-1-x)[0]){
                            // what are we doing here is compare first and last index and as we come close to mid
            console.log("Entry isn't a pallindrome.") ; 
            return false ; 
        }
    }
    
    console.log("The Entry is Pallindrom !") ;
    return true ; 
}

