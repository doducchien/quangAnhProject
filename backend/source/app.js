const express = require('express')
const cors = require('cors')
const port = 1999
const app = express()

const db = require('./db/db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


const authRouter = require('../source/routers/authRouter/auth.router')

app.use('/authentication', authRouter)




app.listen(port, ()=>{
    console.log('Khởi động thành công')
    console.log("Hệ thống đang lắng nghe trên cổng " + port)
})
