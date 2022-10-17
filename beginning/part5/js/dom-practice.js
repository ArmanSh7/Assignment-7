/*eslint-env browser*/

//STEP 1
function clicked(){
    window.alert("I have been clicked!");
}

//STEP 2
var secondButton = document.getElementById("second");
secondButton.onclick= function(){
    window.alert("I have been clicked!");
}
//STEP 3
var thirdButton = document.getElementById("third");
thirdButton.addEventListener("click", clicked);
//STEP 4
var forthButton = document.getElementById("fourth");
forthButton.addEventListener("click", function(){
    window.alert("I have been clicked!");
});
//STEP 5
function init(){
    var fifthButton = document.getElementById("fifth");
    fifthButton.addEventListener("click", function(){
        window.alert("I have been clicked!");
    });
}
window.addEventListener("load", init);