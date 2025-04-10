// uWrite a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : :5

function check(string){
    var vowelCount = 0 ; 
    var modString = string.toLowerCase() ; 

    for(var x=0; x < modString.length; x++){
        if(modString[x] == 'a' || modString[x] == 'e' || modString[x] == 'i' || modString[x] == 'o' || modString[x] == 'u'){
            vowelCount++ ;  
        }           
    } 
    return vowelCount ; 
}

var stringg = "The quick brown fox"
console.log(check(stringg));