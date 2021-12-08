const express=require('express');
const  app=express();
const  session=require('express')
const  mongoose=require('mongoose');
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Connected With  DB')
}).catch( ()=>{
    console.log('Not Connected With DB')
})


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views','views')
const  PORT=process.env.PORT||3000
app.use('/',require('./routes/user.routing'))
app.listen(PORT,()=>{
    console.log('app started')
})