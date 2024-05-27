const menu=require('../service/menuService')
const menuController={
    detail:(req,res)=>{
        res.render('detalleMenu',{detailImage:menu.getFood(req.params.id)})
    },
    menu:(req,res)=>{
       res.render('menu',{menu:menu.getMenu()})

    },
    create:(req,res)=>{
        res.render('create')
    },
    setProduct:(req,res)=>{
        menu.createProduct(req.body)
        res.send(req.body)
    },
    modify:(req,res)=>{
        res.render('edit',{findFood:menu.getFood(req.params.id)})
    }
}

module.exports=menuController