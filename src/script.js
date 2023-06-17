let toggleDark = document.querySelector('.toggle-dark')
let toggleLight = document.querySelector('.bi-moon')
let toggleOscuro = document.querySelector('.bi-moon-fill')
let body = document.body;

const theme = localStorage.getItem('theme');
if (theme) {
  body.classList.add(theme);
  if (theme === 'dark') {
    toggleLight.style.display = 'flex';
    toggleOscuro.style.display = 'none';
  } else {
    toggleLight.style.display = 'none';
    toggleOscuro.style.display = 'flex';
  }
}

toggleDark.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleOscuro.style.display = isDark ? 'none' : 'flex';
  toggleLight.style.display = isDark ? 'flex' : 'none';
});
