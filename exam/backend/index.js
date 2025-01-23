const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const app = express()
const routing = require('./router/routers')
app.use(express.json())
app.use(cors())
const DB_URl = 'mongodb+srv://niad:Aroundeworld000!@cluster0.la2f2.mongodb.net/final-exam?retryWrites=true&w=majority&appName=Cluster0'
const PORT = 8080

app.use('/products' , routing)


mongoose.connect(DB_URl).then(app.listen(PORT,()=>{console.log(`http://localhost:${PORT} / connected!`);
}))