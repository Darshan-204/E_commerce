const productModel = require("../model/productModel")

const GetProductControllers=async(req,res)=>
{
    try{
        const allProduct=await productModel.find().sort({createdAt:-1})
        res.json(
            {
                mess:"all product",
                success:true,
                error:false,
                data:allProduct
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
module.exports=GetProductControllers;