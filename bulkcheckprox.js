const fs = require("fs")
const pageHtml = fs.readFileSync("./Pages/ProxList.html", "utf-8")

console.log(pageHtml)