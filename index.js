require('dotenv').config()


const express = require('express')
const cors = require('cors')
const { connectivity } = require('./dataBase/connectivity')
const app = express()



//middleware
app.use(cors())
app.use(express.json())
app.use('/ssi-task', require('./router/index'))







//start

const Start = async (PORT) => {
    try {
        const url = process.env.MONGODB_CONNECT
        await connectivity(url)
        app.listen(process.env.PORT || PORT, () => {
            console.log('connect')
        })
    } catch {
        console.log('not connect')
    }
}

let PORT = 4000
Start(PORT)