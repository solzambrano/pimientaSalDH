const fs=require('fs')
const jsonData=require('./data.json')
const path = require('path');
const productsPath = path.join(__dirname, "../service/data.json");

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
            image: req.file ? `/images/${req.file.filename}` : "",
            descripcion:req.body.description,
            nombre:req.body.namefood,
            precio:req.body.price,
        }
           const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
            products.push(product);

            fs.writeFileSync(productsPath, JSON.stringify(products, null, 2)); // Escribe el archivo completo

            console.log(products);
            return products

    },
}


module.exports=menuService