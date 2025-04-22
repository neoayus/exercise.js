// Here is a sample HTML file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

// function getAttributes(){
//     var para = document.querySelector("#w3r");

//     var u = para.href; 
//     console.log("href : ", u);

//     var v = para.hreflang ; 
//     console.log("hreflang : ", v);
    
//     var w = para.rel ; 
//     console.log("rel : ", w);

//     var x = para.target ; 
//     console.log("target : ", x);

//     var y = para.type ; 
//     console.log("type : ", y);

// }

// we trynna finesse 

function getAttributes(){
    var para = document.querySelector("#w3r");
    let l = para.attributes.length ; 
    for(var x = 0 ; x < l ; x++){
        console.log( para.attributes[x]) ; 
    }     
}
