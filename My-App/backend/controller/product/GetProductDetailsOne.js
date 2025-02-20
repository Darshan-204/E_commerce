const productModel = require("../model/productModel");

const GetProductDetailsOne=async(req,res)=>
{
    try{
        const {productId}=req.body;
        const product=await productModel.findById(productId);
        //  const data=await product.json()
         res.json({
            data:product,
            mess:"product is found out",
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
module.exports=GetProductDetailsOne;