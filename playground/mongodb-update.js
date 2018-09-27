// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
 if (err){
  console.log('Unable to connect to MongoDB server');
 }
 console.log('Connected to MongoDB server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bacb5ef1a5a7a0a96978fae')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5bac941e7802e30f17e8a4fb')
 }, {
   $set: {
     name: 'Shannel Kosgei',
     location:'Egerton'
   },
   $inc: {
     age: 22
   }
 }, {
   returnOriginal: false
 }).then((result) => {
   console.log(result);
 });



 // db.close(); 
});