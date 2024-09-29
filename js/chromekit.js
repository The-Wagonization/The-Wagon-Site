if(window.location.search=="?dev"){
    document.getElementById("ExploitSearchContainer").style.display = "block"
}
document.getElementById("ExploitSearch-Form").addEventListener("submit", function(ev){
    ev.preventDefault()
    let searchTerms = Array.from(document.querySelectorAll(".esterm")).filter(e=>e.checked==true).map(e=>e.getAttribute("esterm-value"));
    let searchInfos = Array.from(document.querySelectorAll("searchi"));
    let chromeOsVersion = document.getElementById("ExploitSearch-Version")
    

    searchInfos.forEach(e=>{
        e.parentElement.style.display="block";
        let requirements = e.textContent.split(";").filter(e=>e!="");
        // console.log(requirements.join()+":::::::::"+ searchTerms.join())
        for(let i = 0;i<requirements.length;i++){
            if(!searchTerms.includes(requirements[i]))e.parentElement.style.display="none"
        }
    });
})