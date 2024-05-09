const menu=require('../data.json')
const menuController={
    detail:(req,res)=>{
        let id=req.params.id;
        let detailImage=menu.find(element=>element.id==id)
        res.render('detalleMenu',{detailImage})
    },
    menu:(req,res)=>{
        res.render('menu',{menuComida:menu})
    },
    create:(req,res)=>{
        res.render('create')
    }
}

module.exports=menuController