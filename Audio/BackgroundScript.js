window.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-music');
    if (sessionStorage.getItem('musicTime')) {
        audio.currentTime = sessionStorage.getItem('musicTime');
    }
    audio.play();

    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('musicTime', audio.currentTime);
    });
});