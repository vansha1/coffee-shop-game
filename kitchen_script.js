const Previous2 = document.getElementById("previous2");

Previous2.addEventListener("click", () => {
    document.getElementById("third-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
});