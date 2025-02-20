const CartproductModel = require("../model/CartProduct");

const deleteProductCard=async(req,res)=>
{
    try{
        const currentUserId=req?.userId;
        const addToCartProductId=req.body._id;
        const deleteProduct=await CartproductModel.deleteOne({_id:addToCartProductId});
        if (deleteProduct.deletedCount === 0) {
            return res.status(404).json({ mess: 'User not found',
                error:true,
                success:false
             });
          }
        res.json({
            mess:"product is deleted from cart",
            success:true,
            error:false,
            data:deleteProduct
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
module.exports=deleteProductCard;