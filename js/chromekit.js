if (window.location.search === "?dev" || true) {
    document.getElementById("ExploitSearchContainer").style.display = "block";
}
document.getElementById("ExploitSearch-Form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    let selectedVersions = Array.from(document.querySelectorAll(".esterm"))
        .filter(e => e.checked && !isNaN(e.getAttribute("esterm-value")))
        .map(e => parseInt(e.getAttribute("esterm-value")));
    let otherSearchTerms = Array.from(document.querySelectorAll(".esterm"))
        .filter(e => e.checked && isNaN(e.getAttribute("esterm-value")))
        .map(e => e.getAttribute("esterm-value"));
    console.log("v:", selectedVersions);
    console.log("terms:", otherSearchTerms);
    let detailElements = Array.from(document.querySelectorAll("details"));
    detailElements.forEach(detail => {
        let searchInfos = Array.from(detail.querySelectorAll("searchi"));
        if (searchInfos.length === 0) {
            console.log("searchi-s nuts::", detail);
            detail.style.display = "block";
            return;
        }
        let versionMatch = searchInfos.some(e => {
            let content = e.textContent.trim();
            if (!content) return false;
            let requirements = content.split(";").map(req => req.trim());
            let maxVersion = Math.max(...requirements.filter(req => !isNaN(req)).map(Number));
            console.log("IT'S OVER 9000", requirements, "| MAX V:", maxVersion);
            return requirements.some(req => !isNaN(req) && selectedVersions.some(v => parseInt(req) <= v && parseInt(req) <= maxVersion));
        });
        let generalMatch = searchInfos.some(e => {
            let content = e.textContent.trim();
            if (!content) return false;
            let requirements = content.split(";").map(req => req.trim()).filter(req => isNaN(req));
            console.log("terms:", requirements);
            return requirements.some(req => otherSearchTerms.includes(req));
        });
        if (versionMatch && generalMatch) {
            console.log("cee:", detail);
            detail.style.display = "block";
        } else {
            console.log("dee:", detail);
            detail.style.display = "none";
        }
    });
});