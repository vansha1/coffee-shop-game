const Previous1 = document.getElementById("previous1");
const clickSmall = document.getElementById("s_cap");
const clickMed = document.getElementById("m_cap");
const clickLarge = document.getElementById("l_cap");
const clickGuide = document.getElementById("guide_cover");
const clickClose = document.getElementById("close");
const Next1 = document.getElementById("next1");

function showCupInKitchen() {
    const kitchencup = document.getElementById("kitchencup");

    if (gameState.selectedCup === "small") {
        kitchencup.src = "Images/Cups/s_cup.png";
    } else if (gameState.selectedCup === "medium") {
        kitchencup.src = "Images/Cups/m_cup.png";
    } else if (gameState.selectedCup === "large") {
        kitchencup.src = "Images/Cups/l_cup.png";
    }

    kitchencup.style.display = "block";
}


Previous1.addEventListener("click", () => {
    document.getElementById("first-page").style.display = "block";
    document.getElementById("second-page").style.display = "none";
});

Next1.addEventListener("click", () => {
    document.getElementById("second-page").style.display = "none";
    document.getElementById("third-page").style.display = "block";

    showCupInKitchen();
});

clickSmall.addEventListener("click", () => {
    document.getElementById("s_cup").style.display = "block";
    document.getElementById("m_cup").style.display = "none";
    document.getElementById("l_cup").style.display = "none";
    gameState.selectedCup = "small";
});

clickMed.addEventListener("click", () => {
    document.getElementById("s_cup").style.display = "none";
    document.getElementById("m_cup").style.display = "block";
    document.getElementById("l_cup").style.display = "none";
    gameState.selectedCup = "medium";
});

clickLarge.addEventListener("click", () => {
    document.getElementById("s_cup").style.display = "none";
    document.getElementById("m_cup").style.display = "none";
    document.getElementById("l_cup").style.display = "block";
    gameState.selectedCup = "large";
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

