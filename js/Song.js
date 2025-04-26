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
                    songPath = "..\The-Wagon-Site\Audio\CrucifiedInHeaven.mp3";
                    break;
                case "Make it look like an Accident":
                case "MiLLaA":
                    songPath = "..\The-Wagon-Site\Audio\MakeItLookLikeAnAccident.mp3";
                    break;
                case "Map of the Stars":
                case "MotS":
                    songPath = "..\The-Wagon-Site\Audio\MapOfTheStars.mp3";
                    break;
                case "Night Demon Theme":
                case "NDT":
                    songPath = "..\The-Wagon-Site\Audio\NightDemonTheme.mp3";
                    break;
                case "Overwerk":
                    songPath = "..\The-Wagon-Site\Audio\Overwerk.mp3";
                    break;
                case "In the End":
                case "ItE":
                    songPath = "..\The-Wagon-Site\Audio\Time.mp3";
                    break;
                case "shut the fuck up":
                case "n":
                    songPath = null;
                    break;
                default:
                    songPath = "..\The-Wagon-Site\Audio\CrucifiedInHeaven.mp3";
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