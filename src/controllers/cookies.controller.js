const path = require('path')

const home = (req, res) => {
    return res.status(200).sendFile(path.resolve("src", "public", "home.html"))
}

module.exports ={home}