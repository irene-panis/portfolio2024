// toggleMode.js
let darkMode = false;

export function toggleMode() {
  darkMode = !darkMode;
  updateMode();
}

function updateMode() {
  const appWrapper = document.getElementById('appWrapper');
  const accentElements = document.querySelectorAll('.accent');

  if (darkMode) {
    appWrapper.classList.add('dark-mode');
    appWrapper.classList.remove('light-mode');
    accentElements.forEach(element => {
      element.classList.add('dark-mode-accent');
      element.classList.remove('light-mode-accent');
    });
  } else {
    appWrapper.classList.remove('dark-mode');
    appWrapper.classList.add('light-mode');
    accentElements.forEach(element => {
      element.classList.remove('dark-mode-accent');
      element.classList.add('light-mode-accent');
    });
  }
}


