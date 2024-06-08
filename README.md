# TypeScript Adventure Game

Introduction
Salman's Adventure is a CLI-based text adventure game written in TypeScript. In this game, the player battles an opponent of their choice. The player can choose to attack, drink an energy drink to restore health, or run away from the battle. The game continues until either the player or the opponent loses all their life points.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/salmans-adventure.git
cd salmans-adventure
Install dependencies:

bash
Copy code
npm install
Run the game:

bash
Copy code
npx ts-node game.ts
How to Play
Enter your name:
When prompted, enter your name.

Select your opponent:
Choose an opponent from the list (Alien, Lion, Zombie).

Choose your action:

Attack: Deal random damage to your opponent.
Energy Drink: Restore random life points to yourself.
Run: End the game.
Battle Mechanics:

If you choose to attack, your opponent's life decreases by a random value between 1 and 15.
If you take an energy drink, your life increases by a random value between 1 and 15.
If you run, the game ends.
After each of your actions, if the opponent's life is greater than 0, the opponent will attack you and your life will decrease by a random value between 1 and 15.
Winning and Losing:

You win the game if your opponent's life drops to 0.
You lose the game if your life drops to 0.
The game ends if you choose to run away.
