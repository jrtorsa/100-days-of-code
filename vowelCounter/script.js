const phrase = document.getElementById('text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function vowelCounter() {
  const word = phrase.value;
  if (!word) {
    result.innerHTML = 'Please enter a word...';
    return;
  }
  const splitWord = word.split('');
  let vowels = 0;
  for (let i = 0; i < splitWord.length; i++) {
    const letter = splitWord[i];
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      vowels += 1;
    }
  }
  result.innerHTML = `${word.toUpperCase()} has ${vowels} vowels`;
  phrase.value = '';
}

btn.addEventListener('click', vowelCounter);
