
// for random image 1
var player1number = Math.floor(Math.random() * 6) + 1;

var randomimage = "images/dice" + player1number + ".png";

document.querySelector(".img1").setAttribute("src", randomimage);

// for random image 2
var player2number = Math.floor(Math.random() * 6) + 1;

var randomimage2 = "images/dice" + player2number + ".png";

document.querySelector(".img2").setAttribute("src", randomimage2);

// for change the Text
if (player1number > player2number) {
    
    document.querySelector(".whowin").innerHTML = "🚩Player 1 wins ";
    document.querySelector(".img1").style.width="250px";
}
else if (player1number < player2number) {
    
    document.querySelector(".whowin").innerHTML = "Player 2 wins🚩 ";
    document.querySelector(".img2").style.width="250px";
}
else if (player1number == player2number) {
    
    document.querySelector(".whowin").innerHTML = "Draw🤣🤣";
} 