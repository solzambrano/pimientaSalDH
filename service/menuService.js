const fs=require('fs')
const jsonData=require('./data.json')


const menuService={
    menuJson:jsonData,
    getMenu: function() {
        return this.menuJson
        },
    getFood:function(id){
        console.log(this.menuJson)
        return detailImage=this.menuJson.find(element=>element.id==id)
    },
    createProduct:function(data){
        let product={
            namefood:req.body.namefood,
            price:req.body.price,
            description:req.body.description,
            image:req.body.image,
        }
        return product
    },
}


module.exports=menuService