const express = require("express")
const multer = require("multer")
const cors  = require("cors")
const app = express()
app.use(cors())
const upload = multer({dest:"uploads/"})

app.post("/api/upload",upload.single("image"),(req,res) =>{
    const imageFile = req.file

    console.log((imageFile));
    res.sendStatus(200)

})

app.listen(5000,() =>{
    console.log("server running on 5000");
})