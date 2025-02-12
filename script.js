document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        this.classList.add("active");
    });
});

document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.stopPropagation();
        this.parentElement.remove();
    });
});
