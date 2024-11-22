const resizeBtn = document.getElementById('resize');

resizeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("sb-expand");
})