let body = document.querySelector('.body-primary')

function setTheme(theme) {
  body.classList.remove('dark')
  body.classList.add(theme)
  localStorage.setItem('theme', theme)  
}

function getTheme() {
  return localStorage.getItem('theme') || 'light'
}

let currentTheme = getTheme()
setTheme(currentTheme);

let btn = document.querySelector('.btn-dark') 
btn.addEventListener('click', function () {  
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';  
  setTheme(currentTheme);  
})

window.onload = function() {
  currentTheme = getTheme();
  setTheme(currentTheme);
}