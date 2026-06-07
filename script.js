/*
   Author: Vargha Mehregan
   Date:    06/07/2026
   Filename: script.js
*/

/* ============================================================
   Welcome modal (close button)
============================================================ */
const welcomeModal = document.getElementById("welcome-modal");
const closeModalBtn = document.getElementById("close-modal");

closeModalBtn.addEventListener("click", function () {
  welcomeModal.classList.add("hidden");
});


/* ============================================================
   Reminder alert
============================================================ */
setTimeout(function () {
  alert(
    "Hey there!\n\nIn the meanwhile, I would like to remind you to visit the GitHub page for my projects! \n\nYou can find the link in the Featured Content section. \n\nThanks for visiting my portfolio!\n\n\n - Vargha Mehregan"
  );
}, 5000);

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
   Project titles in About section ("live caption")
============================================================ */
const projectNameCells = document.querySelectorAll(
  "#personal-projects table tbody tr td:first-child"
);
const projectNames = Array.from(projectNameCells).map(function (cell) {
  return cell.textContent.trim();
});
const projectCaption = document.getElementById("project-caption");

let captionIndex = 0;

// Show the first name.
projectCaption.textContent = projectNames[captionIndex];
projectCaption.classList.add("visible");

// Every three seconds: fade the current name out, swap to the next, fade it in.
setInterval(function () {
  projectCaption.classList.remove("visible"); // fade out

  // Wait for the fade-out (0.8s) to finish before swapping the text.
  setTimeout(function () {
    captionIndex = (captionIndex + 1) % projectNames.length;
    projectCaption.textContent = projectNames[captionIndex];
    projectCaption.classList.add("visible"); // fade in
  }, 800);
}, 3000);

/* ============================================================
   Nav highlight  <h2>.
============================================================ */
const navLinks = document.querySelectorAll("nav ul li a");
const sectionHeadings = document.querySelectorAll("main section header h2");
const mainSections = document.querySelectorAll("main section");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Clear the glow and border from every section first.
    sectionHeadings.forEach(function (heading) {
      heading.classList.remove("nav-active");
    });
    mainSections.forEach(function (section) {
      section.classList.remove("section-active");
    });

    // Highlight the section this link points to: glow its <h2>
    // and add the colored border to the section itself.
    const targetId = link.getAttribute("href").slice(1); // drop the "#"
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("section-active");
      targetSection.querySelector("header h2").classList.add("nav-active");
    }
  });
});

/* ============================================================
   Dark Mode toggle (preference saved in localStorage)
============================================================ */
const darkModeToggle = document.getElementById("dark-mode-toggle");

// On load: apply the stored preference and sync the toggle.
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("darkMode", "false");
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
  const enteredName = formName || "Guest";

  //Sending message...
  let formStatus = document.getElementById("form-status");
  if (!formStatus) {
    formStatus = document.createElement("p");
    formStatus.id = "form-status";
    submitButton.insertAdjacentElement("afterend", formStatus);
  }

  // Show the loading message right away and block repeat clicks.
  formStatus.textContent = "Sending message...";
  formStatus.className = "form-status sending";
  submitButton.disabled = true;

  // After 2.5 seconds, replace the loading message with the confirmation.
  setTimeout(function () {
    formStatus.textContent =
      "Message sent successfully! Thank you, " + enteredName + ".";
    formStatus.className = "form-status sent";
    submitButton.disabled = false;
  }, 2500);
});