const express=require('express');
const app=express();
const index=require('./routes/indexRoutes');
const detail=require('./routes/detail');

const port=process.env.PORT || 3000
app.use(express.static('./public'))

app.set('view engine','ejs')


app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})
app.use('/',index)
app.use('/',detail)
