// (1)first select the colors and put them in an array
let colors=['pink','blue','orange','brown','yellow','green','red','plum','gray'];


// (2)Select the container(h2 specifically) and button 
let simpleColor= document.querySelector('.color')
let button=document.getElementById('btn')


//(3) Randomizer by adding an eventListnener
button.addEventListener('click', function(){
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
document.body.style.backgroundColor= randomColor;
simpleColor.textContent=randomColor;
});


