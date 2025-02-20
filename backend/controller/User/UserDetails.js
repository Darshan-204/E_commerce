const userModel = require("../model/UserModel");

async function UserDetailsController(req,res)
{
    try{

    //   console.log("user detail",req.userId)
      const user=await userModel.findById(req.userId);
    
        // console.log("user : ",user);
        res.status(200).json(
            {
                data:user,
                error:false,
                success:true,
                mess:"login with user details"
            }
        )
    
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
module.exports=UserDetailsController;