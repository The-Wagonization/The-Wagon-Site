if (window.location.search === "?dev" || true) {
    document.getElementById("ExploitSearchContainer").style.display = "block";
}
document.getElementById("ExploitSearch-Form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    let searchTerms = Array.from(document.querySelectorAll(".esterm"))
        .filter(e => e.checked)
        .map(e => e.getAttribute("esterm-value"));
    console.log("terms:", searchTerms);
    let detailElements = Array.from(document.querySelectorAll("details"));
    detailElements.forEach(detail => {
        let searchInfos = Array.from(detail.querySelectorAll("searchi"));
        if (searchInfos.length === 0) {
            console.log("searchi-s nust:", detail);
            detail.style.display = "block";
            return;
        }
        let versionMatch = searchInfos.some(e => {
            let content = e.textContent.trim();
            if (!content) return false;
            let requirements = content.split(";").map(req => req.trim()).filter(req => req !== "");
            return requirements.some(req => searchTerms.includes(req) && !isNaN(req));
        });
        let generalMatch = searchInfos.some(e => {
            let content = e.textContent.trim();
            if (!content) return false;
            let requirements = content.split(";").map(req => req.trim()).filter(req => req !== "");
            return requirements.some(req => searchTerms.includes(req) && isNaN(req));
        });
        if (versionMatch && generalMatch) {
            console.log("see:", detail);
            detail.style.display = "block";
        } else {
            console.log("dee:", detail);
            detail.style.display = "none";
        }
    });
});