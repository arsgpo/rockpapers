function computerPlay(){
    const compSelection = ["rock", "paper", "scissors"];
    let selection = compSelection[Math.floor(Math.random()*(compSelection.length))];
    return selection;
  }
  
  function playerPlay(){
  const choice = prompt("pick rock, paper, or scissors ");
  return choice;
  }
  
  function playRound(playerSelection, computerSelection){
    alert("you picked " + playerSelection);
    alert ("computer picks " + computerSelection);
  if ((computerSelection === playerSelection)){
    alert("tie,try again!");
  } else if ((computerSelection === "rock") && (playerSelection === "paper")){
  alert("you win paper beats rock");
  } else if ((computerSelection === "rock") && (playerSelection === "scissors")){
  alert("you lose rock beats beats scissors");
  } else if ((computerSelection === "scissors") && (playerSelection === "rock")){
  alert("you win rock beats scissors");
  } else if ((computerSelection === "scissors") && (playerSelection === "paper")){
  alert("you lose scissors beats paper");
  } else if ((computerSelection === "paper") && (playerSelection === "scissors")){
  alert("you win paper beats scissors");
  } else if ((computerSelection === "paper") && (playerSelection === "rock")){
  alert("you lose paper beats rock");
  }else alert("please pick rock paper or scissors");
  }
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  