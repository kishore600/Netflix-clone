const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authUser = require('./routes/auth.js')
const userRouter = require('./routes/users.js')
const movieRouter = require('./routes/movies.js')
const listRouter = require('./routes/lists.js')

dotenv.config()

mongoose.connect(process.env.MONO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then(()=>console.log("Database is connected sucessfully"))
.catch((err)=>console.log(err))

app.use(express.json())
app.use('/api/auth',authUser)
app.use('/api/user',userRouter)
app.use('/api/movie',movieRouter)
app.use('/api/list',listRouter)

app.listen(5000,()=>{
    console.log("server is running on the port 5000");
})