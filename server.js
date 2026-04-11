/* 
Note Js Course Outline

- [ ] Install Express and Create a Basic Server
- [ ] Get Routes (Send Message to the Front-End)
- [ ] JSON (Send Data to the Front-End)
- [ ] Route Parameters
- [ ] Connect a Front-End to the Express Server
- [ ] Fix CORS Problems
- [ ] POST Routes
- [ ] Send From Data to the Back-End
- [ ] Express Router
- [ ] Advanced Routing
- [ ] Middleware
*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello from Express')
})

app.get('/about', (req, res) => {
    res.send('This is About page')
})

app.get('/contact', (req, res) => {
    res.send('This is Contat Page')
})

app.get('/products', (req, res) => {
    res.json([
        {'id': 1, 'name':'Laptop', 'price': 2999},
        {'id': 2, 'name':'Mouse', 'price': 99}
    ])
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)

    const products = [
        {'id': 1, 'name':'Laptop', 'price': 2999},
        {'id': 2, 'name':'Mouse', 'price': 99}
    ]

    const requestedProduct = products.find( (product) => product.id === id )

    res.json(requestedProduct)
})

app.get('/message', (req, res) => {
    res.json({'message' : 'Hello from your Express Bakend'})
})

app.listen(3000, ()=>{
    console.log('The server is running')
})