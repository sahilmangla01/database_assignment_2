const {MongoClient} = require('mongodb')

const uri="mongodb+srv://manglasahil9050:Drumsofliberation@cluster0.k69emc1.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

const client = new MongoClient(uri, {useNewUrlParser:true})

module.exports = client