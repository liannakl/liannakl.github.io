function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    //Displaying the Value on the page
    document.getElementById("display").innerHTML = "<br>" + inputVal ;

var driver = inputVal;

//1 red bull
if (driver === 'Max Verstappen') {
console.log('He looks like Sid from Ice Age.');
document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/736x/29/a7/97/29a797972ea730a4ff4b26855e6afa3f.jpg'>";

//2 red bull
}else if(driver === 'Sergio Perez'){
document.getElementById("drivers").innerHTML= "<img src='https://i.ytimg.com/vi/5kSDh4j6AzM/maxresdefault.jpg'>";
console.log('We call him Checo.');      
 } 

//3 ferrari
else if(driver === 'Charles Leclerc'){
document.getElementById("drivers").innerHTML= "<img src='https://64.media.tumblr.com/dcc0d297cb42dc4b375a0257a9a47579/1cc2ce946c406dee-eb/s640x960/d0f4c4c7f28802924d681cffefb7591a482ca0f0.png'>";
console.log('Lord Perceval');      
 } 

 //4 ferrari
else if(driver === 'Carlos Sainz'){
document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/736x/f2/1d/4b/f21d4b9e5cbf8b7a47ccb9e474695595.jpg'>";
console.log('Smooth Operator');      
 } 
 
//5 mercedes
else if(driver === 'Lewis Hamilton'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/564x/a8/16/ca/a816ca94a19644332e026eeeee5420b6.jpg'>";
    console.log('GOAT');      
 }

 //6 mercedes
 else if(driver === 'George Russell'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/564x/cf/93/71/cf9371d785c9ea5410fec5fd9b845b00.jpg'>";
    console.log('From his Williams days but its ok');      
 }

 //7 aston martin
 else if(driver === 'Fernando Alonso'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/564x/52/2e/f1/522ef1c1f46ff9898788d16646c9c8e0.jpg'>";
    console.log('Oldest on the grid');      
 }

 //8 aston martin
 else if(driver === 'Lance Stroll'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/564x/c3/16/35/c316357aa97ee49f14b1a7c7b577c15a.jpg'>";
    console.log('His face is punchable');      
 }

 //9 haas
 else if(driver === 'Nico Hulkenberg'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/564x/89/0a/62/890a629887f9eceb40ecd436fae445d0.jpg'>";
    console.log('Nico Huuuuuulkenbehrg');      
 }

 //10 haas
 else if(driver === 'Kevin Magnussen'){
    document.getElementById("drivers").innerHTML= "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLrT7oSRGktDMVzq_1CFgHvvEmDfoH_M_uw&usqp=CAU'>";
    console.log('He literally has no bad pics');      
 }

 //11 alphatauri
 else if(driver === 'Daniel Ricciardo'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/564x/a5/8a/22/a58a22bed35c7cc4413f1159ba68133b.jpg'>";
    console.log('Has an infectious smile');      
 }

 //12 alphatauri
 else if(driver === 'Yuki Tsunoda'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/736x/0e/24/db/0e24dbe8da9c0f035c9c4675fd5ff3f1.jpg'>";
    console.log('Shortest on the grid');      
 }

 //13 alfaromeo
else if(driver === 'Valtteri Bottas'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/736x/ce/78/e2/ce78e2d34675782b25860df5db767db6.jpg'>";
    console.log('VaTTeri bOTTAs');      
 }

 //14 alfaromeo
 else if(driver === 'Zhou Guanyu'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.redd.it/njpex7nhpxg61.jpg'>";
    console.log('First Chinese F1 driver!');      
 }

 //15 williams
else if(driver === 'Alex Albon'){
    document.getElementById("drivers").innerHTML= "<img src='https://ih1.redbubble.net/image.2505556175.8672/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg'>";
    console.log('Alobono');      
 }

 //16 williams
 else if(driver === 'Logan Sargeant'){
    document.getElementById("drivers").innerHTML= "<img src='https://pbs.twimg.com/media/F4di4pDXwAAO2lb.png'>";
    console.log('What is a kilometer?');      
 }

 //17 mclaren
 else if(driver === 'Lando Norris'){
    document.getElementById("drivers").innerHTML= "<img src='https://ichef.bbci.co.uk/images/ic/1232x1232/p07gr5gp.jpg'>";
    console.log('Creator of the papaya army');      
 }

 //18 mclaren
 else if(driver === 'Oscar Piastri'){
    document.getElementById("drivers").innerHTML= "<img src='https://s.yimg.com/ny/api/res/1.2/jmK5adSZ3P5zsRYn4A6zqQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMzNg--/https://media.zenfs.com/en/planetf1_360/45c1d14fb594048d2cf5731693c7bbed'>";
    console.log('First podium in Japan!');      
 }

 //19 alpine
 else if(driver === 'Pierre Gasly'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/474x/3d/05/03/3d050329a14a9eee4dc505eeaedd8a74.jpg'>";
    console.log('Tripod');      
 }

 //20 alpine
 else if(driver === 'Esteban Ocon'){
    document.getElementById("drivers").innerHTML= "<img src='https://i.pinimg.com/564x/0d/42/63/0d4263eac7a01d13e81e6e43755dc2f9.jpg'>";
    console.log('Estie Bestie');      
 }
else {
console.log('Invalid driver.');
document.getElementById("drivers").innerHTML= "not a driver.";

}
}

