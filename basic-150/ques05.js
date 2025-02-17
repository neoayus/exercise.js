function animate_string(id){
    // get the html element by it's id 
    var element = document.getElementById(id); 
    
    // access the text, node inside the element (assuming no other children)  
    var textNode = element.childNodes[0] ; 
    
    // extract the initial text content of the text node
    var text = textNode.data ; 
    
    // set up intervals to rotate the characters in the text every 100 miliseconds 
    setInterval(function(){
        // move the last character to the begining of the string
        text = text[text.length - 1] + text.substring(0, text.length - 1) ; 
        
        // update the text content of the text node with the modified string
        textNode.data = text; 
    }, 100); 

}

animate_string("slime") ;

// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  