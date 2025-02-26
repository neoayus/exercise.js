// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string. 
// 

function parseJSON(jsonString){
    try{
        const parsedata = JSON.parse(jsonString) ; // parse the json string and store the parsed data 

        // logging parse data to console
        console.log("Parsed Data :", parsedata) ; 

    }catch(error){
        if(error instanceof SyntaxError){ // log if this is syntax error 
            console.log("Syntax Error : ", error.message) ; 
        }else{ // log if it ain't syntax error :3 
            console.log('Error : ', error.message) ; 
        }
    }
}

parseJSON('{"name": "Rowan Octave", "age": 30}'); // Valid JSON
parseJSON('{"name": "Rowan Octave", "age": 30,}'); // Invalid JSON