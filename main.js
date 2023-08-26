const passwordInput = document.getElementById('passwordInput');
const progress = document.getElementById('progress');
const textOutcome = document.getElementById('textOutcome');

passwordInput.addEventListener('input', updateProgress);

function updateProgress() {
  const password = passwordInput.value;
  const passwordLength = password.length;

  progress.style.width = `${passwordLength * 5}%`;

  if (passwordLength < 8) {
    progress.style.backgroundColor = 'red';
    textOutcome.textContent = 'Should be longer';
  } else if (passwordLength >= 8 && passwordLength < 12) {
    progress.style.backgroundColor = 'orange';
    textOutcome.textContent = 'Pretty good';
  } else {
    progress.style.backgroundColor = 'green';
    textOutcome.textContent = 'Grrrreat!';
  }
}
