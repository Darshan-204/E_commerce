const CartproductModel = require("../model/CartProduct");
const AddToCartViewProduct=async(req,res)=>
{
try{
    const currentUserId=req?.userId;
    // console.log(currentUserId)
    const allProduct= await CartproductModel.find({userId:currentUserId}).populate("productId");
    // console.log(allProduct)
    res.json({
        data:allProduct,
        success:true,
        error:false,
        mess:"cart product is found"
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

module.exports=AddToCartViewProduct;