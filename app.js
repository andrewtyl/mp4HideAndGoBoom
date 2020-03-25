const minigame = require('./minigame')

function simulate(x) {
    console.log('Program has started...please wait...')
    let player1WinCount = 0;
    let threeTeamWinCount = 0;
    for (let i = 0; i < x; i++) {
        let res = minigame();
        if (res) {
            player1WinCount++
        }
        else {
            threeTeamWinCount++
        }
    }
    console.log(`Player 1 won ${player1WinCount} time(s) out of ${x} games. That's a ${((player1WinCount / x) * 100).toPrecision(4)}% winrate!`);
    console.log(`The team of 3 won ${threeTeamWinCount} time(s) out of ${x} games. That's a ${((threeTeamWinCount / x) * 100).toPrecision(4)}% winrate!`);
}

//Adjust this value for how many simulations of the minigame you want to run
simulate(4000000)