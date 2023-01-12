
const nav = document.querySelector('nav');
const toggleButton = document.createElement('button');
toggleButton.innerHTML = 'Menu';
nav.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('responsive');
});
