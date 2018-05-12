var mongodb = require("mongodb");
//import {Db, MongoClient} from "mongodb";

class DbClient {
    public db = mongodb.Db;
    public async connect() {
        //Approach-1
        //try {
            this.db = await mongodb.MongoClient.connect("mongodb://localhost:27017/SARKAR");
            console.log("Connected to Db");
            return this.db;
        //} catch (error) {
        //    console.log(error);
        //}

        //Approach-2
        /*MongoClient.connect("mongodb://localhost:27017/SARKAR")
            .then(db => {
                this.db = db;
            })
            .catch(err=>{
                console.log(err);
            })*/

        //Approach-3
        /*MongoClient.connect("mongodb://localhost:27017/SARKAR", (err, db) => {
            if (err) {
                console.log(err);
            } else {
                this.db = db;
            }
        })*/
    }
}

export = new DbClient();


