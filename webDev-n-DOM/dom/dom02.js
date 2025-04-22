// Write a JavaScript function to get the values of First and Last names of the following form.

function getFormValue(){
    var x = document.getElementById("form1");
    // iterating thru each element of form : 
    for(var i=0 ; i < x.length ; i++){
        if(x.elements[i].value != 'Submit'){
            console.log(x.elements[i].value);
        }  
    }
}

