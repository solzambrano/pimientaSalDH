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
    },
    setProduct:(req,res)=>{
        let product={
            namefood:req.body.namefood,
            price:req.body.price,
            description:req.body.description,
            image:req.body.image,
        }
        res.render('list',{product:product})
    }
}

module.exports=menuController