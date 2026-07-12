function rollDice() {
    const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

    const number = Math.floor(Math.random() * 6);

    document.getElementById("dice").textContent = diceFaces[number];

    document.getElementById("result").textContent =
        "You rolled a " + (number + 1) + "!";
}
