const express = require("express")

const app = express()

app.use(express.json())

server.listen(process.env.PORT || 3000, () => {
    console.log("server running")
})