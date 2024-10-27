const fs = require("fs");
const path = require("path");

const flashHtml = path.resolve("./Pages/flash.html");
const flashGamePathUnresolved = "/Pages/Subpages/Flash/Flash Games";
const flashGamePath = path.resolve("." + flashGamePathUnresolved);

const flashGameList = JSON.stringify(
  fs
    .readdirSync(flashGamePath, { recursive: true })
    .filter((e) => e.endsWith(".swf"))
    .map((e) => path.join(flashGamePathUnresolved, e).replaceAll("\\", "/"))
);

let html = fs.readFileSync(flashHtml, "utf-8");
html = html.replace(/\[.*\](?=; \/\/ Game file list)/, flashGameList);
fs.writeFileSync(flashHtml, html, "utf-8");
