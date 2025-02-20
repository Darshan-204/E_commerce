const productModel = require("../model/productModel");

const FilterProduct=async(req,res)=>
{
    try{
        const categoryList=req?.body?.category||[];
        const product=await productModel.find({
            category:{
                "$in":categoryList
            }
            })
            res.json({
                data:product,
                mess:"product is found",
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
module.exports=FilterProduct;