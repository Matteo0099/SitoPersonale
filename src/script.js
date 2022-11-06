// JS code
// SOURCE CODE BY ZIPPO107 COPYRIGHT 2022

let = dark = document.querySelector(".dark-mode-btn");

const enableDark = () => {
  document.body.classList.add("dark");
  localStorage.setItem("dark", "enabled");
};

const disableDark = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("dark", null);
};

dark.addEventListener("click", () => {
  dark = localStorage.getItem("dark");
  // var that search the SVG'class
  var darkOn = document.querySelector(".dark-on");
  var darkOff = document.querySelector(".dark-off");

  if (dark !== "enabled") {
    enableDark();
    darkOff.style.display = "none";
    darkOn.style.display = "block";
  } else {
    disableDark();
    darkOff.style.display = "block";
    darkOn.style.display = "none";
  }
});

if (dark === "enabled") {
  enableDark();
}
