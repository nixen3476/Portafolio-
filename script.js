document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(1.2)";
        setTimeout(() => link.style.transform = "scale(1)", 150);
    });
});
