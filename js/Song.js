function songInit() {const audioElement = document.getElementById('background-music');
    if (!audioElement) {
        console.error("Audio element not found");
        return;
    }
    const savedSong = localStorage.getItem("selectedSong");
    audioElement.src = savedSong;
    console.log("song:", savedSong);
    const savedTime = sessionStorage.getItem('musicTime');
    if (savedTime) {
        audioElement.currentTime = parseFloat(savedTime);
    }
    const songForm = document.getElementById("Song-Form");
    if (songForm) {
        songForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputElement = document.getElementById("Song");
            const newSong = inputElement.value.trim();
            let songPath;
            switch (newSong) {
                case "Crucified in Heaven":
                case "CiH":
                    songPath = "../../Audio/CrucifiedInHeaven.mp3";
                    break;
                case "Make it look like an Accident":
                    songPath = "../../Audio/MakeItLookLikeAnAccident.mp3";
                    break;
                case "Map of the Stars":
                    songPath = "../../Audio/MapOfTheStars.mp3";
                    break;
                case "Overwerk":
                    songPath = "../../Audio/Overwerk.mp3";
                    break;
                case "Night Demon Theme":
                    songPath = "../../Audio/NightDemonTheme.mp3";
                    break;
                case "shut the fuck up":
                    songPath = null;
                    break;
                default:
                    songPath = "../../Audio/CrucifiedInHeaven.mp3";
            }
            if (songPath) {
                localStorage.setItem("selectedSong", songPath);
                audioElement.src = songPath;
                audioElement.play().catch((err) => {
                    console.error("nuh song:", err);
                });
                console.log("song:", songPath);
            } else {
                console.log("nuh uh, silence");
            }
        });
    } else {
        console.error("song not formed");
    }
    window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("musicTime", audioElement.currentTime);
        console.log("song progress saved:", audioElement.currentTime);
    });
}