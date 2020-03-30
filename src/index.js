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



const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', { expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token,'thisismynewcourse')
    console.log('data ', data)
}

myFunction()