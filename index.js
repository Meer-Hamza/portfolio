 const express = require('express')
const mongoose=require('mongoose')
const cons = require('consolidate')
const path = require('path')
const app = express()
const port = 3000

const DB = 'mongodb+srv://hamza:maliksab@cluster0.8646zrl.mongodb.net/hamza?retryWrites=true&w=majority'

app.use(express.urlencoded({extended : true}));
app.use(express.static('views'));

mongoose.connect(DB)
.then(()=>{
  console.log("Data Stored")
}).catch(()=>{
  console.log("not stored")
})

const User = require('./model/user')

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('contact-us')
  })

  app.post('/', async (req, res) => {
    const data = new User(req.body)
    await data.save()
    res.send("saved")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})