// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g 

// BRUTE FORCE : 
function allCombination(string){     
    for(var x=0; x<string.length; x++){
        for(var y=x; y<string.length; y++){
            var outputString = string.slice(x,y+1); // i forgot : the 'end' in .slice() function is exclusive.         
            console.log("\n : ",outputString) ;
        }
    }
}

// FINNESE : 
function finesse(string){
    // empty array to store individual character
    var array1 = [] ;
    // loop thru every character to store them in an array  
    for(var x=0, y=1; x<string.length; x++, y++){
        array1[x] = string.subString(x,y); 
    }
    
    // initialize an empty array to store all combination 
    var combination = [] ; 
    var temp = "" ; 

    // calculate the total number of combinations possible 
    var slent = Math.pow(2,array1.length) ;

    // generate all combination using bitwise operators 
    for (var i=0; i<slent; i++){
        temp = "" ; 
        for( var j=0 ; j<array1.length ; j++){
            if(i & Math.pow(2,j)){
                temp += array1[j] ; 
            }
           
        }
    }
}

// example 
allCombination('thisThatSlimeShit') ; // 
