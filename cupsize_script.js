const Previous1 = document.getElementById("previous1");
const clickSmall = document.getElementById("s_cap");
const clickMed = document.getElementById("m_cap");
const clickLarge = document.getElementById("l_cap");
const clickGuide = document.getElementById("guide_cover");
const clickClose = document.getElementById("close");
const Next1 = document.getElementById("next1");

Previous1.addEventListener("click", () => {
    document.getElementById("first-page").style.display = "block";
    document.getElementById("second-page").style.display = "none";
});

Next1.addEventListener("click", () => {
    document.getElementById("second-page").style.display = "none";
    document.getElementById("third-page").style.display = "block";
});

clickSmall.addEventListener("click", () => {
    document.getElementById("s_cup").style.display = "block";
    document.getElementById("m_cup").style.display = "none";
    document.getElementById("l_cup").style.display = "none";
});

clickMed.addEventListener("click", () => {
    document.getElementById("s_cup").style.display = "none";
    document.getElementById("m_cup").style.display = "block";
    document.getElementById("l_cup").style.display = "none";
});

clickLarge.addEventListener("click", () => {
    document.getElementById("s_cup").style.display = "none";
    document.getElementById("m_cup").style.display = "none";
    document.getElementById("l_cup").style.display = "block";
});

clickGuide.addEventListener("click", () => {
    document.getElementById("guide").style.display = "block";
    document.getElementById("cover").style.display = "block";
    document.getElementById("close").style.display = "block";
});

clickClose.addEventListener("click", () => {
    document.getElementById("guide").style.display = "none";
    document.getElementById("cover").style.display = "none";
    document.getElementById("close").style.display = "none";
});

