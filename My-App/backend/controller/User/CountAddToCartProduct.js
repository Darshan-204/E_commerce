const CartproductModel = require("../model/CartProduct");

const CountAddToProduct=async(req,res)=>
{
    try{
       const userId1=req?.userId;
       const count=await CartproductModel.countDocuments({
        userId:userId1
       })
       res.json({
        data:{
            count:count,
            mess:"ok",
            success:true,
            error:false
        }
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
module.exports=CountAddToProduct;