const menu=require('../data.json')
const controller={
    index:function(req,res){
    res.render('index',{menuComida:menu})
    }
}

module.exports=controller