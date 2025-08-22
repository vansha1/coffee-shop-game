window.gameState = {
  selectedCup: null
};

const characters = [
    { name: "Sam", image: "img_sam.png" },
    { name: "Nan", image: "img_nan.png" },
    { name: "Ava", image: "img_ava.png" },
    { name: "Leo", image: "img_leo.png" },
    { name: "Mia", image: "img_mia.png" },
    { name: "Ben", image: "img_ben.png" },
    { name: "Ivy", image: "img_ivy.png" },
    { name: "Zoe", image: "img_zoe.png" },
    { name: "Kai", image: "img_kai.png" },
    { name: "Eli", image: "img_eli.png" }
];

const drinkRecipes = {
    "Espresso": {
        Small: { espresso: 4, milk: 0, foam: 0, chocolate: 0, water: 0 },
        Medium: { espresso: 6, milk: 0, foam: 0, chocolate: 0, water: 0 },
        Large: { espresso: 8, milk: 0, foam: 0, chocolate: 0, water: 0 }
    },
    "Americano": {
        Small: { espresso: 2, milk: 0, foam: 0, chocolate: 0, water: 2 },
        Medium: { espresso: 3, milk: 0, foam: 0, chocolate: 0, water: 3 },
        Large: { espresso: 4, milk: 0, foam: 0, chocolate: 0, water: 4 }
    },
    "Latte": {
        Small: { espresso: 1, milk: 2, foam: 1, chocolate: 0, water: 0 },
        Medium: { espresso: 2, milk: 3, foam: 1, chocolate: 0, water: 0 },
        Large: { espresso: 3, milk: 4, foam: 1, chocolate: 0, water: 0 }
    },
    "Cappucino": {
        Small: { espresso: 1, milk: 2, foam: 1, chocolate: 0, water: 0 },
        Medium: { espresso: 2, milk: 2, foam: 2, chocolate: 0, water: 0 },
        Large: { espresso: 2, milk: 3, foam: 3, chocolate: 0, water: 0 }
    },
    "Mocha": {
        Small: { espresso: 1, milk: 1, foam: 1, chocolate: 1, water: 0 },
        Medium: { espresso: 2, milk: 1, foam: 1, chocolate: 2, water: 0 },
        Large: { espresso: 2, milk: 2, foam: 2, chocolate: 2, water: 0 }
    },
    "Flat White": {
        Small: { espresso: 2, milk: 2, foam: 0, chocolate: 0, water: 0 },
        Medium: { espresso: 3, milk: 3, foam: 0, chocolate: 0, water: 0 },
        Large: { espresso: 4, milk: 4, foam: 0, chocolate: 0, water: 0 }
    },
    "Hot Chocolate": {
        Small: { espresso: 0, milk: 2, foam: 1, chocolate: 1, water: 0 },
        Medium: { espresso: 0, milk: 3, foam: 1, chocolate: 2, water: 0 },
        Large: { espresso: 0, milk: 4, foam: 1, chocolate: 3, water: 0 }
    },
};

const milks = ["Whole", "Oat", "Almond"];
const sweeteners = ["Sugar", "Honey", "Stevia", "No sweeteners"];
function generateCustomer() {
    const person = characters[Math.floor(Math.random() * characters.length)];
    const drinkNames = Object.keys(drinkRecipes);
    const drink = drinkNames[Math.floor(Math.random() * drinkNames.length)];
    const size = ["Small", "Medium", "Large"][Math.floor(Math.random() * 3)];
    const milk = milks[Math.floor(Math.random() * milks.length)];
    const sweetener = sweeteners[Math.floor(Math.random() * sweeteners.length)];
    const pumps = drinkRecipes[drink][size];

    const order = {
        drink: drink,
        size: size,
        milk: milk,
        sweetener: sweetener,
        pumps: pumps
    };

    return {
        name: person.name,
        image: `/Images/Characters/${person.image}`,
        orders: [order],
        orderStartTime: Date.now(),
        orderTimeLimit: 120000, // fixed 2-minute limit
        isActive: true
    };
}

const customer = generateCustomer();
const order = customer.orders[0];

// Set character image, my image, other buttons' image
document.getElementById("character").src = customer.image;
document.getElementById("me").src = "Images/Characters/me.png";
document.getElementById("kitchen_button").src = "Images/Buttons/ToTheKitchen.png";
document.getElementById("refresh").src = "Images/Buttons/New_game.png";

// Conversation logic
const bubbleContainer1 = document.getElementById("bubble-container1");
const bubbleText1 = document.getElementById("bubble-text1");
const bubbleContainer2 = document.getElementById("bubble-container2");
const bubbleText2 = document.getElementById("bubble-text2");

const conversation1 = [
  "Hello! What can I get you today?",
  "Sure, what name would you like on your drink?",
];

let line1 = `I’d like some ${order.drink}, please. ${order.size}`;

// Check if milk is used in this recipe
if (order.pumps.milk > 0) {
  line1 += `, with ${order.milk} milk and ${order.sweetener.toLowerCase()}.`;
} else {
  line1 += `, with ${order.sweetener.toLowerCase()}.`;
}

const conversation2 = [
  line1,
  `It's ${customer.name}, thanks!`
];

let currentLine = 0;



function showNextLine() {
  if (currentLine >= conversation1.length + conversation2.length) return;

  // Hide both current bubbles
  bubbleContainer1.classList.remove("visible");
  bubbleContainer2.classList.remove("visible");

  setTimeout(() => {
    if (currentLine % 2 === 0) {
      const index = currentLine / 2;
      bubbleText1.innerText = conversation1[index];
      bubbleContainer1.classList.add("visible");
    } else {
      const index = Math.floor(currentLine / 2);
      bubbleText2.innerText = conversation2[index];
      bubbleContainer2.classList.add("visible");
    }

    // Handle final bubble timeout
    if (currentLine === conversation1.length + conversation2.length - 1) {
    setTimeout(() => {
        bubbleContainer2.classList.remove("visible");
        conversationFinished = true;  //  allow hover now

        kitchenButton.style.opacity = "1";
        kitchenButton.style.pointerEvents = "auto";
        }, 1800); // 1.8 seconds
    }

    currentLine++;
  }, 300); // transition delay
}

const characterWrapper = document.getElementById("character-wrapper");

characterWrapper.addEventListener("mouseenter", () => {
  if (conversationFinished) {
    characterWrapper.classList.add("hover-effect");

    const summary = `${customer.name}: ${order.size} ${order.drink}, ${order.pumps.milk > 0 ? order.milk + ' milk, ' : ''}${order.sweetener}`;
    bubbleText2.innerText = summary;
    bubbleContainer2.classList.add("visible");
  }
});

characterWrapper.addEventListener("mouseleave", () => {
  characterWrapper.classList.remove("hover-effect");

  if (conversationFinished) {
    bubbleContainer2.classList.remove("visible");
    kitchenButton.classList.add("enabled");
  }
});

const startText = document.getElementById("start-text");
const refreshButton = document.getElementById("refresh");
const kitchenButton = document.getElementById("kitchen_button");


let gameStarted = false;

document.body.addEventListener("click", () => {
  if (!gameStarted) {
    gameStarted = true;
    startText.style.display = "none";

    refreshButton.classList.add("enabled");
    
    // Show the first line only
    showNextLine();
  } else {
    // For all future clicks
    showNextLine();
  }
});



document.getElementById("refresh").addEventListener("click", () => {
  location.reload();
});

kitchenButton.addEventListener("click", () => {
  if (conversationFinished) {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
  }
});

