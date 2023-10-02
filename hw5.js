function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    //Displaying the Value on the page
    document.getElementById("display").innerHTML = "<br>" + inputVal ;

var color = inputVal;

//blue
if (color === 'blue') {
console.log('Blue like the ocean');
document.getElementById("square").innerHTML= "<div style='background-color: blue; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";

//red
}else if(color === 'red'){
document.getElementById("square").innerHTML= "<div style='background-color: red; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Red like fire.');      
 
//black
}else if(color === 'black'){
document.getElementById("square").innerHTML= "<div style='background-color: black; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Black like the dark of night.'); 

//silver
}else if(color === 'silver'){
document.getElementById("square").innerHTML= "<div style='background-color: silver; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Shiny grey.'); 

//gray
}else if(color === 'gray' || color === 'grey'){
document.getElementById("square").innerHTML= "<div style='background-color: gray; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('True grey.');

//maroon
}else if(color === 'maroon'){
document.getElementById("square").innerHTML= "<div style='background-color: maroon; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Dark red.');

//purple
}else if(color === 'purple'){
document.getElementById("square").innerHTML= "<div style='background-color: purple; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Like grapes.');

//fuchsia
}else if(color === 'fuchsia'){
document.getElementById("square").innerHTML= "<div style='background-color: fuchsia; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Almost Barbie pink.');

//green
}else if(color === 'green'){
document.getElementById("square").innerHTML= "<div style='background-color: green; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Have you touched grass?');

//lime
}else if(color === 'lime'){
document.getElementById("square").innerHTML= "<div style='background-color: lime; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Looks like neon green.');

//olive
}else if(color === 'olive'){
document.getElementById("square").innerHTML= "<div style='background-color: olive; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('A weird dark green with yellow undertones.');

//yellow
}else if(color === 'yellow'){
document.getElementById("square").innerHTML= "<div style='background-color: yellow; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('Does it bring you joy?');

//navy
}else if(color === 'navy'){
document.getElementById("square").innerHTML= "<div style='background-color: navy; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('A nice deep blue.');

//teal
}else if(color === 'teal'){
document.getElementById("square").innerHTML= "<div style='background-color: teal; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('A dark turquoise.');

//aqua
}else if(color === 'aqua'){
document.getElementById("square").innerHTML= "<div style='background-color: aqua; width: 500px; height: 500px; margin: auto;'><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>";
console.log('A neon blue.');}     
 
//other
else {
    console.log('That color has not been added yet.')
}

 } 