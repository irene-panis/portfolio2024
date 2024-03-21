// toggleMode.js
let darkMode = false;

export function toggleMode() {
  updateMode();
  darkMode = !darkMode;
}

function updateMode() {
  const appWrapper = document.querySelector('.app-wrapper');

  if (darkMode) { // if dark mode, then add light mode classes
    appWrapper.classList.add('light-mode');
    appWrapper.classList.remove('dark-mode');
  } else { // light mode = add dark mode classes
    appWrapper.classList.add('dark-mode');
    appWrapper.classList.remove('light-mode');
  }
}


