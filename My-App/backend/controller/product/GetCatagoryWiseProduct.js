const productModel = require("../model/productModel")

const GetCatagoryWiseProduct=async(req,res)=>
{
    try{
        const {category}=req?.body||req?.query;
        const product=await productModel.find({category})
        res.json({
            mess:"product",
            data:product,
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
module.exports=GetCatagoryWiseProduct;