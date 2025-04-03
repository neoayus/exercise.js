// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
 
// HARD WAY :  Brute Force 
function reverse(number){ // let the no be 132
    let digits = String(number).length ; // find the no. of digits in the number 
    var exponential = digits-1 ;  // did this for the logic to keep count of place value | remove this and replace 'exponential' in loop with 'digits' 
    var pallindrome = 0 ; 
    while( number > 0){
        var lastDigit = Math.floor(number%10) ; // extract the last digit 
        pallindrome += lastDigit * Math.pow(10,exponential) ; //  
        exponential-- ;  // decrement exponential as the the place value decreases with digits increasing 
        number/=10 ; // remove the last digit of the original number. 
    }
    return pallindrome ; // return the reversed number 
}

// EASY WAY : 
function reverseANumber(n){
    // convert the number to the String. 
    n = n + "" ; // implicitly change the type of n to String
    return n.split("").reverse().join("") ;  // split the string into an array of characters, reverse the array and then join the array of characters back into a Sring. 
}

let num = 32243 ; 
let reversenum = reverse(num) ;
console.log("Number is : ",num, "\n Pallindrome is : ", reversenum) ; 


// faults 
// + din't pay attention on 'where to initalize' values ; 
// + forgot to use Math.floor() to round off the divided values 