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
        res.render('menu', {menu:menu.createProduct(req)})
    },
    modify:(req,res)=>{
        res.render('edit',{findFood:menu.getFood(req.params.id)})
    }
}

module.exports=menuController