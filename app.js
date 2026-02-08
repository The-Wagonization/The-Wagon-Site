const express = require('express');
const app = express();
app.use((req, res, next)=>{
    if(req.path.startsWith("/.git")||req.path.startsWith("/node_modules")){
        return res.status(403).send("Forbidden");
    }
    next()
})
app.get("/", (req, res)=>{
    res.redirect("/Pages/Home.html")
})
app.use(express.static("./"))
const PORT = process.env.PORT ||5000;
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
