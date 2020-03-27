require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e7ca5f4532f8e76741c885c', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})