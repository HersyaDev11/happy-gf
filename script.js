
const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('background-music');

playPauseBtn.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.textContent = 'Pause Music';
    } else {
        backgroundMusic.pause();
        playPauseBtn.textContent = 'Play Music';
    }
});
