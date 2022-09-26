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

    if (dark !== "enabled") {
        enableDark();
    } else {
        disableDark();
    }
});

//Checked out
if (dark === "enabled") {
    enableDark();
}

/*
colorMode.addEventListener('click', () => {
    const current = document.body.style.getPropertyValue("--dark-mode") - 0;
    document.body.style.setProperty("--dark-mode", 1 - current);
});
*/
