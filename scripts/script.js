document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-mode");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.querySelector("main").classList.add("dark-mode");
        toggleButton.textContent = "Switch to Light Mode";
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.querySelector("main").classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "Switch to Light Mode";
        } else {
            localStorage.removeItem("darkMode");
            toggleButton.textContent = "Switch to Night Mode";
        }
    });
});
