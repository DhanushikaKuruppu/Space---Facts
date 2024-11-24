// script.js
const funFacts = [
    "I laughed so hard during a meeting once, my headphones flew off and hit my cat 😹",
    "I accidentally sent a meme to my boss instead of my work report 🙈",
    "I once tried to high-five someone who was just stretching 🖐️",
    "I waved back at someone who was actually waving to the person behind me 👋"
];

const factDisplay = document.getElementById('factDisplay');
const newFactBtn = document.getElementById('newFactBtn');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

function displayNewFact() {
    factDisplay.textContent = getRandomFact();
}

// Display initial fact when page loads
displayNewFact();

// Add click event listener to button
newFactBtn.addEventListener('click', displayNewFact);
