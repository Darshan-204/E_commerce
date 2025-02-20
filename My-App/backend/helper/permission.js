const userModel = require("../controller/model/UserModel")

 const uploadProductPermisssion=async(userId)=>
 {
    const user=await userModel.findById(userId);
    if(user.role==="Admin")
        return true;
    return false;
 }
 module.exports=uploadProductPermisssion;