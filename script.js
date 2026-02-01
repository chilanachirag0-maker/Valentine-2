const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.3;

const overlay = document.getElementById("soundOverlay");
const soundBtn = document.getElementById("soundBtn");

soundBtn.addEventListener("click", () => {
    bgMusic.play();
    overlay.style.display = "none";
});

// EXISTING LOGIC
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

document.querySelector(".no-button").onclick = () => {
    const noBtn = document.querySelector(".no-button");
    const yesBtn = document.querySelector(".yes-button");

    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const size = parseFloat(getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = size * 1.4 + "px";
};

document.querySelector(".yes-button").onclick = () => {
    window.location.href = "yes_page.html";
};
