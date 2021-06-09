const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan');


//middleWares
//bodyParser-input from postman body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//mongoose
mongoose.connect('mongodb://cms_user:cms%401234@172.105.40.182:27017/CMS?authSource=CMS',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db =mongoose.connection;
db.once('open',()=>console.log('mongo connected'));
db.on('error',err=> console.log(err));
//morgan
app.use(morgan('dev'))

//Routes
app.get('/',(req,res)=>{res.send(`<h1>This is IOT website</h1>`)})
app.use('/data',(require('./routes/data')))


const port = process.env.PORT || 3000
app.listen(port,console.log(`server is running at port: ${port}`))