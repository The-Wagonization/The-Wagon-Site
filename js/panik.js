document.addEventListener("keydown", function(event) {
    if (event.key === '`') {
        const PanicURL = localStorage.getItem("p") || "https://classroom.google.com/u/1/";
        console.log("yoinkers");
        window.open(PanicURL);
        window.top.close();
    }
});
