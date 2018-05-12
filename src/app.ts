import DbClient = require("./common/DbClient")

class App {
    public async start() {
        console.log("Starting apllication.....!")
        try {
            let db = await DbClient.connect();

            //Insert one record
            let result = await db.collection("MyTest").insertOne({
                Name: "Shekhar", Phone: "4164142225"
            });
            console.log(result.insertedId);

            //Select All records
            let docs = await db.collection("MyTest").find().toArray();
            console.log(docs);

        } catch (error) {
            console.log("Unable to connect to database");
        }

    }
}

const app = new App();
app.start();