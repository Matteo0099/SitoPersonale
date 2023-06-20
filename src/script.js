const toggleDark = document.querySelector('.toggle-dark'); 
const toggleLight = document.querySelector('.bi-moon'); 
const toggleOscuro = document.querySelector('.bi-moon-fill'); 
const body = document.body; 

function updateTheme(theme) { 
  body.className = theme; 
  toggleLight.style.display = theme === 'dark' ? 'flex' : 'none'; 
  toggleOscuro.style.display = theme === 'dark' ? 'none' : 'flex' 
} 

const storedTheme = localStorage.getItem('theme'); 

if (storedTheme) { 
  updateTheme(storedTheme) 
} 

toggleDark.addEventListener('click', () => { 
  const isDark = body.classList.contains('dark'); 
  const newTheme = isDark ? 'light' : 'dark'; 
  updateTheme(newTheme); 
  localStorage.setItem('theme', newTheme) 
});

// service-worker.js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("v1").then((cache) => cache.add("script.js"))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});

// script pre load
// const preloadLink = document.createElement("link");
// preloadLink.href = "script.js";
// preloadLink.rel = "preload";
// preloadLink.as = "script";
// document.head.appendChild(preloadLink);
// const preloadedScript = document.createElement("script");
// preloadedScript.src = "script.js";
// document.body.appendChild(preloadedScript);