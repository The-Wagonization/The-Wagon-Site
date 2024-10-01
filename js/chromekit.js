if(window.location.search=="?dev"||true){
    document.getElementById("ExploitSearchContainer").style.display = "block"
}
document.getElementById("ExploitSearch-Form").addEventListener("submit", function(ev){
    ev.preventDefault()
    let searchTerms = Array.from(document.querySelectorAll(".esterm")).filter(e=>e.checked==true).map(e=>e.getAttribute("esterm-value"));
    let searchInfos = Array.from(document.querySelectorAll("searchi"));
    let chromeOsVersion = parseFloat(document.getElementById("ExploitSearch-Version").value)

    let exploitCount = 0;

    searchInfos.forEach(e=>{
        e.parentElement.style.display="block";
        let requirements = e.textContent.split(";").filter(e=>e!="");
        for(let i = 0;i<requirements.length;i++){
            if(/^v[\d.]*/.test(requirements[i]) && parseFloat(requirements[i].substring(1, requirements[i].length-1))<=chromeOsVersion ){
                e.parentElement.style.display="none"
                return;
            }
            if(!searchTerms.includes(requirements[i])){
                e.parentElement.style.display="none"
                return;
            }
            exploitCount++;
        }
    });

    document.getElementById("exploitCount").textContent = exploitCount;
})