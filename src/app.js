const express = require("express")
const app = express()
const PORT = 3700
const cookieParser = require("cookie-parser");
const sessions = require('express-session');


app.get("/usuario", (req,res) => {
    res.sendFile(__dirname, "usuario.html")
})

app.listen(PORT, () => console.log("estoy vivo en el puerto", PORT))


