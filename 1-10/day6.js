// Implemented a dark mode button for my portfolio website
// alexlegard.ca. Check out the code for it below.

window.onload = function () {

    // Various elements that I have to modify when toggling dark mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const lightnessStyle = document.getElementById("lightness-style");
    const navbarTextColor = document.getElementById("navbar-text-color");
    const githubMark = document.getElementById("github-mark");


    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Sets the initial theme based on the state of localStorage.
    if (isDarkMode) {
        enableDarkMode();
        console.log("Set initial dark mode theme");
    } else {
        enableLightMode();
        console.log("Set initial light mode theme");
    }

    darkModeToggle.addEventListener('click', function () {

        if (isDarkMode) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    function enableLightMode() {
        lightnessStyle.href = "css/light-style.css";
        navbarTextColor.className = "navbar bg-transparent sticky-top navbar-expand-lg navbar-light bg-light";
        darkModeToggle.innerHTML = '🌙 Dark Theme';
        githubMark.src = "images/github-mark.png";
        localStorage.setItem('darkMode', false);
        isDarkMode = false;
    }

    function enableDarkMode() {
        lightnessStyle.href = "css/dark-style.css";
        navbarTextColor.className = "navbar bg-transparent sticky-top navbar-expand-lg navbar-dark bg-dark";
        darkModeToggle.innerHTML = "☀️ Light Theme";
        githubMark.src = "images/github-mark-white.png";
        localStorage.setItem('darkMode', true);
        isDarkMode = true;
    }
}