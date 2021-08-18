const number = document.querySelector('.count');
const button = document.querySelector('.reset');

button.addEventListener('click', () => {
  number.innerHTML = randomNumber();
});

function randomNumber() {
  const number = Math.floor(Math.random() * 10);
  return number;
}
