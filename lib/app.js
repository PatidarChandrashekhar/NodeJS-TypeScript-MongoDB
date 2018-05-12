"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DbClient = require("./commom/DbClient");
class App {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Starting apllication.....!");
            try {
                let db = yield DbClient.connect();
                //Insert one record
                let result = yield db.collection("MyTest").insertOne({
                    Name: "Shekhar", Phone: "4164142225"
                });
                console.log(result.insertedId);
                //Select All records
                let docs = yield db.collection("MyTest").find().toArray();
                console.log(docs);
            }
            catch (error) {
                console.log("Unable to connect to database");
            }
        });
    }
}
const app = new App();
app.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOENBQThDO0FBRTlDO0lBQ2lCLEtBQUs7O1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQ3pDLElBQUk7Z0JBQ0EsSUFBSSxFQUFFLEdBQUcsTUFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRWxDLG1CQUFtQjtnQkFDbkIsSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFDakQsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWTtpQkFDdkMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUUvQixvQkFBb0I7Z0JBQ3BCLElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUVyQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQzthQUNoRDtRQUVMLENBQUM7S0FBQTtDQUNKO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGJDbGllbnQgPSByZXF1aXJlKFwiLi9jb21tb20vRGJDbGllbnRcIilcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBhcGxsaWNhdGlvbi4uLi4uIVwiKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYiA9IGF3YWl0IERiQ2xpZW50LmNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vSW5zZXJ0IG9uZSByZWNvcmRcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJNeVRlc3RcIikuaW5zZXJ0T25lKHtcclxuICAgICAgICAgICAgICAgIE5hbWU6IFwiU2hla2hhclwiLCBQaG9uZTogXCI0MTY0MTQyMjI1XCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5pbnNlcnRlZElkKTtcclxuXHJcbiAgICAgICAgICAgIC8vU2VsZWN0IEFsbCByZWNvcmRzXHJcbiAgICAgICAgICAgIGxldCBkb2NzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIk15VGVzdFwiKS5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2NzKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gY29ubmVjdCB0byBkYXRhYmFzZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpOyJdfQ==