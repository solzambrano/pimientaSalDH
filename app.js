const express=require('express');
const app=express();
const index=require('./routes/indexRoutes');
const about=require('./routes/about');
const menu=require('./routes/menu')




const port=process.env.PORT || 3000
app.use(express.static('./public'))

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})
app.use('/',index)
app.use('/',about)
app.use('/menu',menu)




