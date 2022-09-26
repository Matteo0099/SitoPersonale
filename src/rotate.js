let btn = document.querySelectorAll(".dark-mode-btn");

btn.forEach(arrow => {
  arrow.addEventListener('click', function() {
    //console.log("test");
    this.className = this.className === "color-mode rotate" ? "color-mode" : "color-mode rotate";
  });
});

//this work fine only with that SVG
