const menu=require('../data.json')
const controller={
    index:(req,res)=>{
    res.render('index',{menuComida:menu})
    },
    about:(req,res)=>{
        res.render('about')
    }
}

module.exports=controller