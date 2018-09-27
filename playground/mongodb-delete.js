// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
 if (err){
  console.log('Unable to connect to MongoDB server');
 }
 console.log('Connected to MongoDB server')

 //delete many
 // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
 //  console.log(result);
 // });


 //deleteOne
 // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
 //  console.log(result);
 // });

 //findOneAndDelete
 // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
 //  console.log(result);
 // });

 // db.collection('Users').deleteMany({name: 'Barseron'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5bac93d476662b0f03be67e2")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

 // db.close(); 
});