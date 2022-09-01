// Input player names
player1 = prompt("Enter player 1 name:");
player2 = prompt("Enter player 2 name:");

// Player name on dashboard
document.querySelector("#p1").textContent = player1;
document.querySelector("#p2").textContent = player2;

// Generate random numbers
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random 1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// First Image
let randomImage = "dice" + randomNumber1 + ".png"; // Generate image based on random int
let randomImageSource = "images/" + randomImage;

let image1 = document.querySelectorAll("img")[0]; // Select first image
image1.setAttribute("src", randomImageSource);

// Second Image
let randomImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomImage2;

document.querySelector(".img2").setAttribute("src", randomImageSource2);

// Select the heading
text = document.querySelector("h1");

// Restart the app

document.querySelector("#restart").addEventListener("click", () => {
    location.href="./index.html";
})

//Display winner condition
if (randomNumber1 > randomNumber2) {
    text.textContent = "🚩 " + player1 + " Wins!";
}

if (randomNumber2 > randomNumber1) {
    text.textContent = player2 + " Wins! 🚩";
}

if (randomNumber1 == randomNumber2) {
    text.textContent = "Draw!";
}
