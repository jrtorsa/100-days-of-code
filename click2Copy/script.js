const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

const copyText = () => {
  text.select();
  text.setSelectionRange(0, 9999999);
  document.execCommand('copy');

  btn.textContent = 'Copied!';
  setTimeout(() => {
    btn.textContent = 'Copy';
  }, 3000);
};

btn.addEventListener('click', copyText);
