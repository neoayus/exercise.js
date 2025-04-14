// Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
// Clicking on the button the font, font size, and color of the paragraph text will be changed.

let button = document.querySelector("#jsstyle") ; 
let text = document.querySelector("#text");

function changes(){
    text.style.color = 'red' ; 
    text.style.fontSize = '32px' ; 
    text.style.fontFamily = 'Dank Mono' ; 
}

button.addEventListener('click', changes) ; 