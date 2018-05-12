"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var mongodb = require("mongodb");
//import {Db, MongoClient} from "mongodb";
class DbClient {
    constructor() {
        this.db = mongodb.Db;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            //Approach-1
            //try {
            this.db = yield mongodb.MongoClient.connect("mongodb://localhost:27017/SARKAR");
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
        });
    }
}
module.exports = new DbClient();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL0RiQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQywwQ0FBMEM7QUFFMUM7SUFBQTtRQUNXLE9BQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBNkIzQixDQUFDO0lBNUJnQixPQUFPOztZQUNoQixZQUFZO1lBQ1osT0FBTztZQUNILElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkIsbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixHQUFHO1lBRUgsWUFBWTtZQUNaOzs7Ozs7b0JBTVE7WUFFUixZQUFZO1lBQ1o7Ozs7OztnQkFNSTtRQUNSLENBQUM7S0FBQTtDQUNKO0FBRUQsaUJBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtb25nb2RiID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XHJcbi8vaW1wb3J0IHtEYiwgTW9uZ29DbGllbnR9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jbGFzcyBEYkNsaWVudCB7XHJcbiAgICBwdWJsaWMgZGIgPSBtb25nb2RiLkRiO1xyXG4gICAgcHVibGljIGFzeW5jIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgLy9BcHByb2FjaC0xXHJcbiAgICAgICAgLy90cnkge1xyXG4gICAgICAgICAgICB0aGlzLmRiID0gYXdhaXQgbW9uZ29kYi5Nb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9TQVJLQVJcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIERiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYjtcclxuICAgICAgICAvL30gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICAvL0FwcHJvYWNoLTJcclxuICAgICAgICAvKk1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L1NBUktBUlwiKVxyXG4gICAgICAgICAgICAudGhlbihkYiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRiID0gZGI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgLy9BcHByb2FjaC0zXHJcbiAgICAgICAgLypNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy9TQVJLQVJcIiwgKGVyciwgZGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGIgPSBkYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKi9cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0ID0gbmV3IERiQ2xpZW50KCk7XHJcblxyXG5cclxuIl19