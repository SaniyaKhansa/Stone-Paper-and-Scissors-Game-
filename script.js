let compScore = 0;
let userScore = 0;
const actions = document.querySelectorAll(".action");
const msg= document.querySelector("#msg");
const youScore= document.querySelector("#you-score");
const compScorep=document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];

}
const drawGame = () => {
    console.log("game was draw");
    msg.innerText="Game was Draw ,Play Again!! "
    msg.style.backgroundColor="black";
}
const showWinner =(userWin, compAction, userAction) => {
    if(userWin){
        userScore++;
        youScore.innerText=userScore;
        msg.innerText=" You Win!!";
        msg.style.backgroundColor="green";
    }
    else{

        compScore++;
        compScorep.innerText=compScore;
        msg.innerText=" You Lose!!";
        msg.style.backgroundColor="red";
    }
}
const playGame = (userAction) => {
    console.log("user choice=", userAction);
    const compAction = genCompChoice();
    console.log("comp choice=", compAction);

    if (userAction == compAction) {
        drawGame();

    }
    else {
        let userWin = true;
        if (userAction === "rock") {
            userWin = compAction === "paper" ? false : true;
        }
        else if (userAction === "paper") {
            userWin = compAction === "scissor" ? false : true;

        }
        else {
            userWin = compAction === "rock" ? false : true;
        }
        showWinner(userWin, compAction, userAction);
    }


};


actions.forEach((action) => {
    action.addEventListener("click", () => {
        const userAction = action.getAttribute("id");
        console.log("choice was clicked ", userAction);
        playGame(userAction);

    })

});