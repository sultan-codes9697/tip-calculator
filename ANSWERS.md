# ANSWERS.md

## 1. How to run

### Run locally

1. Download or clone this repository
2. Open the folder in VS Code
3. Install the Live Server extension
4. Right click on `index.html`
5. Click `Open with Live Server`

The app will open in the browser.

## 2. Stack & design choices

I used HTML, CSS, and JavaScript because I am most comfortable with this stack and it is lightweight for a small frontend project like this. It also helped me focus more on the interaction and validation instead of framework setup.

### Design Decision 1

I used preset tip percentage buttons (10%, 15%, 20%) because they make the app faster and easier to use. Users can quickly select common tip values without typing manually.

### Design Decision 2

I used a single centered card layout with a maximum width because it keeps the interface clean and readable on both desktop and mobile devices. On smaller screens, the tip buttons stack vertically for better usability.

## 3. Responsive & accessibility

On a 360px mobile screen, the layout adjusts automatically and the tip buttons stack vertically to prevent crowding. Inputs and buttons stay large enough for touch interaction.

On a 1440px laptop screen, the calculator stays centered with a fixed max width so the content remains easy to read instead of stretching too wide.

### Accessibility consideration handled

I used clear labels for all input fields and visible inline error messages to help users understand validation issues.

### Accessibility consideration skipped

I did not fully optimize screen reader support with ARIA attributes because of time limitations and my beginner-level experience.

## 4. AI usage

I used ChatGPT to:

* Understand Git and GitHub setup
* Learn how to connect GitHub with VS Code
* Improve validation logic
* Structure the README.md and ANSWERS.md files
* Debug JavaScript issues

## 5. Honest gap

One thing that is not fully polished is the visual styling and animations. With another day, I would improve the UI design, add smoother transitions, and make the overall experience feel more modern and professional.
