const fs=require('fs')
const jsonData=require('./data.json')


const menuService={
    menuJson:jsonData,
    getMenu: function() {
        return this.menuJson
        },
    getFood:function(id){
        console.log(this.menuJson)
        return detailImage=this.menuJson.find(element=>element.nombre==id)
    },
    getMaxId :function() {
        return Math.max(...this.menuJson.map(item => item.id), 0);
    },
    createProduct:function(req){
        let product={
            id:menuService.getMaxId()+1,
            nombre:req.namefood,
            precio:req.price,
            descripcion:req.description,
            image:req.image,
        }
        fs.appendFileSync(this.menuJson,product)
        this.menuJson.push(product)
        console.log(this.menuJson)

    },
}


module.exports=menuService