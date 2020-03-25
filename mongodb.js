// CRUD exploration
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e79bffe9702f816e850f195")
    // },
    // {
    //     $inc: {
    //         age: 1,
    //     }
    // }).then((result) => {
    //     console.log('Tutto OK!', result)
    // }).catch((error) => {
    //     console.log('Error:', error)
    // })
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log('Task completati!', result.modifiedCount)
    }).catch((error) => {
        console.log('Error:', error)
    })
})
