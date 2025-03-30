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

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yespage.html";
}
// Auto-play music with a workaround for browser restrictions
window.addEventListener("load", function() {
    const music = document.getElementById("backgroundMusic");
    music.muted = false; // Unmute after loading
    music.play().catch(() => {
        console.log("Autoplay with sound blocked, user must interact.");
    });
});

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
        document.querySelector('.music-button').textContent = "🔇 Mute Music";
    } else {
        music.pause();
        document.querySelector('.music-button').textContent = "🔊 Play Music";
    }
}