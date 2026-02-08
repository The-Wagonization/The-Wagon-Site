// TODO: Make it completely asynchronous so it tests the sites simultaneously
// TODO: Add more status codes & site specific checks
(async()=>{
const fs = require("fs")
const path = require("path")
let pageHtmlPath = path.join(__dirname, "..", "Pages", "ProxList.html")  // Fixed path
let pageHtml = fs.readFileSync(pageHtmlPath, "utf-8")

while(true){
    const regex = /<a id="ND" href="(https:\/\/.*?)">.*?<\/a>/g  // Moved inside
    let res = regex.exec(pageHtml)
    if(res==null)break;
    
    if(res[1].startsWith("http")){
        console.log("\x1b[1;37mte sting: "+res[1])
        let isValid = false
        try{
            isValid = ![404,403, 500].includes(((await fetch(res[1], {
                headers: {
                    "User-Agent":"Mozilla/5.0 (X11; CrOS x86_64 16181.61.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.198 Safari/537.36"
                }
            })).status))
        }catch(err){
            console.warn(err)
        }
        if(isValid){
            console.log(`\x1b[1;32m${res[1]} valid`)
        }else{
            console.log(`\x1b[1;31m${res[1]} is bullshit`)
            pageHtml = pageHtml.replace(res[0], "")
        }
    }
}

console.log("\x1b[0mtested links")
fs.writeFileSync(pageHtmlPath, pageHtml, "utf-8")
process.exit()
})()
