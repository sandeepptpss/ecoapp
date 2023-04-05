var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const client= new MongoClient(url);
const databaseName='e-comm'
try {
    var myobj = { name: "Nokia 11 max", brand: "Nokia" , price: "10000", category :"mobile" };
    addd(myobj).then(res=>{
        console.log('res', res)
    });

} catch (error) {
    console.log('error'. error);
}

async function addd(doc)
    {
        let result = await client.connect();
        db= result.db(databaseName);
        collection = db.collection('products');
        let data = await collection.insertOne(doc)
        return data;
    }