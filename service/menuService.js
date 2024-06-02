const fs=require('fs')
const jsonData=require('./data.json')
const path = require('path');
const productsPath = path.join(__dirname, "../service/data.json");
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

const menuService={
    getMenu: () =>products,
    getFood:(id)=>detailImage=products.find(element=>element.nombre==id),
    getMaxId :()=>Math.max(...products.map(item => item.id), 0),
    createProduct:(req)=>{
        let product={
            id:menuService.getMaxId()+1,
            image: req.file ? `/images/${req.file.filename}` : "",
            descripcion:req.body.descripcion,
            nombre:req.body.nombre,
            precio:'U$S'+  req.body.precio,
        }+
            products.push(product);

            fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
            return products
    },
    updateProduct:(param)=>{
      products.find(element=>{
       if(element.nombre == param.params.id){
            for(item in element){
                if(element[item]!==param.body[item] && param.body[item]!=undefined){
                    console.log(element[item], param.body[item])
                    element[item] =param.body[item]
                }
       }
       return element
       }    

       })
       fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
       return products
    }
}



module.exports=menuService