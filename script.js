
let scorePlayer= document.getElementById('player-score');
let handsVS= document.getElementById('hands');
let result=document.getElementById('result');
let endGameBtn=document.getElementById('endGameButton');

function getComputerChoice() {
  let arrayRPS=['Rock','Paper','Scissors'];
  let randomNum= Math.floor(Math.random()*3);
  return arrayRPS[randomNum];
}


function getResult(playerChoice, computerChoice) {

  let score=0;
  if(playerChoice=='Rock'&&computerChoice=='Paper'){
    score--;
  }else if(playerChoice=='Rock'&&computerChoice=='Scissors'){
    score++;
  }else if(playerChoice=='Scissors'&&computerChoice=='Rock'){
    score--;
  }else if(playerChoice=='Scissors'&&computerChoice=='Paper'){
    score++;
  }else if(playerChoice=='Paper'&&computerChoice=='Rock'){
    score++;
  }else if(playerChoice=='Paper'&&computerChoice=='Scissors'){
    score--;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {

  let scoreAux=Number(scorePlayer.innerText);

  if(score==1){
    result.innerText='You Win!'
  }else if(score==-1){
    result.innerText='You Lose!'
  }else{
    result.innerText="It's a Draw!";
  }
  score+= scoreAux;
  handsVS.innerText=`👱 ${playerChoice}
     vs  🤖 ${computerChoice}`
  scorePlayer.innerText=score;
}

function playGame() {

let optionsBtnRPS = document.querySelectorAll('.rpsButton');

  optionsBtnRPS.forEach(rps=>{
    rps.onclick=()=>{
      let IAChoice = getComputerChoice();
      let score = getResult(rps.value,IAChoice);
      showResult(score,rps.value,IAChoice);
      
    }
  })
 endGameBtn.onclick=()=>endGame();
  
}


function endGame() {
 scorePlayer.innerText= '';
 handsVS.innerText= '';
 result.innerText='';
    
 
}

playGame();
