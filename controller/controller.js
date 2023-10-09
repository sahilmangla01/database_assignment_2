const client = require('../connection')

const db = client.db('Human__Resources');
const collection = db.collection("employee")

function addNewUser(req,res){
    try{
        collection.insertMany([{
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "roh",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          }])
          res.send('data inserted')
    }
    catch(err){
        res.send('error occured' , err)
    }

}
// Querry: Find All 
async function findAll(req,res){
    try{
        const data = await collection.find().toArray()
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}

//Querry: FindSalary
async function FindSalary(req,res){
    try{
        const data = await collection.find({"salary":{$gt:"30000"}}).toArray()
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}

//Querry: FindExperience
async function FindExperience(req,res){
    try{
        const data = await collection.find({"overallExp":{$gt:"2"}}).toArray()
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}
//Querry: Find3
async function Find3(req,res){
    try{
        const data = await collection.find({"overallExp":{$gt:"1"}},{"yearGrad":{$gt:"2015"}}).toArray()
    res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}

// Querry : Update Salary
async function updateSalary(req,res){
    try{
        const data = await collection.updateMany({"salary":"35000"},{$set :{"salary":"40000"}})
        res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}
// Querry : delete
async function deleteQuerry(req,res){
    try{
        const data = await collection.deleteMany({"lastCompany":"Y"})
        res.status(200).send({user:data})
    }
    catch(err){
        res.status(500).send('error occured' , err)
    }
}




module.exports = {addNewUser , findAll,FindSalary ,FindExperience , Find3 , updateSalary , deleteQuerry}