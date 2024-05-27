const express=require('express');
const app=express();
const index=require('./routes/indexRoutes');
const about=require('./routes/about');
const menu=require('./routes/menu')

const methodO=require('method-override')
app.use(methodO('_method'))

const multer=require('multer')
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'/public/images')
    },
    filename:function(req,file,cb){
        cb(null,  ` ${Date.now()}
        _img_${path.extname(file.originalname)} ` )
    }
})
const uploadFile=multer({storage})
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




