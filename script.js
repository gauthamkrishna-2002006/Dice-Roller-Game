function rollDice(){

const number=Math.floor(Math.random()*6)+1;

document.getElementById("dice").src=
"https://upload.wikimedia.org/wikipedia/commons/"+[
"",
"1/1b/Dice-1-b.svg",
"5/5f/Dice-2-b.svg",
"b/b1/Dice-3-b.svg",
"f/fd/Dice-4-b.svg",
"0/08/Dice-5-b.svg",
"2/26/Dice-6-b.svg"
][number];

document.getElementById("result").innerHTML="You rolled <b>"+number+"</b>";

}
