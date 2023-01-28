const { Router } = require('express');
const express = require('express')
const app = express()
const port = 3000

/*
  http://127.0.0.1:3000 => route tree.

  /
  /inside
  /users/101/books/739
  /user
  /json
  /wednesday
  /login
  /currentT
  /userId
  /error

*/


// LOGGED IN MIDDLEWARE
const myLogger = (req, res) => {
  req.myLogger = "my Logger has been set.";
  console.log(req.myLogger);
  res.send('Logged In Successfully.');
  console.log("Logged In.");
}

// CURRENT TIME MIDDLEWARE
const currentTime = (req, res) => {
  req.currentTime = Date.now();
  console.log(req);
  res.send(`<h1> Current Date is ${req.currentTime} </h1>`)
};



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

// LOGGED IN
app.get('/login', myLogger);

// CURRENT TIME
app.get('/currentT', currentTime);

// USERID
app.get('/userId/:id', (req, res, next) => {
  if(req.params.id == 0) {
    next('route') 
  }
    else {
      res.send(`id is ${req.params.id}`);
    }
})

// USERID
app.get('/userId/:id', (req, res) => {
  res.send("what an IDea sirJi");
})

app.get('/error', (req, res) => {
  throw new Error("Error has occured. 'Something went wrong'");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})