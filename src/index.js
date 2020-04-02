const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const manteinance_mode = false

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.status(500).send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// disable everything when manteinance mode
app.use((req, res, next) => {
    if(manteinance_mode) {
        res.status(503).send('The website is under manteinance, please try again later.')
    } else{
        next()
    }
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ', port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5e8490454a72da53fe13116e')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('5e848d92f1200153159616ac')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

//main()