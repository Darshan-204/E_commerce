const bcryptjs=require("bcryptjs")
const userModel=require("../model/UserModel")
const jwt = require('jsonwebtoken');
// const cookie=require("cookie-parser")


async function UserSigninController(req,res)
{

    try{
        const {email,password}=req.body;
        if(!email)
            {
                 throw new Error("please provide the email")
            }
            if(!password)
                {
                     throw new Error("please provide the password")
                }

                const user= await userModel.findOne({email})
                if(!user)
                {
                    throw new Error("user is not yet registered")
                }
                const checkPassword=await bcryptjs.compare(password,user.password);
                if(checkPassword===false)
                {
                    throw new Error("you have enter the wrong password");
                }
                else{
                    const tokenData={
                          _id:user._id,
                          email:user.email
                    }
                   const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});
                   const tokenOption={
                    httpOnly:true,
                   secure:true
                   }
                    res.cookie("token",token,tokenOption).status(200).json({
                        data2:token,
                        mess:"user have login to website successfully",
                        error:false,
                        success:true
                    })
                
                }
                

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

module.exports=UserSigninController;