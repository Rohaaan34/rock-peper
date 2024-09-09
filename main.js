
function getComputerChoice() {
  const choices = ['камень', 'ножницы', 'бумага'];
  return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
      return 'Ничья';
  }

  if (
      (playerSelection === 'камень' && computerSelection === 'ножницы') ||
      (playerSelection === 'ножницы' && computerSelection === 'бумага') ||
      (playerSelection === 'бумага' && computerSelection === 'камень')
  ) {
      return `Вы победили! ${playerSelection} побеждает ${computerSelection}`;
  } else {
      return `Вы проиграли! ${computerSelection} побеждает ${playerSelection}`;
  }
}


let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function updateScore() {
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
}


function handleClick(playerSelection) {
  if (roundCount >= 5) {
      return; 
  }

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  if (result.includes('победили')) {
      playerScore++;
  } else if (result.includes('проиграли')) {
      computerScore++;
  }

  document.getElementById('result').textContent = result;
  updateScore();

  roundCount++;

  if (roundCount === 5) {
      declareWinner();
  }
}


function declareWinner() {
  if (playerScore > computerScore) {
      document.getElementById('result').textContent = `Вы выиграли игру! Итоговый счет: ${playerScore} - ${computerScore}`;
  } else if (playerScore < computerScore) {
      document.getElementById('result').textContent = `Вы проиграли игру! Итоговый счет: ${playerScore} - ${computerScore}`;
  } else {
      document.getElementById('result').textContent = `Игра закончилась ничьей! Итоговый счет: ${playerScore} - ${computerScore}`;
  }

  
  disableButtons();
}




document.getElementById('rock').addEventListener('click', function() {
  handleClick('камень');
});

document.getElementById('scissors').addEventListener('click', function() {
  handleClick('ножницы');
});

document.getElementById('paper').addEventListener('click', function() {
  handleClick('бумага');
});
