const cool = require('cool-ascii-faces')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(cool())
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})