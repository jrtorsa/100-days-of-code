const btn = document.querySelector('.reset');
const color = document.querySelector('.count');

function setBackgroundColor() {
  const randomColor = Math.random().toString(16).slice(3, 9);
  document.body.style.backgroundColor = `#${randomColor}`;
  color.innerHTML = `#${randomColor}`;
}

btn.addEventListener('click', setBackgroundColor);
