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

// ===== MUSIC AUTOPLAY LOGIC =====
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.4;
let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        bgMusic.play().catch(() => {});
        musicStarted = true;

        document.removeEventListener("click", startMusic);
        document.removeEventListener("scroll", startMusic);
        document.removeEventListener("touchstart", startMusic);
    }
}

// Start music on first interaction
document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);
document.addEventListener("touchstart", startMusic);

// ===== BUTTON LOGIC =====
function handleNoClick() {
    startMusic();

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    startMusic();
    window.location.href = "yes_page.html";
}
