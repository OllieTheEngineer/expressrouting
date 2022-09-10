const express = require('express')
const app = express();
const ExpressError = require('./expressError')

app.post('/mean', (req, res, next) => {
    // list of numbers
  let numbers = req.body['nums']
  let arrayOfNumbers = numbers.split(',');
  let sumOfNumbers = 0;
  for(let i =0; i < arrayOfNumbers.length; i++){
    let currentNumber = arrayOfNumbers[i]
    sumOfNumbers = sumOfNumbers + currentNumber
  }
    let arrayCount = arrayOfNumbers.length
    let mean = sumOfNumbers / arrayCount
    let result = {
        operation: "mean",
        result: mean
      }
    
      return res.send(result);
})

app.post('/median', (req, res, next) => {
    let numbers = req.body['nums']
    let arrayOfNumbers = numbers.sort((a, b)=> a-b);
    let middleNum = Math.floor(arrayOfNumbers.length / 2)
    let median;

    return median = arrayOfNumbers % 2 === 0 ? arrayOfNumbers[middleNum]

})

app.post('/mode', (req, res, next) => {

})


app.post('/all', (req, res, next) => {
   
})

// app.listen should always be at the bottom of your file
app.listen(3000, () => {
    console.log("Server will be running on port 3000");
})