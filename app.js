const express=require('express');
const app=express();
const index=require('./routes/indexRoutes');
const about=require('./routes/about');
const menu=require('./routes/menu')
const loginUser= require ('./routes/users');
const session=require('express-session');

const methodO=require('method-override')
app.use(methodO('_method'))


const port=process.env.PORT || 3000
//middleware global
app.use(express.static('./public'))

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
  secret: 'tu_secreto_aqui',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === "production" }
}));
app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})

app.use('/',index)
app.use('/about',about)
app.use('/menu',menu)

app.use('/login',loginUser)

app.use(((req,res,next)=>{
    res.status(404).render('not-found')
}))




