

var randomNumber1 = Math.round(Math.random() * 6);
var randomNumber2 = Math.round(Math.random() * 6);

var randomDiceImage1 = "images/dice" + randomNumber1 +".png";
var randomDiceImage2 = "images/dice" + randomNumber2 +".png";

document.querySelector(".dice .img1").setAttribute("src", randomDiceImage1);
document.querySelector(".dice .img2").setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = ("Player 1 won");
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = ("Player 2 won");
}
else{
    document.querySelector("h1").innerHTML = ("Draw");
}
