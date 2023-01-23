const express = require('express')
const app = express()
const port = 3000


// HELLO WORLD
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// INSIDE
app.get('/inside', (req, res) => {
  res.send('Hello Universe!')
})

// PARAMS
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

// USER MULTIPLE HANDLERS
app.get('/user', (req, res, next) => {
  res.send('this is a User')
  next()
}, (req, res, next) => {
  console.log("in the 2nd handler.")
  next()
}, (req, res) => {
  console.log("in the 3rd handler.")
})

// JSON 
app.get('/json', (req, res) => {
  // console.log(req.body);
  res.json({
    key: "value"
  })
})

// WEDNESDAY
app.get('/wednesday', (req, res) => {
  res.download('C:\\Users\\BLACKSPACE\\Desktop\\Coding\\Js\\NODE JS\\myapp\\images.jfif');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})