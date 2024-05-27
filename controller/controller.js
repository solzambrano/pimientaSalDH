const menu=require('../service/menuService')

const controller={
    index:(req,res)=>{
           res.render('index',{menuCasa:menu.getMenu()})
    },
    about:(req,res)=>{
        res.render('about')
    }
}

module.exports=controller