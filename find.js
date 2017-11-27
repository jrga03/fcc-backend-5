// var mongo = require('mongodb').MongoClient;
// mongo.connect(url, )

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
    // if (err) { console.error('error') }
    // var collection = db.collection('parrots');
    // collection.find({
    //     age: process.argv[3].parseInt()
    // }).toArray(function(err, documents) {
    //     if (err) { console.error('error') }
    //     console.log(documents);
    // });
    db.close();
});

// console.log(process.argv[3].parseInt(), 'tetsrda');