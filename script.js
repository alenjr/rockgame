const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const userChoiceSpan = document.getElementById('user-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const choices = ['Rock', 'Paper', 'Scissors'];

rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;

    if (userChoice === computerChoice) {
        resultText.textContent = "It's a draw!";
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        resultText.textContent = 'You win!';
    } else {
        resultText.textContent = 'You lose!';
    }
}