const container = document.querySelector('.container');
const btn = document.querySelector('#boxes');
let count = 0;

for (let j = 0; j < 1; j++) {
  generateButtons(4);
}

btn.addEventListener('click', () => {
  let response = prompt('Enter the size of grid (max 100)');
  const numResponse = parseInt(response);
  if (numResponse <= 100) {
    count = numResponse;
  }
  container.replaceChildren();
  generateButtons(count);
});

function generateButtons(count) {
  for (let i = 0; i < count * count; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('child-div');
    childDiv.style.width = `${100 / count}%`;
    childDiv.classList.add('new-style');
    container.appendChild(childDiv);

    let color = getRandomRGB();
    let startingOpacity = 0.1;
    childDiv.addEventListener('mouseover', () => {
      if (childDiv.classList.contains('new-style')) {
        childDiv.style.backgroundColor = color;
        childDiv.style.opacity = startingOpacity;
        childDiv.classList.remove('new-style');
      } else {
        startingOpacity += 0.1;
        childDiv.style.opacity = startingOpacity;
      }
    });
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
