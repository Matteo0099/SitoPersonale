const toggleDark = document.querySelector('.toggle-dark');
const toggleLight = document.querySelector('.bi-moon');
const toggleOscuro = document.querySelector('.bi-moon-fill');
const body = document.body;

function updateTheme(theme) {
  body.className = theme;
  toggleLight.style.display = theme === 'dark' ? 'flex' : 'none';
  toggleOscuro.style.display = theme === 'dark' ? 'none' : 'flex';
}

const storedTheme = localStorage.getItem('theme');

if (storedTheme) {
  updateTheme(storedTheme);
}

toggleDark.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  updateTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});