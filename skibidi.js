console.log("Hello World!");

function getComputerChoice(){
    let theBoy = Math.random() * 10

    console.log(theBoy)
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

    console.log("Human Says: " + human, "Robot Says: " + robo);

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
    else if(human = "paper")
    {
        if(robo = "scissors")
        {
            winner = "robot";
        } 
        else if(robo = "paper")
        {
            winner = "tie";
        }
        else if(robo = "rock")
        {
            winner = "human";
        }
    }
    else if(human="scissors")
    {
        if(robo = "scissors")
        {
            winner = "tie";
        }
        else if(robo = "paper")
        {
            winner = "human";
        }
        else if(robo = "rock")
        {
            winner = "robot"
        }
    }

    return winner;
}

function playGame(){
    let peanut = getComputerChoice();
    let wingull = getPersonChoice();
    let mingus = "";
    let round = 0;
    while(round < 5) 
    {
        mingus = playRound(wingull, peanut);

        if(mingus == "robot")
        {
            robotScore++;
            round++;
            console.log("winner is " + mingus)

        }
        else if(mingus == "human")
        {
            humanScore++;
            round++;
            console.log("winner is " + mingus)

        }
        else if(mingus == "tie")
        {
            console.log("Tie");
            console.log("No Winner: " + mingus)
        }

        peanut = getComputerChoice();
        wingull = getPersonChoice();
    }
}
    console.log("Let's get it.")
    let humanScore = 0;
    let robotScore = 0;
    playGame();
    console.log("Human Score: " + humanScore)
    console.log("Robot Score: " + robotScore)

    if(humanScore < robotScore)
    {
        console.log("suffer meatbags, robots win again")
    }
    else if(robotScore<humanScore)
    {
        console.log("Another dub for organics, the fathers of technology")
    }