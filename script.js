document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    img.style.transform = "rotate(5deg) scale(1.1)";
    setTimeout(() => img.style.transform = "none", 200);
  });
});
