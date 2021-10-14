const gamePoint = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
let winPlayerOne = 0;
let winPlayerTwo = 0
let playerOneHealth = 100;
let playerTwoHealth = 100;
let count1 = 0;
let count2 = 0;
let counter = 0;

const gamePlay = () => {
    let playerOnePoint = Math.floor(Math.random() * 5) + 1;
    let playerTwoPoint = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < 5; i++) {
        if (playerOnePoint > playerTwoPoint) {
            playerTwoHealth -= playerOnePoint;
            winPlayerOne = count1++;
        }else{
            playerOneHealth -= playerTwoPoint;
            winPlayerTwo = count2++;
        }
    }
    if (winPlayerOne > winPlayerTwo) {
        counter++;
        document.getElementById('playerOne').innerHTML = counter.toString();
        if (counter === 3 || counter === 5) {
            document.getElementById('pOne').innerHTML = 'Player One Has WON The Tournament';
        }

    } else {
        counter++;
        document.getElementById('playerTwo').innerHTML = counter.toString();
        if (counter === 3 || counter === 5) {
            document.getElementById('pTwo').innerHTML = 'Player Two Has WON The Tournament';
        }
    }
}
const reset = () =>{
    counter = 0;
    document.getElementById('pOne').innerHTML = '';
    document.getElementById('pTwo').innerHTML = '';
    document.getElementById('playerOne').innerHTML = '0';
    document.getElementById('playerTwo').innerHTML = '0';
}