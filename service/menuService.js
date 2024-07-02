const fs=require('fs')
const path = require('path');
const productsPath = path.join(__dirname, "../service/data.json");

const menuService={
    getMenu: () =>{
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
        },
    getFood:(id)=>{
        let products= menuService.getMenu();
        return detailImage=products.find(element=>element?.nombre==id)
    },
    getMaxId :()=>{
        let products=menuService.getMenu()
       return  Math.max(...products.map(item => item.id), 0)
    },
    capitalizeFirstLetter:(name)=>{
        return name.charAt(0).toUpperCase()+ name.slice(1)

    },
    createProduct:(req)=>{
        let products=menuService.getMenu();
        product={
            id:menuService.getMaxId()+1,
            image: req.file ? `/images/${req.file.originalname}` : "",
            descripcion:menuService.capitalizeFirstLetter(req.body.descripcion),
            nombre:req.body.nombre,
            precio:'U$S '+  req.body.precio,
        }
        console.log('producto',product);
            products.push(product);
            fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
            return products
    },
    updateProduct:(param)=>{
        let products=menuService.getMenu();
        let elementFind=products.find(element=>element.nombre==param.params.id);
        let imagePath;
        for(item in elementFind){
            if(elementFind[item]!==param.body[item] && param.body[item]!=undefined){
                    elementFind[item] =param.body[item] 
                }
            if(param.file?.originalname !== undefined && item=='image'){ //voy a cambiar la imagen
                 imagePath = path.join(__dirname, '../public/images', path.basename(elementFind.image));
                elementFind.image =`/images/${param.file?.originalname}` //sobreescribe
            }    
       } 
        if( fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath) //lo elimina
        }
       fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
       return products
    },
    deleteProduct:(req)=>{
        let imagePath;
        let encontrado=false
        let products=menuService.getMenu()
         let newJson= products.filter(element=>{
            if(element.nombre == req.params.id){
                encontrado=true
                imagePath = path.join(__dirname, '../public/images', path.basename(element.image));
            }
            return element.nombre != req.params.id
            })
            if(encontrado){
                fs.unlinkSync(imagePath);
            }
         fs.writeFileSync(productsPath, JSON.stringify(newJson, null, 2));
    }
}



module.exports=menuService