const bodyParser = require('body-parser')
const { compareSync } = require('bcrypt');
const express = require('express')
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const ExpressError = require('./expressError')

app.get('/mean', (req, res, next) => {
    // list of numbers
    // console.log(req.body)
  let numbers = req.query.nums
  console.log(numbers)
  let arrayOfNumbers = numbers.split(',');
  let sumOfNumbers = 0;
  for(let i =0; i < arrayOfNumbers.length; i++){
    let currentNumber = Number(arrayOfNumbers[i])
    sumOfNumbers = sumOfNumbers + currentNumber;
    console.log(sumOfNumbers)
  }
    let arrayCount = arrayOfNumbers.length
    let mean = sumOfNumbers / arrayCount
    let result = {
        operation: "mean",
        result: mean
      }
    
      return res.send(result);
})

app.get('/median', (req, res, next) => {
    //grab nums from an array
  // sort the array
  // return the median value
    let numbers = req.query.nums
    let arrayOfNumbers = numbers.split(',');
    let sortedArrayOfNumbers = arrayOfNumbers.sort((a, b)=> a-b);
    let middleInd = Math.floor(sortedArrayOfNumbers.length % 2 === 0)
    let median = sortedArrayOfNumbers[middleInd]

    let result = {
        operation: "median",
        result: median
    }
    return res.send(result)
})

app.get('/mode', (req, res, next) => {

})


app.get('/all', (req, res, next) => {
   
})

// app.listen should always be at the bottom of your file
app.listen(3000, () => {
    console.log("Server will be running on port 3000");
})