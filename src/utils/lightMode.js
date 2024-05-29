// toggleMode.js
export function updateMode(currentMode) {
  const appWrapper = document.querySelector('.app-wrapper');

  if (currentMode === 'light') {
    appWrapper.classList.add('light-mode');
    appWrapper.classList.remove('dark-mode');
  } else { 
    appWrapper.classList.add('dark-mode');
    appWrapper.classList.remove('light-mode');
  }
}


