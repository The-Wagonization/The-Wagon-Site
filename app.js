// Requiring module
const express = require('express');

// Creating express object
const app = express();

app.use((req, res, next)=>{
    if(req.path.startsWith("/.git")||req.path.startsWith("/node_modules"))return;
    next()
})
app.get("/", (req, res)=>{
    res.redirect("/Pages/Home.html")
})
app.use(express.static("./"))

// Handling GET request
// app.get('/', (req, res) => { 
//     res.send('node is '
//         + 'noding') 
//     res.end() 
// }) 

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));