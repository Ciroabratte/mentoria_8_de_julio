const path = require('path')

const home = (req, res) => {
    return res.status(200).sendFile(path.resolve("src", "public", "home.html"))
}

const usuario = (req, res) => {
    return res.status(200).sendFile(path.resolve("src", "public", "usuario.html"))
}




module.exports ={home, usuario}
