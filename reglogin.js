const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL ="mongodb://localhost:27017/" ;
const DATABASE_NAME = "stuinfo";
var app = Express();
var cors = require('cors')
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("register");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });

});


app.post("/login", (request, response) => {
   
    collection.findOne(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        if(!result)
        {
            console.log("login fail")
        }
        else
        {
            console.log("login pass") 
        }
        response.send(result);
        
    });
});


app.post("/reg", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});



