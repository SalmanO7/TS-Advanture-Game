#! /usr/bin/env node
import inquirer from 'inquirer';

console.log(`\n Welcome to Salman's Advanture! \n`)
class Player {
    name: string;
    life: number;

    constructor(name: string) {
        this.name = name;
        this.life = 100;
    }
}

class Opponent {
    name: string;
    life: number;

    constructor(name: string) {
        this.name = name;
        this.life = 100;
    }
}

const userName = await inquirer.prompt({
    name: "playerName",
    type: "input",
    message: "What's Your Name?",
});
if (userName.playerName == undefined || userName.playerName.length == 0) {
    console.log(`\n First Enter Your Name! \n`);
}
else {
    const oponentSelect = await inquirer.prompt({
        name: "playerOponent",
        message: "Select Your Enemy..",
        type: "list",
        choices: ["Alien", "Lion", "Zombie"],
    });

    const player: Player = new Player(userName.playerName);
    const oponent: Opponent = new Opponent(oponentSelect.playerOponent);

    do {
        let question = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Energy Drink", "Run"],
        });

        if (question.option === "Attack") {
            let damage = Math.floor(Math.random() * 15) + 1;
            oponent.life -= damage;
            console.log(`\nYou attacked ${damage} damage!`);
            console.log(`Opponent's life: ${oponent.life}`);
        } else if (question.option === "Energy Drink") {
            let heal = Math.floor(Math.random() * 15) + 1;
            player.life += heal;
            console.log(`\nYou takken an energy drink and restored ${heal} life!`);
            console.log(`Your life: ${player.life}`);
        } else if (question.option === "Run") {
            console.log("You decided to run away!");
            break;
        }

        if (oponent.life > 0) {
            let damage = Math.floor(Math.random() * 15) + 1;
            player.life -= damage;
            console.log(`Opponent attacked You ${damage} damage!`);
            console.log(`Your life: ${player.life}`);
        }

        else if (player.life <= 0) {
            console.log(`\n You Lose Try Again Best of Luck for Next time! : ${userName.playerName}`);
            break;
        }

        else if (oponent.life <= 0) {
            console.log(`\n You Win! Congtratulation : ${userName.playerName}` );
            break;
        }
    } while (player.life > 0 && oponent.life > 0);

}
