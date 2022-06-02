let grids = document.getElementsByClassName('col');
let currentTurn = 1;
let currentTurnText = document.getElementById('current-turn-text');
let gameOver = false;
const playerTicker = {
    1: 'X',
    2: 'O'
}

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const singleMove = (index) => {

    if (!gameOver && !grids[index].innerText) {
        grids[index].innerText = currentTurn === 1 ? playerTicker[1] : playerTicker[2];

        let winningPlayer = checkWinningStatus();
        if (winningPlayer != 'No Winner') {
            gameOver = true;
            currentTurnText.innerText = `Player ${winningPlayer} Won`;
            currentTurnText.style.backgroundColor = 'green';
            return;
        }
        currentTurn = currentTurn === 1 ? 2 : 1;
        currentTurnText.innerText = `Player ${currentTurn}'s turn`;
    }
}

const checkWinningStatus = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
        combination = winningCombinations[i];
        let value = grids[combination[0]].innerText;
        if (combination.every(index => grids[index].innerText && grids[index].innerText === value)) {
            addBorderStyle(combination);
            return value === 'X' ? 1 : 2;
        }
    }
    return 'No Winner';
}

const addBorderStyle = (indexArray) => {
    indexArray.forEach(index => grids[index].style.cssText = 'background-color: purple');
}