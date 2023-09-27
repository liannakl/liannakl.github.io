function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    //Displaying the Value on the page
    document.getElementById("display").innerHTML = "<br>" + inputVal ;

var driver = inputVal;

if (driver === 'Max Verstappen') {
console.log('Two time Formula 1 World Champion with Red Bull Racing');
document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/736x/29/a7/97/29a797972ea730a4ff4b26855e6afa3f.jpg'>";

}else if(season === 'winter'){
document.getElementById("drivers").innerHTML= "<img src='winter.jpg'>";
console.log('It\'s winter! Everything is covered in snow.');      
 } 
else if(season === 'fall'){
document.getElementById("drivers").innerHTML= "<img src='fall.jpg'>";
console.log('It\'s fall! Leaves are falling!');      
 } 
else if(season === 'summer'){
document.getElementById("drivers").innerHTML= "<img src='summer.jpg'>";
console.log('It\'s sunny and warm because it\'s summer!');      
 } 
else {
console.log('Invalid season.');
document.getElementById("drivers").innerHTML= "invalid season";

}
}

