/*
   Author: Vargha Mehregan
   Date:    05/20/2026
   Filename: script.js
*/

/* ============================================================
   Welcome message
============================================================ */
var userName = prompt("Welcome! What is your name?");

userName && userName.trim() !== ""
  ? alert("Welcome, " + userName + "!")
  : alert("Welcome, Guest!");

userName && userName.trim() !== ""
  ? (document.getElementById("welcome-message").innerText =
      "Welcome to My Portfolio, " + userName.trim() + "!")
  : (document.getElementById("welcome-message").innerText =
      "Welcome to My Portfolio, Guest!");

/* ============================================================
   Skills loop
============================================================ */
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "C#", "Java"];
const skillsList = document.getElementById("skills-list");

skills.forEach(function (skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

/* ============================================================
  Featured Content 
============================================================ */
const projectRows = document.querySelectorAll("#personal-projects table tbody tr");
const projectCount = projectRows.length;

const universityDiv = document.getElementById("university-resources");
const personalDiv = document.getElementById("personal-projects");

function expandCard(cardToExpand, cardToCollapse) {
  cardToExpand.classList.add("expanded");
  cardToExpand.classList.remove("collapsed");
  cardToCollapse.classList.add("collapsed");
  cardToCollapse.classList.remove("expanded");

  cardToExpand.querySelector(".toggle-indicator").textContent = "-"; // minus sign
  cardToCollapse.querySelector(".toggle-indicator").textContent = "+";
}

if (projectCount < 3) {
  expandCard(universityDiv, personalDiv);
} else {
  expandCard(personalDiv, universityDiv);
}

universityDiv
  .querySelector(".featured-card-header")
  .addEventListener("click", function () {
    expandCard(universityDiv, personalDiv);
  });

personalDiv
  .querySelector(".featured-card-header")
  .addEventListener("click", function () {
    expandCard(personalDiv, universityDiv);
  });

/* ============================================================
   Dark Mode toggle
============================================================ */
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
});

/* ============================================================
    Contact form Submit button 
============================================================ */
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const formName = nameInput.value.trim();
  const welcomeName = userName && userName.trim() ? userName.trim() : "";
  const enteredName = formName || welcomeName || "Guest";
  alert("Thank you, " + enteredName + ", your message has been sent!");
});
