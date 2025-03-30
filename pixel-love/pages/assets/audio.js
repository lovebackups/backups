document.addEventListener("DOMContentLoaded", function () {
    // Check if an audio player already exists in window
    if (!window.audioPlayer) {
        let existingAudio = sessionStorage.getItem("audioPlaying");

        if (!existingAudio) {
            let audio = new Audio("./assets/audio/intro-ari.mp3"); // Ensure correct path
            audio.loop = true;
            audio.volume = 0.5;

            // Append audio to the body
            document.body.appendChild(audio);

            // Store the audio globally so it persists across pages
            window.audioPlayer = audio;
            sessionStorage.setItem("audioPlaying", "true");

            console.log("Audio initialized.");

            // Ensure audio plays after user interaction (fixes autoplay block)
            function playAudio() {
                audio.play().then(() => {
                    console.log("Audio is playing.");
                    document.body.removeEventListener("click", playAudio);
                }).catch(error => {
                    console.log("Autoplay blocked, user needs to interact.");
                });
            }

            document.body.addEventListener("click", playAudio, { once: true });

        } else {
            // If audio exists, reuse the existing instance to avoid silence
            window.audioPlayer = new Audio("./assets/audio/intro-ari.mp3");
            window.audioPlayer.loop = true;
            window.audioPlayer.volume = 0.5;
            window.audioPlayer.play().catch(error => console.log("Autoplay blocked."));
            console.log("Reusing existing audio instance.");
        }
    }
});
