const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

require('./config/db')
dotenv.config()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello From Robotics Admin Server')
})


app.use('/api/Component', require('./routes/components'))
app.use('/api/Packs', require('./routes/packs'))
app.use('/api/Member', require('./routes/members'))
app.use('/api/Project', require('./routes/projects'))
app.use('/api/Team', require('./routes/teams'))


const port = process.env.PORT
app.listen(port, () => {
    console.log(`App listening to port ${port}`)
})
