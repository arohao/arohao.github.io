let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

const moves = {
  rock: '✊',
  paper: '🖐️',
  scissors: '✌️'
}

document.querySelector(".score-js").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


function playGame(playerMove){
  const randomNumber = Math.random();
  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  switch (result){
    case 'You win.':
      score.wins++;
      break;
    case 'You lose.':
      score.losses++;
      break;  
    case 'Tie.':
      score.ties++;
      break;
  }

  document.querySelector(".result-js").innerHTML = result;
  document.querySelector(".moves-js").innerHTML = `You <span style="font-size: 50px">${moves[playerMove]} - ${moves[computerMove]} </span>Computer`;
  document.querySelector(".score-js").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  
  localStorage.setItem('score', JSON.stringify(score));
}