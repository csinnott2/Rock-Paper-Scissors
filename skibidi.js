console.log("Hello World!");

function getComputerChoice(){
    let theBoy = Math.random() * 10
    if(theBoy > 7){
        return "scissors";
    }
    else if(theBoy > 4)
    {
        return "rock";
    }
    else
    {
        return "paper";
    }
}
function getPersonChoice()
{   
    let thatGuy = prompt("Cough Up Your Shit")
    return thatGuy;
}

function playRound(human, robo)
{
    winner = "";
    human = human.toLowerCase();
    robo = robo.toLowerCase();

    info.textContent="Human Says: " + human + "\n Robot Says: " + robo;

    if(human=="rock")
    {
        if(robo == "scissors")
        {
            winner = "human";
        }
        else if(robo == "paper")
        {
            winner = "robot";
        }
        else if(robo == "rock")
        {
            winner = "tie";
        }
    }
    else if(human == "paper")
    {
        if(robo == "scissors")
        {
            winner = "robot";
        } 
        else if(robo == "paper")
        {
            winner = "tie";
        }
        else if(robo == "rock")
        {
            winner = "human";
        }
    }
    else if(human=="scissors")
    {
        if(robo == "scissors")
        {
            winner = "tie";
        }
        else if(robo == "paper")
        {
            winner = "human";
        }
        else if(robo == "rock")
        {
            winner = "robot"
        }
    }

    dub.textContent = "Winner is: " + winner;
    return winner;
}

function scoreUp(mingus){
        if(mingus == "robot")
        {
            robotScore++;
            console.log("winner is " + mingus)

        }
        else if(mingus == "human")
        {
            humanScore++;
            console.log("winner is " + mingus)

        }
        else if(mingus == "tie")
        {
            console.log("Tie");
            console.log("No Winner: " + mingus)
        }
    }

function checkWin(theMan, theBot)
{
    if(theMan == 5)
    {
        alert("HUMANS WIN");
    }
    else if(theBot == 5)
    {
        alert("ROBOTS WIN");
    }
}

    console.log("Let's get it.")
    let humanScore = 0;
    let robotScore = 0;


    /*playGame();*/
    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissors = document.querySelector("#scissors")

    let victory = "";
    rock.addEventListener("click", () => 
    {
        victory = playRound("rock", getComputerChoice());
        scoreUp(victory);
        robScore.textContent = "Robot: " + robotScore;
        boyScore.textContent = "Human: " + humanScore;
    })
    paper.addEventListener("click", () => 
    {
        victory = playRound("paper", getComputerChoice());
        scoreUp(victory);

        robScore.textContent = "Robot: " + robotScore;
        boyScore.textContent = "Human: " + humanScore;
    })
    scissors.addEventListener("click", () => 
    {
        victory = playRound("scissors", getComputerChoice());
        scoreUp(victory);

        robScore.textContent = "Robot: " + robotScore;
        boyScore.textContent = "Human: " + humanScore;
    })



    const scoreboard = document.querySelector("#score");
    const infoboard = document.querySelector("#INFO")
    const info = document.createElement("p");
    const dub = document.createElement("p");

    const robScore = document.createElement("p");
    const boyScore = document.createElement("p");
    robScore.classList.add("robScore");
    boyScore.classList.add("boySCore");


    infoboard.appendChild(info);
    infoboard.appendChild(dub);

    scoreboard.appendChild(robScore);
    scoreboard.appendChild(boyScore);

