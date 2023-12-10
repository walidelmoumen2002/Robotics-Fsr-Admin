const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const db = process.env.MONGODB_URI

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error(err))
