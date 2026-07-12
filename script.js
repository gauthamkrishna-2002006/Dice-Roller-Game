const dice = document.getElementById("dice");
const result = document.getElementById("result");

function rollDice() {

    dice.style.transform = "rotate(720deg)";
    dice.style.opacity = "0.5";

    setTimeout(() => {

        const number = Math.floor(Math.random() * 6) + 1;

        dice.src = [
            "",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
            "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
        ][number];

        result.innerHTML = "🎉 You rolled <b>" + number + "</b>!";

        dice.style.transform = "rotate(0deg)";
        dice.style.opacity = "1";

    },700);

}
