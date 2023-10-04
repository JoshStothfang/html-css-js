let winCounter = 0;
let loseCounter = 0;

class Game {
    constructor() {
        this.rolls = [];
        this.result = "";
    }
}

let games = [];

const Craps = () => {
    
    let game = new Game();

    let total = DiceRoll();
    let label = `${total}`;
    game.rolls.push(total);

    if (total === 7 || total === 11) {
        game.result = "Win";
        winCounter++;
    }
    else if (total === 2 || total === 3 || total === 12) {
        game.result = "Lose";
        loseCounter++;
    }
    else {
        let point = total;
        while (game.result === "") {
            total = DiceRoll();
            label += `, ${total}`;
            game.rolls.push(total);
            if (total === point) {
                game.result = "Win";
                winCounter++;
            }
            else if (total === 7) {
                game.result = "Lose";
                loseCounter++;
            }
        }
    }
    games.push(game);
    document.getElementById("crapsLabel").innerText = `${label} ${game.result} | ${winCounter} Wins, ${loseCounter} Loses`;
}

const DiceRoll = () => {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}