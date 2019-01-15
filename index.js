var n1 = Math.floor(Math.random() * 6) + 1;
var imgsrc1 = "images/dice"+n1+".png";

var n2 = Math.floor(Math.random() * 6) + 1;
var imgsrc2 = "images/dice"+n2+".png";

document.querySelector(".img1").setAttribute("src", imgsrc1);
document.querySelector(".img2").setAttribute("src", imgsrc2);


if (n1 > n2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (n2 > n1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}
