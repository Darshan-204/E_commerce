const userModel = require("../model/UserModel");
const bcrypt=require("bcryptjs")

async function UserSignupController(req,res)
{
    try{
        const {name,email,password}=req.body;
        if(!email)
        {
             throw new Error("please provide the email")
        }
        if(!password)
            {
                 throw new Error("please provide the password")
            }
            const user= await userModel.findOne({email})
            if(user)
            {
                throw new Error("user already exist");
            }
        
            const salt=await bcrypt.genSaltSync(10);
            const hashPassword= await bcrypt.hashSync(password,salt);
            if(!hashPassword)
            {
                throw new Error("some thing is wrong")
            }
const payload={
    ...req.body,
    role:"general",password:hashPassword
}
            const userData= new userModel(payload
                    // email:email,password:hashPassword,name:name
                     )
                     const saveUser= await userData.save();
   res.status(201).json({
    data:saveUser,
    success:true,
    error:false,
    message:"user is create"
   })

    }
    catch(err)
    {
        res.json({
            mess:err.message||err,
            error:true,
            success:false
        })
    }
}
module.exports=UserSignupController;