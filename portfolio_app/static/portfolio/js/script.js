// Company Description Toggle in Experience Section
document.querySelectorAll(".company-button").forEach(button => {
    button.addEventListener("click", () => {
        const description = button.nextElementSibling;
        description.style.display = description.style.display === "none" ? "block" : "none";
    });
});

// Scroll Arrow Toggle
const scrollToggle = document.getElementById("scroll-toggle");

scrollToggle.addEventListener("click", () => {
    if (window.scrollY === 0) {
        document.documentElement.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    }
});

// Change arrow direction based on scroll position
window.addEventListener("scroll", () => {
    scrollToggle.textContent = window.scrollY === 0 ? "⬇" : "⬆";
});
