const express = require('express')
const mangoose = require('mongoose')
const routes = require ('./routes/score')
const cors = require('cors');
​
const app = express();
//use cors 
app.use(cors())
const port = 4000;
const dbURL = 'mongodb+srv://guessinggame:12345@cluster0.03hjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
​
//connecting to the mongo cloud db through the mongoose package 
mangoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })
​
//in order to let express parse JSON 
app.use(express.json())
//routes 
app.use('/api',routes)
​
//starting the server at the port of your choice 
app.listen(process.env.PORT || port, () => {
    console.log("app is listening at port", port)
    var url = "mongodb+srv://blllrpy: sendhelp09 @projects.6btckj8.mongodb.net/?retryWrites=true&w=majority";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });