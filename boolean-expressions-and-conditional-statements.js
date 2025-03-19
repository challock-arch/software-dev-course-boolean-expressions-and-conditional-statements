/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = false;
const hasMap = false;
const hasMoney = true;
const moneyAvailable = 15;
const hasSword = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("\nYou safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("\nIt's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("\nYou find your way to the village. Along the way you find 15 credits.");
} else {
  console.log("\nYou get lost and wander aimlessly.\n\nGAME OVER");
}

if(choice === "village") {
  console.log("\nYou find yourself in a bustling square full of people.\nA post with two signs stands before you that reads 'market' pointing east or 'theater' pointing north.")
  const choiceTheaterOrMarket = readline.question(`Which way do you go? `)

  if (choiceTheaterOrMarket === "market") {
    console.log("You make your way towards the market.")
  } else if (choiceTheaterOrMarket === "theater" && hasMoney )  {
      console.log("You go to the theater and enjoy a lovely performance by a local troupe")
  } else {
      console.log("You don't have any money and wander aimlessly.\n\nGAME OVER")
  }

  if(choiceTheaterOrMarket === "market"){
    console.log("While at the market, you are looking at some daggers. One stands out to you and you ask the owner how much. The owner says 30 credits each.")
    const purchase = readline.question("Would you like to purchase? 'Y' or 'N'")
    if (purchase === 'Y' && moneyAvailable >= 30){
      console.log('\'Pleasure doing business with you!\'')
    } else if(purchase === 'N') {
      console.log('\'Are you sure? I could make it worth your while if you help me with something?\'')
    }
    else {
    console.log("You don't have the money to cover it. The owner tells you he's willing to make a deal if you help him with a task.")
    }

  let shopQuest = readline.question("Will you accept the shop owners task? Y or N\n")
  
    if (shopQuest === "Y"){
      console.log("The shop owner's wife is lost in the forest to the north of the village and he fears the worst. If you can bring her home to him, he will reward you with the weapons you desire and 50 credits.\n\nTime to begin your adventure!")
    } else {
      console.log("The owner looks down dejectedly and says, 'That's a shame. I thought you would be the kind of guy to help me.' You wander aimlessly away.\n\nGAME OVER")
    }
  }
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/