const text = document.querySelector('.text');
const count = document.querySelector('.count');

// const countCharacters = (e) => {
//   if (e.keyCode === 8) {
//     count.innerHTML--;
//   } else {
//     count.innerHTML++;
//   }
// };
w;
text.addEventListener('keydown', () => {
  count.innerHTML = text.value.length;
});
