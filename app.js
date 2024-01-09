let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=['rock','paper','scissors'];
    const randomIdx= Math.floor(Math.random()*3);
    return option[randomIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was a draw";
}

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        userscorepara.innerText=compScore;
        msg.innerText=`You Win! ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=userScore;
        msg.innerText=`You Lose. ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    const compChoice=genCompChoice();
    if(userchoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice); 
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})