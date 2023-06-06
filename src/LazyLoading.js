// Lazy loading image
const blurredImageDivs = document.querySelectorAll(".blurred-img");
const blurredCanvas = document.querySelector(".blurred-canvas");

function loaded(imgContainer) {
  imgContainer.classList.add("loaded");
}

blurredImageDivs.forEach((blurredImageDiv) => {
  const img = blurredImageDiv.querySelector("img");

  if (img.complete) {
    loaded(blurredImageDiv);
  } else {
    img.addEventListener("load", () => loaded(blurredImageDiv));
  }
});


// container magic cube
const canvas = blurredCanvas.querySelector(".canvas1");

if (canvas.complete) {
  loaded(blurredCanvas);
} else {
  canvas.addEventListener("load", () => loaded(blurredCanvas));
}

function loaded(canvasContainer) {
  canvasContainer.classList.add("loaded");
}
