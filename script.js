let left = document.querySelector('.left');
let right = document.querySelector('.right');

let text = document.querySelector('.text');

let leftRight = document.querySelector('.leftRight');

let leftChoice = document.querySelector('.leftChoice');
leftChoice.style.display = "none";

let fight = document.querySelector('.fight')
fight.style.display = "none";

let punch = document.querySelector('.punch');
punch.style.display = "none";

let bed = document.querySelector('.bed');
bed.style.display = "none"

let texts = document.querySelector('.texts');
texts.style.display = "none";

let wolf = document.querySelector('.wolf');
wolf.style.display = "none";

let wolft = document.querySelector('.wolft');
wolft.style.display = "none";

let tree = document.querySelector('.tree');
tree.style.display = "none";

let rtree = document.querySelector('.rtree');
rtree.style.display = "none";

let ttree = document.querySelector('.ttree');
ttree.style.display = "none";

let beatw = document.querySelector('.beatw');
beatw.style.display = "none"

let scratch = document.querySelector('.scratch');
scratch.style.display = "none";

let scratcht = document.querySelector('.scratcht');
scratcht.style.display = "none";

let run = document.querySelector('.run');
run.style.display = "none";

let tired = document.querySelector('.tired');
tired.style.display = "none";

let fellt = document.querySelector('.fellt');
fellt.style.display = "none";

let fell = document.querySelector('.fell');
fell.style.display = "none";

let bed2 = document.querySelector('.bed2');
bed2.style.display = "none";

let kick = document.querySelector('.kick');
kick.style.display = "none";

let help = document.querySelector('.help');
help.style.display = "none";

let helpt = document.querySelector('.helpt');
helpt.style.display = "none";

let food = document.querySelector('.food');
food.style.display = "none";

let sleeping = document.querySelector('.sleeping');
sleeping.style.display = "none";

let wakeup = document.querySelector('.wakeup');
wakeup.style.display = "none";

let sleepe = document.querySelector('.sleepe');
sleepe.style.display = "none";

let sleepzzz = document.querySelector('.sleepzzz');
sleepzzz.style.display = "none";

let sleepzzzt = document.querySelector('.sleepzzzt');
sleepzzzt.style.display = "none";

let brof = document.querySelector('.brof');
brof.style.display = "none";

let broft = document.querySelector('.broft');
broft.style.display = "none";

let ready = document.querySelector('.ready');
ready.style.display = "none";

let readyt = document.querySelector('.readyt');
readyt.style.display = "none";

let loseb = document.querySelector('.loseb');
loseb.style.display = "none";

let lose = document.querySelector('.lose');
lose.style.display = "none";

let looset = document.querySelector('.looset');
looset.style.display = "none";

let thumb = document.querySelector('.thumb');
thumb.style.display = "none";

let bleed = document.querySelector('.bleed');
bleed.style.display = "none";

let bleedt = document.querySelector('.bleedt');
bleedt.style.display = "none";

let fa = document.querySelector('.fa');
fa.style.display = "none";

let sleepwatch = document.querySelector('.sleepwatch');
sleepwatch.style.display = "none";

let wakeupt = document.querySelector('.wakeupt');
wakeupt.style.display = "none";

let befriend = document.querySelector('.befriend');
befriend.style.display = "none";

let bta = document.querySelector('.bta');
bta.style.display = "none";

let friend = document.querySelector('.friend');
friend.style.display = "none";

let friendt = document.querySelector('.friendt');
friendt.style.display = "none";

let bleedfight = document.querySelector('.bleedfight');
bleedfight.style.display = "none";

befriend.addEventListener("click", function(){
console.log("you made a new friend")
befriend.style.display = "none"
bta.style.display = "none"
wakeup.style.display = "none"
wakeupt.style.display = "none"
sleepwatch.style.display = "none"
friend.style.display = "block"
friendt.style.display = "block"
});

bta.addEventListener("click", function(){
console.log("you fought the stranger")
bta.style.display = "none";
befriend.style.display = "none";
wakeup.style.display = "none";
wakeupt.style.display = "none";
bta.style.display = "none";
sleepwatch.style.display = "none";
bleed.style.display = "block";
bta.style.display = "none";
bleedfight.style.display = "block";
});
food.addEventListener("mouseenter", function() {
console.log("you scavanged for food")
help.style.display = "none"
helpt.style.display = "none"
food.style.display = "none"
ready.style.display = "block"
readyt.style.display = "block"
});

left.addEventListener('click', function(){
console.log("you chose left");
run.style.display = "block";
left.style.display = "none";
right.style.display = "none";
leftRight.style.display = "none";
leftChoice.style.display = "block";
text.innerHTML = "choose to double click or search";
});

run.addEventListener("mouseenter", function() {
console.log("you started running left");
run.style.display = "none";
wakeup.style.display = "block";
leftChoice.style.display = "none";
run.style.display = "none";
text.style.display = "none";
bed.style.display = "block";
tired.style.display = "block";
});

bed.addEventListener('dblclick', function(){
console.log("you fell out the bed");
wakeup.style.display = "none";
bed.style.display = "none";
tired.style.display = "none";
fellt.style.display = "block";
fell.style.display = "block";
sleepe.style.display = "block";
fa.style.display = "block";
});

fa.addEventListener('click', function(){
console.log("you healed your hand")
fa.style.display = "none";
sleepe.style.display = "none";
fell.style.display = "none";
fellt.style.display = "none";
ready.style.display = "block";
readyt.style.display = "block";
});

wakeup.addEventListener('click', function(){
console.log("you woke up")
wakeup.style.display = "none";
run.style.display = "none";
bed.style.display = "none";
tired.style.display = "none";
sleepwatch.style.display = "block";
wakeupt.style.display = "block";
befriend.style.display = "block";
bta.style.display = "block";
});

sleepe.addEventListener("mouseenter", function() {
console.log("you found the mystery and went to sleep");
sleepe.style.display = "none";
fell.style.display = "none";
fellt.style.display = "none";
sleepzzz.style.display = "block";
sleepzzzt.style.display = "block";
fa.style.display = "none";
});
    

leftChoice.addEventListener('dblclick', function(){
console.log("you kept left");
leftChoice.style.display = "none";
text.style.display = "block";
fight.style.display = "block";
text.innerHTML = "YOU GOT INTO A FIGHT. PRESS PUNCH TO PUNCH"
punch.style.display = "block";
kick.style.display = "block";
run.style.display = "none";
});

kick.addEventListener('click', function(){
console.log("you kicked and lost the fight");
kick.style.display = "none";
punch.style.display = "none";
fight.style.display = "none";
help.style.display = "block";
helpt.style.display = "block";
text.style.display = "none";
food.style.display = "block";
});

help.addEventListener('dblclick', function(){
console.log("you healed yourself")
help.style.display = "none";
helpt.style.display = "none";
food.style.display = "none";
bleed.style.display = "block";
bleedt.style.display = "block";
});
punch.addEventListener('click', function(){
console.log("you punched and won the fight");
loseb.style.display = "block";
kick.style.display = "none";
text.style.display = "none";
punch.style.display = "none";
fight.style.display = "none";
brof.style.display = "block";
broft.style.display = "block";
thumb.style.display = "block"
});

loseb.addEventListener('click', function(){
console.log("you lost everything and your life is over")
lose.style.display = "block";
looset.style.display = "block";
loseb.style.display = "none";
thumb.style.display = "none";
brof.style.display = "none";
broft.style.display = "none";
ready.style.display = "none";
});

thumb.addEventListener("mouseenter", function() {
console.log("you still lose")
thumb.style.display = "none";
thumb.style.display = "none";
brof.style.display = "none";
loseb.style.display = "none";
broft.style.display = "none";
lose.style.display = "block";
looset.style.display = "block";
});

right.addEventListener('click', function(){
console.log("you chose right");
leftRight.style.display = "none";
text.style.display = "none";
left.style.display = "none";
right.style.display = "none";
wolf.style.display = "block";
wolft.style.display = "block";
tree.style.display = "block";
beatw.style.display = "block";
});

beatw.addEventListener('click', function(){
console.log("you punched the wolf");
beatw.style.display = "none";
wolf.style.display = "none";
wolft.style.display = "none";
tree.style.display = "none";
scratch.style.display = "block";
scratcht.style.display = "block";
});

tree.addEventListener("mouseenter", function() {
console.log("climbed the tree");
beatw.style.display = "none";
wolf.style.display = "none";
wolft.style.display = "none";
tree.style.display = "none";
rtree.style.display = "block";
ttree.style.display = "block";
});