/*
   Author: Vargha Mehregan
   Date:   05/13/2026
   Filename: script.js
*/

var userName = prompt("Welcome! What is your name?");

userName && userName.trim() !== ""
  ? alert("Welcome, " + userName + "!") 
  : alert("Welcome, Guest!") 

userName && userName.trim() !== ""
  ? (document.getElementById("welcome-message").innerText =
      "Welcome to My Portfolio, " + userName.trim() + "!")
  : (document.getElementById("welcome-message").innerText =
      "Welcome to My Portfolio, Guest!");
