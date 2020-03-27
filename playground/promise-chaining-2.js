require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('5e7ca8e68abc55780eb74bd1').then(() => {
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log('incomplete tasks: ', result)
}).catch((e) => {
    console.log(e)
})