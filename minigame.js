//Returns true if the solo player wins, and false if the team of 3 players win.
'use strict';

module.exports = function minigame() {
    const choices = ['a', 'b', 'x', 'y'];
    //Each player from the team of 3 picks a random cannon to hide in. Multiple players may hide in the same cannon.
    const player2 = choices[Math.floor(Math.random() * 4)];
    const player3 = choices[Math.floor(Math.random() * 4)];
    const player4 = choices[Math.floor(Math.random() * 4)];
    const threeteam = [player2, player3, player4];
    //Player 1 picks 3 unique cannons to light a fuse to.
    let player1choices = choices;
    let player1first = player1choices[Math.floor(Math.random() * 4)];
    let newPlayer1Choices = [];
    for (let i = 0; i < player1choices.length; i++) {
        if (player1first !== player1choices[i]) {
            newPlayer1Choices.push(player1choices[i])
        }
    }
    player1choices = newPlayer1Choices;
    let player1second = player1choices[Math.floor(Math.random() * 3)];
    newPlayer1Choices = [];
    for (let i = 0; i < player1choices.length; i++) {
        if (player1second !== player1choices[i]) {
            newPlayer1Choices.push(player1choices[i])
        }
    }
    player1choices = newPlayer1Choices;
    let player1third = player1choices[Math.floor(Math.random())];
    //If a single player from the team of 3 is hiding in the unpicked cannon, the team of three wins. Otherwise, the solo player wins.
    let safe = '';
    if (player1third === player1choices[0]) {
        safe = player1choices[1]
    }
    else {
        safe = player1choices[0]
    }

    let player1Win = true;
    for (let i = 0; i < threeteam.length; i++) {
        if (threeteam[i] === safe) {
            player1Win = false;
            i = threeteam.length
        }
    }

    //These console.logs are commented out at the end due to the nature of simulating the minigame thousands of times per second. But if you are only running a single simulation and want to see how the minigame played out, uncomment them temporarily.
    /*
    console.log(`Player 2 hid in the ${player2} cannon.`)
    console.log(`Player 3 hid in the ${player3} cannon.`)
    console.log(`Player 4 hid in the ${player4} cannon.`)
    console.log(`Player 1 lit all the canons' fuses except for the ${safe} canon.`)
    if (player1Win) {
        console.log("Player 1 wins!")
    }
    else {
        console.log("Players 2, 3, and 4 win!")
    }
    */

    return player1Win

}