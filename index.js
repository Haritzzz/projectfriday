const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const MyModel = require("./model/on-off_model")
require('dotenv').config()
app.use(express.json())
const DBConnection = () => {
    return mongoose.connect(process.env.connect_mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((result) => { console.log("DB CONNECTED SUCCESSFULLY") })
        .catch((error) => { console.log(error) })
}
DBConnection()
const friday = async (req, res) => {
    try{
        const data = MyModel(req.body)
        await data.save()
        res.json(data)
    }catch (error){res.json(error)}
}
const GetData = async (req, res) => {
    try {
        const data = await MyModel.find()
        res.json(data)
    } catch (error) { res.json({ Message: "Error", error }) }
}
app.post("/add", friday)
app.get("/", GetData)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})