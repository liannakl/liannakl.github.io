function getInputValue()driversseasonal{
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    //Displaying the Value on the page
    document.getElementById("display").innerHTML = "<br>" + inputVal ;

var driver = inputVal;

if (driver === 'Max Verstappen') {
console.log('Two time Formula 1 World Champion with Red Bull Racing');
document.getElementById("drivers").innerHTML= "<img src='https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1677069646195.jpg'>";

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

