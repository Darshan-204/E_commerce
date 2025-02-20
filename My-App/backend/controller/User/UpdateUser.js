const userModel=require("../model/UserModel")

async function UpdateUser(req,res)
{
    try{
        const sessionId=req.userId;
       const {userId,email,name,role}=req.body;
       const payload={
        ...(email && {email:email}),
        ...(name && {name:name}),
        ...(role && {role:role})
 }
 const user=await userModel.findById(sessionId);
//  console.log("R: " ,user.role)
 const updateUser=await userModel.findByIdAndUpdate(userId,payload);
 res.json(
    {
        mess:"user detail is updated successfully",
        success:true,
        error:false,
        data:updateUser
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

module.exports=UpdateUser;