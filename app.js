const express = require('express')
const app = express();
const ExpressError = require('./expressError')

app.get('/mean', (req, res, next) => {
  let result = {
    operation: "mean",
    result: meanFinder(nums)
  }
})

app.get('/median', (req, res, next) => {

})

app.get('/mode', (req, res, next) => {

})


app.get('/all', (req, res, next){
    try {

    }
})

// app.listen should always be at the bottom of your file
app.listen(3000, () => {
    console.log("Server will be running on port 3000");
})