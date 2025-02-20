const CartproductModel = require("../model/CartProduct");
const UpdateProductQuantity=async(req,res)=>
{
     try{
        const currentUserId=req?.userId;
        const addtoCartProductId=req.body._id;
        const qty=req.body.quantity;
        const updateProduct=await CartproductModel.updateOne({_id:addtoCartProductId},
                        {
               ...(qty && {quantity:qty}) 
            }
        )
        res.json({
            mess:"product updated",
            data:updateProduct,
            error:false,
            success:true
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
module.exports=UpdateProductQuantity;