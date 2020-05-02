let humanScore=0, computerScore=0;
let currentRoundNumber=1;
const generateTarget=()=>{return(Math.round(9*Math.random()))};
const compareGuesses=(player,computer,random)=>{return(Math.abs(random-computer)<Math.abs(random-player))?false:true};
const updateScore=winner=>{winner==="human"?humanScore++:computerScore++};
const advanceRound=()=>{currentRoundNumber++};
