const {MongoClient} = require('mongodb')

const uri=process.env.Mongo-uri 

const client = new MongoClient(uri, {useNewUrlParser:true})

module.exports = client