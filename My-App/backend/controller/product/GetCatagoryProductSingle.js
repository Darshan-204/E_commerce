const productModel = require("../model/productModel")

const GetCatagoryProducts=async(req,res)=>
{
    try{
        const productCategory=await productModel.distinct("category");
        // console.log("cate " ,productCategory)
        // arry to store one product from each category 
        const productBYCategory=[]
        for(const category of productCategory)
        {
            const product1=await productModel.findOne({category : category});
            if(product1)
            {
                productBYCategory.push(product1);
            }
        }
        res.json({
            mess:"category product data",
            data:productBYCategory,
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
module.exports=GetCatagoryProducts;