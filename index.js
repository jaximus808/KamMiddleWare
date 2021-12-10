const express = require("express")
const app = express();

//api steps

//1. listening
//2. middleware
//3. final function

//middle ware through parameters
app.get("/", (req,res,next) =>
{
    //we can change the req object and this modified req object can be accessed in the next function
    req.name = "John Adam";
    next()
},(req,res) =>
{
    //would send the text "John Adam"
    res.send(req.name)
})

//middle ware through app.use

const ourJson = (req,res, next) =>
{
    //converts the body into json and stores it in json
    req.body = req.body.json()
    next()
}
//all routes use this middleware
app.use(ourJson)

app.use("/nuts", (req,res,next) =>
{
    req.car = "toyota"
    next()
})

app.get("/nuts", (req,res) =>
{
    //would send toyota
    res.send(req.car)
})

app.get("/uwa", (req,res) =>
{
    //would send nothing because req.car is undefined
    res.send(req.car)
})

app.listen(3000)