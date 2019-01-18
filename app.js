const express = require("express")
const app = express()
const port = 3000
const data = require("./data.json")

app.use(express.static("public"))

app.get("/jokes", (req, res, next) => {
  res.status(200).send({
    "message": "success",
    "data": data
  })
})

app.get("/jokes/:tag", (req, res, next) => {
  const tag = req.params.tag
  const matching = data.jokes.filter(joke => joke.categories.includes(tag))
  data.tags.includes(tag)
  ? res.status(200).send(matching)
  : res.status(404).send("Told you not to mess with the Chuck")
})

app.post("/karate", (req, res) => {
  res.send("You messed with the Norris")
})

app.use((req, res, next) => {
  res.status(404).send("You should have not messed with The Norris")
})




const listener = () => console.log(`Watch out for Karate Chops on port: ${port}`)

app.listen(port, listener)

