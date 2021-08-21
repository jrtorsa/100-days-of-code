const text = document.getElementById('text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const isPalindrome = () => {
  const word = text.value;
  const pal = word.split('').reverse().join('');
  if (word !== pal) {
    result.innerHTML = `The word ${word} is NOT a Palindrome`;
  } else {
    result.innerHTML = `The word ${word} is a Palindrome!!!`;
  }
  text.value = '';
};

btn.addEventListener('click', isPalindrome);
