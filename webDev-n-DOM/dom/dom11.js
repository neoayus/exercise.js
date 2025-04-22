// Write a JavaScript program to display a random image (clicking on a button) from the following list.

// Sample Image information :
// "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
// "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"


// BRUTE FORCE!!
var src01 = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
var src02 = "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
var src03 = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";

var button = document.getElementsByTagName('button')[0] ; 

button.addEventListener('click', ()=>{
    var rNum = Math.floor(Math.random()*3)+1 ;  // random Number bw 1-3 
    var img = document.getElementsByTagName('img')[0] ; 

    if(rNum == 1){
        img.setAttribute("src", src01) ;
    }else if(rNum == 2){
        img.setAttribute("src", src02) ;
    }else{
        img.setAttribute("src", src03) ;
    }
})

// FINESSE !! 
function displayRandomImage(){
    // array of images 
    var images = [
        {src : "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"},
        {src : "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"},
        {src : "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"}
    ]
    
    // pre buffer array to hold images 
    var preBuffer = [] ; 
    for( var i = 0 ; i < images.length ; i++){
        preBuffer[i] = new Image() ; 
        preBuffer[i].src = images[i].src ; 
        preBuffer[i].width = images[i].width ; 
        preBuffer[i].length = images[i].length ; 
    }

    // generate random integer 
    var rNum = Math.floor(Math.random()*3)+1 ;  // random Number bw 1-3 

    var newImage = preBuffer[rNum] ; 

    // removing any previous image 
    var image = document.getElementsByTagName('img') ; 
    var l = image.length ; 
    for(var x=0 ; x<l ; x++){
        image(0).parentNode.removeChild(image[0]); 
    }
    
    // displaying new image : 
    document.body.appendChild(newImage) ; 
}
