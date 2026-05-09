# varmeh4868.github.io

A fully functional, well-structured, and professionally designed portfolio-style website hosted on GitHub Pages.

## Overview

This portfolio site introduces me as a Bachelor of Science in Information Technology student and web developer. It showcases selected projects, highlights my background, and provides a contact form for visitors to get in touch.

## Live Site

Hosted on GitHub Pages: [https://varmeh4868.github.io](https://varmeh4868.github.io)

## Features

- **Header & Navigation** — Site title with an accessible navigation menu linking to each section.
- **About Section** — Short biography and professional focus.
- **Projects Section** — Semantic HTML table featuring project samples with names, descriptions, and repository links.
- **Contact Section** — Mailto link plus an accessible contact form (name, email, subject, message).
- **Responsive Layout** — Flexbox-based layout that adapts to phone, tablet, and desktop displays via media queries.
- **Interactive Styling** — Smooth `transition` effects on form inputs, the submit button, navigation links, and section hover states.

## File Structure

```
varmeh4868.github.io/
├── index.html      # Main homepage markup
├── styles.css      # Stylesheet (layout, theme, responsive rules)
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5** — Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`, `<table>`).
- **CSS3** — Flexbox layout, media queries, transitions, gradients, and box shadows.
- **GitHub Pages** — Static site hosting.

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

## Contact Form

The form in the `#contact` section collects:

- **Name** — `type="text"`, required
- **Email** — `type="email"`, required
- **Subject** — `type="text"`
- **Message** — `<textarea>` with `rows="5"`
- **Submit** — `type="submit"` button

Inputs and the submit button include hover and focus styles powered by CSS `transition` properties for a polished interactive feel.

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/varmeh4868/varmeh4868.github.io.git
   ```
2. Open `index.html` in any modern web browser. No build step or dependencies required.

## Author

**Vargha Mehregan** — Bachelor of Science in Information Technology student at ECPI University.

## Course

Developed as coursework for **SDC260 — Web Development**.
