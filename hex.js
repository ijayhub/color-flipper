//(1) first select the hexcolors and put them in an array
let hexColors=['#F1F5F8','#A32CC4','#FFFFOO','#A9A9A9','#4169E1', '#9E7BB5','#290916', '#BE93D4'];

// (2)Select the container(h2 specifically) and button
let hexColor= document.querySelector('.color')
let button=document.getElementById('btn')


//(3) Randomizer by adding an eventlistnener
button.addEventListener('click', function(){
    let randomColor = hexColors[Math.floor(Math.random()*hexColors.length)];
document.body.style.backgroundColor= randomColor;
hexColor.textContent=randomColor;
});
 
