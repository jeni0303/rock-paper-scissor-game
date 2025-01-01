let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

jhsvcgsvs

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "game was draw.plece try again!";
    msg.style.backgroundColor = "black";
};

const showwinner = (userwin,compchoice,userchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you loss! your ${compchoice} beats ${userchoice}`; 
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) =>{
  console.log("user choice = ",userchoice);
  const compchoice = genCompChoice();
  console.log("comp choice = ",compchoice);
  if(userchoice == compchoice){
       drawGame();
  }else{
    let userwin = true;
    if(userchoice === "rock"){
         userwin = compchoice === "paper" ? false : true;
    }else if (userchoice === "paper"){
        userwin = compchoice === "scissors" ? false : true;
    }else{
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,compchoice,userchoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice,);
    })
});