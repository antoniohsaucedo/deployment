const express = require('express')
const app =  express()
const path = require('path')
const PORT = 4004
app.use('/js', express.static(path.join(__dirname, '../client/main.js')))
app.use('/css', express.static(path.join(__dirname, '../client/index.css')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })

app.listen(PORT, () => console.log(`server is running ${PORT}`))

