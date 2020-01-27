var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/db";

MongoClient.connect(url, function(err, db) {
  console.log("called!");
  if (err) throw err;
  console.log("Database created!");
  db.close();
});