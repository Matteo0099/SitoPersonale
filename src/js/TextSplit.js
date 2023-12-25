document.addEventListener("DOMContentLoaded", function() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  document.querySelectorAll("h1:not(.404)").forEach(h1Element => {
    h1Element.addEventListener('mouseover', event => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration)
              return event.target.dataset.value[index];

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length)
          clearInterval(interval);

        iteration += 0.4;
      }, 30);
    });
  });
});
