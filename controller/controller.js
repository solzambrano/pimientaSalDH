const menu=require('../data.json')
const controller={
    index:(req,res)=>{
    res.render('index',{menuComida:menu})
    },
    detail:(req,res)=>{
        let id=req.params.id;
        let detailImage=menu.find(element=>element.id==id)
        res.render('detalleMenu',{detailImage})
    },
    about:(req,res)=>{
        res.render('about')
    }
}

module.exports=controller