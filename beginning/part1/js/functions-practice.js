/*eslint-env browser*/
/*jslint-env browser*/
//STEP 1
function halfNumber(num) {
    "use Strict";
    half = num/2;
    window.console.log( "Half of "+num+" is "+ half+".");
}
//STEP 2
function squareNumber(num) {
    "use Strict";
    square = num**2;
    window.console.log( "The result of squaring the "+num+" is "+ square+".");
}
//STEP 3
function percentOf(firstNum,secondNum) {
    "use Strict";
    percentage = (firstNum/secondNum)*100;
    window.console.log( firstNum + " is  %"+percentage+" of "+ secondNum+".");
}
//STEP 4
function findModulus(firstNum,secondNum) {
    "use Strict";
    module = (secondNum%firstNum);
    window.console.log( module + " is the module of "+ firstNum+" and "+secondNum);
}
//STEP 5
function solveQuestionFive(){
    var userNumbers= window.prompt("Please enter few numbers seprated by comma");
    userNumbers = userNumbers.split(",");
    sumNums(userNumbers);
}


function sumNums(userNumbers){
    var sum = 0;
    var outPut = "The sum of ";
    for(var i=0; i<userNumbers.length;i++){
        outPut += userNumbers[i]+ " ";
        sum += parseInt(userNumbers[i]);
    }
    window.console.log( outPut + "is "+ sum);

}


//calling them
halfNumber(5);
squareNumber(3);
percentOf(2,4);
findModulus(4,10);
solveQuestionFive();