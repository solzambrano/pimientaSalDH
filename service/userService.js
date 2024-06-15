const fs=require('fs')
const path = require('path');
const userPath = path.join(__dirname, "../service/user.json");

const userService={
    getUsers: () =>{
        return JSON.parse(fs.readFileSync(userPath, 'utf-8'));
        },
    create:(req)=>{
        return req.body
    }

}



module.exports=userService