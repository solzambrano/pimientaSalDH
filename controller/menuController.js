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
        menu.createProduct(req)
        res.redirect('/menu')
        // la linea de abajo la sacamos, porque si bien cumple el objetivo, esta renderizando
        // mal la urlencoded, la forma correcta es redireccionando como esta arriba
        // idem para luego de post, update y delete
        // res.render('menu', {menu:menu.createProduct(req)})

    },
    edit:(req,res)=>{
        res.render('edit',{findFood:menu.getFood(req.params.id)})
    },
    update:(req,res)=>{
        menu.updateProduct(req)
        res.redirect('/menu')
        //  res.render('menu',{menu:menu.updateProduct(req)})
    },
    delete:(req,res)=>{
        menu.deleteProduct(req)
        //  menu.getMenu() no hace falta que se ponga aqui, al redirigir a menu e llama a getmenu
        res.redirect('/menu')
        // res.render('menu',{menu:menu.deleteProduct(req)})
    }
}

module.exports=menuController