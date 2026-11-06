const topBtn = document.getElementById("topBtn");

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", scrollToTop);




