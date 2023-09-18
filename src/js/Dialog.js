document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".modal-btn");
  const modal = document.querySelector("dialog");

  if (btn && modal) {
    btn.addEventListener("click", () => {
      modal.showModal(); // Open the modal
      modal.style.display = 'flex'
      modal.style.position = 'fixed'
      modal.style.left = '50%'
      modal.style.top = '50%'
      modal.style.transform = 'translate(-50%,-50%)'
    });

    const cancelButton = modal.querySelector('button[type="button"]');
    if (cancelButton) {
      cancelButton.addEventListener("click", () => {
        modal.close();
        modal.style.display = 'none'
      });
    }
  } else 
    console.error("btn or dialog element not found.");
});

console.clear();