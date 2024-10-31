function createHearts() {
    const buttonContainer = document.querySelector('.button-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    buttonContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Audio player functionality
const audio = document.getElementById("audio");

// Only declare the following variables once
let playPauseButton = document.getElementById("playPauseButton");
let progressBar = document.getElementById("progressBar");
let currentTimeDisplay = document.getElementById("currentTime");
let durationDisplay = document.getElementById("duration");

// Set volume to 60% once metadata is loaded
audio.addEventListener("loadedmetadata", function() {
    audio.volume = 0.6;
});

// Play/Pause button functionality
playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        this.textContent = "⏸️";  // Change icon to pause
    } else {
        audio.pause();
        this.textContent = "▶️";  // Change icon to play
    }
});

// Update progress bar and time display
audio.addEventListener("timeupdate", function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;

    // Update displayed times
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
});

// Rewind and forward buttons
document.getElementById("rewindButton").addEventListener("click", function () {
    audio.currentTime -= 10; // rewind 10 seconds
});

document.getElementById("forwardButton").addEventListener("click", function () {
    audio.currentTime += 10; // forward 10 seconds
});

// Seek audio when progress bar is clicked
progressBar.addEventListener("input", function () {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Format time in mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}