require('dotenv').config()
const express  = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

app.get('/', (req,res) => {
    res.send('<h1>Hello Bruno</h1>')
})

app.post('/login', (req,res) => {
    const username = req.body.username
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)

    res.json({accessToken: accessToken})

})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server Running on port ${port}`))