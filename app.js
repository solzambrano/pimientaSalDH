const express=require('express');
const app=express();
const index=require('./routes/indexRoutes');
const about=require('./routes/about');
const menu=require('./routes/menu')
const loginUser= require ('./routes/users');
const userLogged=require('./middleware/middlewareSesionUser')
const session=require('express-session');
const cookies = require('cookie-parser');

const methodO=require('method-override')
app.use(methodO('_method'))


const port=process.env.PORT || 3000
//middleware global
app.use(express.static('./public'))

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
//session y cookie
app.use(session({
  secret: 'tu_secreto_aqui',
  resave: false,
  saveUninitialized: false,
}));
app.use(cookies());
app.use(userLogged)

app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})
//rutas
app.use('/',index)
app.use('/about',about)
app.use('/menu',menu)

app.use('/login',loginUser)

app.use(((req,res,next)=>{
    res.status(404).render('not-found')
}))




