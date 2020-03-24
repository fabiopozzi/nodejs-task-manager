// CRUD exploration
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({"_id" : new ObjectID("5e7a1962b3743022fcc266c0")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 36 }).toArray((error, result) => {
    //     console.log(result)
    // })
        
    // db.collection('users').find({ age: 36 }).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({"_id" : new ObjectID("5e79c2cffa104f18aa05ebc6")}, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, results) => {
        console.log(results)
    })
})
