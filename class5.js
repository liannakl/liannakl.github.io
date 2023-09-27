function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    //Displaying the Value on the page
    document.getElementById("display").innerHTML = "<br>" + inputVal ;

var driver = inputVal;

if (driver === 'Max Verstappen') {
console.log('He looks like Sid from Ice Age.');
document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/736x/29/a7/97/29a797972ea730a4ff4b26855e6afa3f.jpg'>";

}else if(driver === 'Sergio Perez'){
document.getElementById("drivers").innerHTML= "<img src='https://i.ytimg.com/vi/5kSDh4j6AzM/maxresdefault.jpg'>";
console.log('We call him Checo.');      
 } 
else if(driver === 'Charles Leclerc'){
document.getElementById("drivers").innerHTML= "<img src='https://64.media.tumblr.com/dcc0d297cb42dc4b375a0257a9a47579/1cc2ce946c406dee-eb/s640x960/d0f4c4c7f28802924d681cffefb7591a482ca0f0.png'>";
console.log('OMG I&apos;ve never looked so good.');      
 } 
else if(driver === 'summer'){
document.getElementById("drivers").innerHTML= "<img src='summer.jpg'>";
console.log('It\'s sunny and warm because it\'s summer!');      
 } 
else {
console.log('Invalid season.');
document.getElementById("drivers").innerHTML= "invalid season";

}
}

