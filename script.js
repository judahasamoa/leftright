let left = document.querySelector('.left');
let right = document.querySelector('.right');

let text = document.querySelector('.text');

let leftRight = document.querySelector('.leftRight');

let leftChoice = document.querySelector('.leftChoice');
leftChoice.style.display = "none";

let fight = document.querySelector('.fight')
fight.style.display = "none";

left.addEventListener('click', function(){
console.log("you chose left");
left.style.display = "none";
right.style.display = "none";
leftRight.style.display = "none";
leftChoice.style.display = "block"
text.innerHTML = "choose to click or search";
});

leftChoice.addEventListener('dblclick', function(){
console.log("you kept left");
leftChoice.style.display = "none";
text.style.display = "none";
fight.style.display = "block";
});