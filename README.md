# varmeh4868.github.io

A fully functional, interactive, and professionally designed portfolio-style website hosted on GitHub Pages.

## Overview

This portfolio site introduces me as a Bachelor of Science in Software Development student and web developer. It showcases selected projects, highlights my background and skills, and provides a contact form for visitors to get in touch. The page now includes JavaScript-driven features such as a dark mode toggle, dynamically generated content, and projects rendered from browser session storage.

## Live Site

Hosted on GitHub Pages: [https://varmeh4868.github.io](https://varmeh4868.github.io)

## Features

- **Welcome Modal:** A dismissible "work in progress" message that appears on load and closes with a button.
- **Dark Mode Toggle:** A switch in the top corner that flips between light and dark themes, with the choice saved in `localStorage` so it persists across visits.
- **Header & Navigation:** Site title with an accessible navigation menu linking to each section.
- **About Section:** Short biography, a skills list built dynamically from a JavaScript array, and a rotating caption that fades through the project titles.
- **Featured Content:** Two collapsible cards (University Resources and Personal Projects) that work as an accordion, so opening one closes the other. The Personal Projects card holds a semantic HTML table of repositories.
- **Project Highlights:** A set of project cards created dynamically in JavaScript. The project data is stored as objects, saved to `sessionStorage` as JSON, then read back and rendered into the page on load.
- **Contact Section:** Mailto link plus an accessible contact form. The submit button shows a "Sending..." status and then a confirmation message without reloading the page.
- **Active Section Highlight:** Clicking a nav link glows the target section heading and briefly outlines the section with a fading border.
- **Responsive Layout:** Flexbox-based layout that adapts to phone, tablet, and desktop displays through media queries.
- **Interactive Styling:** Smooth `transition` effects on form inputs, buttons, navigation links, card hovers, and theme changes.

## File Structure

```
varmeh4868.github.io/
├── index.html                     # Main homepage markup
├── script.js                      # Interactive behavior and dynamic content
├── styles.css                     # Stylesheet (layout, theme, responsive rules)
├── README.md                      # Project documentation
├── RSVP.png                       # Project image
├── Bank.jpg                       # Project image
├── Calculator.png                 # Project image
├── api-settings.jpg               # Project image
└── hosted locally using XAMPP.png # Local hosting screenshot
```

## Technologies Used

- **HTML5:** Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`, `<table>`).
- **CSS3:** Flexbox layout, media queries, transitions, gradients, box shadows, keyframe animations, and a custom toggle switch.
- **JavaScript:** DOM creation and manipulation, event handling, timers, and array iteration.
- **Web Storage API:** `sessionStorage` for the dynamic project data and `localStorage` for the saved theme preference.
- **GitHub Pages:** Static site hosting.

## JavaScript Behavior

The `script.js` file powers the interactive parts of the page:

- **Dynamic Skills List:** Loops through a skills array and appends a list item for each one.
- **Project Highlights with Session Storage:** Defines project objects (title, summary, image, repository link) in an array. On load it checks `sessionStorage`. If the data is missing it stores the array with `JSON.stringify` and `setItem`. If the data exists it reads it back with `getItem` and `JSON.parse`. It then loops through the projects and builds each card with `createElement`.
- **Dark Mode:** Reads the saved preference from `localStorage` on load and updates it whenever the toggle changes.
- **Collapsible Cards:** Expands one Featured Content card and collapses the other, with a plus or minus indicator.
- **Rotating Project Caption:** Fades through the project names in the About section on a timer.
- **Active Section Highlight:** Adds a glow and a fading border to the section a nav link points to.
- **Welcome Modal and Reminder:** Closes the modal on button click and shows a reminder alert a few seconds after load.
- **Contact Form Status:** Intercepts the submit, shows a sending message, then a confirmation that greets the visitor by name.

## Layout & Responsive Design

The site uses CSS Flexbox on the main content area, the navigation menu, and the contact form. Three breakpoints adjust `display`, `flex-direction`, and `gap` for each flex container:

| Breakpoint | Min Width | Navigation | Main / Form Direction |
|------------|-----------|------------|------------------------|
| Phone      | 320px     | Column     | Column (compact gaps)  |
| Tablet     | 768px     | Row        | Column (medium gaps)   |
| Desktop    | 1024px    | Row        | Column (wider gaps)    |

## Accessibility

- Every form input is paired with a `<label for="...">` element.
- The `name` and `email` fields use the `required` attribute for client-side validation.
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) support assistive technologies.
- External links open in a new tab with `rel="noopener"` for safety.
- The decorative toggle indicators use `aria-hidden` so screen readers skip them.

## Contact Form

The form in the `#contact` section collects:

- **Name:** `type="text"`, required
- **Email:** `type="email"`, required
- **Subject:** `type="text"`
- **Message:** `<textarea>` with `rows="5"`
- **Submit:** `type="submit"` button

On submit, JavaScript prevents the page reload, shows a "Sending..." status, disables the button to block repeat clicks, then displays a confirmation that thanks the visitor by name. Inputs and the button include hover and focus styles powered by CSS `transition` properties.

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/varmeh4868/varmeh4868.github.io.git
   ```
2. Open `index.html` in any modern web browser. No build step or dependencies required.

### Hosted Locally Using XAMPP

![Hosted locally using XAMPP](hosted%20locally%20using%20XAMPP.png)

## Author

**Vargha Mehregan**, Bachelor of Science in Software Development student at ECPI University.

## Course

Developed as coursework for **SDC260: Web Development** and **202605E RALE SDC355 NMW Javascript**.
