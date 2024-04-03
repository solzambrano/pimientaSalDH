const menu=require('../data.json')
const controller={
    index:function(req,res){
    res.render('index',{menuComida:menu})
    },
    detail:function(req,res){
        let id=req.params.id;
        let detailImage=menu.find(element=>element.id==id)
        res.render('detalleMenu',{detailImage})
    }
}

module.exports=controller