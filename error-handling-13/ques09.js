// Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI. 

function decodeURIString(URIString){
    try{
        // decode uri string 
        const decodedURI = decodeURI(URIString) ;

        // log the decoded uri into console
        console.log("Decoded URI :",decodedURI) ;
    }catch(error){
        if(error instanceof URIError){ // if the error is an URIError 
            console.log("URIError : ",error.message) ;
        }else{ // if it ain't an URI Error but a Simple error instead
            console.log('Error: ', error.message) ;
        }
    }
}

// example : 
// check with valid url :  
decodeURIString('https://example.com/') ; 

// check with invalid url :  
decodeURIString('https://example.com/%%invalidURL%%') ;
