// toggleMode.js
let darkMode = true;

export function toggleMode() {
  updateMode();
  darkMode = !darkMode;
}

function updateMode() {
  const appWrapper = document.querySelector('.app-wrapper');
  const accentElements = document.querySelectorAll('.accent');
  const lines = document.querySelectorAll('hr');

  if (darkMode) { // if dark mode, then add light mode classes
    appWrapper.classList.add('light-mode');
    appWrapper.classList.remove('dark-mode');
    accentElements.forEach(element => {
      element.classList.add('light-mode-accent');
      element.classList.remove('dark-mode-accent');
    });
    lines.forEach(line => {
      line.classList.add('border-[#232323]');
      line.classList.remove('border-white');
    });
  } else { // light mode = add dark mode classes
    appWrapper.classList.add('dark-mode');
    appWrapper.classList.remove('light-mode');
    accentElements.forEach(element => {
      element.classList.add('dark-mode-accent');
      element.classList.remove('light-mode-accent');
    });
    lines.forEach(line => {
      line.classList.add('border-white');
      line.classList.remove('border-[#232323]');
    });
  }
}


