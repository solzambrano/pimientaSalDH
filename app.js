const express=require('express');
const app=express();
const routes=require('./routes/indexRoutes');
const port=process.env.PORT || 3000
app.use(express.static('./public'))

app.set('view engine','ejs')


app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})
app.use('/',routes)