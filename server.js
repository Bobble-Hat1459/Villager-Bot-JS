const express = require("express")
const server = express()

server.all("/", (req, res) => {
  res.send("Bot is Online")
})

function stillAlive() {
  server.listen(3000, () => {
    console.log("And believe me I am, still alive")
  })
}

module.exports = stillAlive