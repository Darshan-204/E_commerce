const jwt=require("jsonwebtoken")

async function authtoken(req,res,next)
{
    try{
        const token=req.cookies?.token
        // console.log("token",token)
        if(!token)
        {
            return res.json({
                mess:"user not login",
                error:true,
                success:false
            })
        }
      
      jwt.verify(token,process.env.TOKEN_SECRET_KEY,function(err, decoded) {
        // console.log(err)
        // console.log("decoded  ",decoded);
        if(err)
        {
            console.log("err :",err);
        }
        req.userId=decoded?._id;
        next()
      });
      
    // console.log(token);
     

    }
    catch(err)
    {
        res.status(200).json
        ({
            mess:err.message||err,
            error:true,
            success:false,
            data:[]
        })
    }
}
module.exports=authtoken;