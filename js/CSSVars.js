function initCSSVars() {
    try {
        const SavedFontColor = localStorage.getItem("TColor") || "white";
        document.documentElement.style.setProperty('--FontColor', SavedFontColor);
        const SavedLinkColor = localStorage.getItem("LColor") || "grey";
        document.documentElement.style.setProperty('--LinkColor', SavedLinkColor);
        const SavedLinkColorHover = localStorage.getItem("LHColor") || "lightgrey";
        document.documentElement.style.setProperty('--LinkColorHover', SavedLinkColorHover);
        const SavedTextSize = localStorage.getItem("TSize") || "15";
        document.documentElement.style.setProperty('--TextSize', SavedTextSize);
        const SavedGradStop1Color = localStorage.getItem("GradStop1Color") || "black";
        document.documentElement.style.setProperty('--GradStop1', SavedGradStop1Color);
        const SavedGradStop2Color = localStorage.getItem("GradStop2Color") || "black";
        document.documentElement.style.setProperty('--GradStop2', SavedGradStop2Color);
        const SavedGradStop3Color = localStorage.getItem("GradStop3Color") || "grey";
        document.documentElement.style.setProperty('--GradStop3', SavedGradStop3Color);
        const SavedGradStop4Color = localStorage.getItem("GradStop4Color") || "black";
        document.documentElement.style.setProperty('--GradStop4', SavedGradStop4Color);
    } catch (error) {
        console.error("CSSVars.js encountered an error:", error);
    }
}
document.addEventListener('DOMContentLoaded', initCSSVars);