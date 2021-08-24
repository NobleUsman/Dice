//-------------------------Randomizing first dice-------------------------------------

let randomNumber1 = Math.floor(Math.random()*6) + 1;


// document.querySelector(".dice, .img1").setAttribute("src", "images/dice${randomNumber1}.png");
// document.querySelector(".dice, .img2").setAttribute("src", "images/dice${randomNumber1}.png");

var randomimage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0]; //choose img from all elements, then choose the zeroth or first img tag in the tree

image1.setAttribute("src", randomimage);


//-------------------------Randomizing second dice-------------------------------------


let randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomimage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]; //choose img from all elements, then choose the second img tag in the tree

image2.setAttribute("src", randomimage2);


//-------------------------Declaring winner by large number dice-------------------------------------

if ( randomNumber1 > randomNumber2 ) {
  document.querySelector("h1").innerHTML = "Player1 wins!";
}
else if ( randomNumber1 == randomNumber2 ) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else {
  document.querySelector("h1").innerHTML = "Player2 wins!";
}
