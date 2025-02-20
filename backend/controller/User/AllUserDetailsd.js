const userModel = require("../model/UserModel");

async function Alluser(req,res) {
    try{

    //  console.log("user: ",req.userId);
    // if(req. )
     const allUser=await userModel.find();
    res.json({
        mess:"user is found successfully",
        data:allUser,
        success:true,
        error:false
    })
    }
    catch(err)
    {
        res.status(401).json(
            {
                mess:err.message||err,
                error:true,
                success:false
            }
        )
    }
}
module.exports=Alluser;