const express = require('express')
require('dotenv').config()
const port = process.env.PORT;
const client = require('./connection')
const route = require("./Router/route")

const app = express();
app.use(express.json())

async function dbConnect(){
    try{
        await client.connect();
        console.log("connect to database");
    }
    catch(err){
        console.log(err);
    }
}
dbConnect()

app.use('/api' , route)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port , ()=>{
    console.log(`Server is live on port ${port}`);
})