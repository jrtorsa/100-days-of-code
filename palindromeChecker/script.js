const text = document.getElementById('text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const isPalindrome = () => {
  const word = text.value;
  if (!word) {
    result.innerHTML = 'Enter a Word!';
    return;
  }
  const pal = word.split('').reverse().join('');
  if (word !== pal) {
    result.innerHTML = `${word} is NOT a Palindrome`;
  } else {
    result.innerHTML = `${word} is a Palindrome!!!`;
  }
  text.value = '';
};

btn.addEventListener('click', isPalindrome);
