const express = require("express")
const app = express()
const port = 707
const data = require("./data.json")

app.use(express.static("public"))

app.get("/jokes", (req, res, next) => {
  res.status(200).send({
    "message": "success",
    "data": data
  })
})


const listener = () => console.log(`Watch out for karate chops on port: ${port}`)

app.listen(port, listener)

