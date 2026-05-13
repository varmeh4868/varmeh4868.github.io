/*
   Author: Vargha Mehregan
   Date:   05/13/2026
   Filename: script.js
*/

const userName = prompt("Welcome! What is your name?");

const welcomeMessage = document.getElementById("welcome-message");

if (userName && userName.trim() !== "") {
  welcomeMessage.textContent = "Welcome to My Portfolio, " + userName.trim() + "!";
} else {
  welcomeMessage.textContent = "Welcome to My Portfolio, Guest!";
}
