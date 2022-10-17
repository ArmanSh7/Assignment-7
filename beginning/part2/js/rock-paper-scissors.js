/*eslint-env browser*/
var quit;
var userChoice;
var userChoiceNumber;
function calculateComputerChoice (){
    var computerOptions = ["rock", "paper", "scissors"];
    randomNum = Math.floor(Math.random()*10) %3; 
    computerChoice = computerOptions[randomNum];
    return computerChoice;
}

function getUserChoice (){
    var userChoice = window.prompt("Welcome to the game of The Rock, Paper, Scissors Game\n" +
    "For Rock enter 1.\nFor Paper enter 2.\nFor Scissors enter 3.\n");  
    return userChoice;
}
function main(){
    var userPoints = 0;
    var ComputerPoints = 0;
    while(quit != 1){
        var userOptions= ["rock", "paper", "scissors"];
        userChoiceNumber = getUserChoice();
        userChoice = userOptions[userChoiceNumber-1];
        computerChoice = calculateComputerChoice();

        if(userChoiceNumber > 3 || userChoiceNumber <1 ){
            quit=  window.prompt("Wrong input. For quitting press 1. Otherwise, press any othr number to ente your choice again!");
        }
        else
        {
            if(computerChoice == userChoice){
                window.alert("Your choice was "+userChoice +", computer choice is "+computerChoice+
                "\n No winner here");
                quit=  window.prompt("For quitting press 1. Otherwise, press any othr number to ente your choice again!");
            }
            else
            {
                    if(userChoiceNumber==1){
                        if(computerChoice == "scissors"){
                            window.alert("Your choice was "+userChoice +",computer choice is "+computerChoice+
                            "\n You win!!!");
                            userPoints++;
                        }
                        else if(computerChoice == "paper"){
                            window.alert("Your choice was "+userChoice +", computer choice is "+computerChoice+
                            "\n You lost:(");
                            ComputerPoints++;
                        }
                        quit=  window.prompt("For quitting press 1. Otherwise, press any othr number to ente your choice again!");
                    }
                    else if(userChoiceNumber==2){
                        if(computerChoice == "rock"){
                            window.alert("Your choice was "+userChoice +",computer choice is "+computerChoice+
                            "\n You win!!!");
                            userPoints++;
                        }
                        else if(computerChoice == "scissors"){
                            window.alert("Your choice was "+userChoice +", computer choice is "+computerChoice+
                            "\n You lost:(");
                            ComputerPoints++;
                        }
                        quit=  window.prompt("For quitting press 1. Otherwise, press any othr number to ente your choice again!");
                    }
                    else if(userChoiceNumber==3){
                        if(computerChoice == "paper"){
                            window.alert("Your choice was "+userChoice +",computer choice is "+computerChoice+
                            "\n You win!!!");
                            userPoints++;
                        }
                        else if(computerChoice == "rock"){
                            window.alert("Your choice was "+userChoice +", computer choice is "+computerChoice+
                            "\n You lost:(");
                            ComputerPoints++;
                        }
                        quit=  window.prompt("For quitting press 1. Otherwise, press any othr number to ente your choice again!");
                    }

                    window.alert("User points: "+userPoints+" computer points "+ ComputerPoints);
            }       
        }
       
    }
}

main();

