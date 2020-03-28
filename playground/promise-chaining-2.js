require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('5e7ca8e68abc55780eb74bd1').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log('incomplete tasks: ', result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e7ef9d18ecc4eed79465a44').then((count) => {
    console.log('Count vale ', count)
}).catch((e) => {
    console.log('Errore ', e)
})