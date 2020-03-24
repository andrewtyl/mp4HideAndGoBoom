//Returns true if the 1 wins, and false if the 3 win.

module.exports = function minigame() {
    const choices = ['a', 'b', 'x', 'y'];

    const player2 = choices[Math.floor(Math.random() * 4)];
    const player3 = choices[Math.floor(Math.random() * 4)];
    const player4 = choices[Math.floor(Math.random() * 4)];
    const threeteam = [player2, player3, player4];

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

    //console.log(threeteam)
    //console.log(safe)
    //console.log(player1Win);
    return player1Win

}