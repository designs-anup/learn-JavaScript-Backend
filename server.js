const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello from Express')
})

app.get('/about', (req, res) => {
    res.send('This is About page')
})

app.listen(3000, ()=>{
    console.log('The server is running')
})