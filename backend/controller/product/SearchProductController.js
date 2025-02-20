const productModel = require("../model/productModel");

const SearchProductController=async(req,res)=>
{
    try{
        const query=req?.query.q;
        const regx=new RegExp(query,'i','g');
        const product=await productModel.find({
            "$or":[
                {
                    productName:regx
                },
                {
                    category:regx
                },
                {
                    description:regx
                }
            ]
        })
        res.json(
            {
                data:product,
                mess:"search product list",
                error:false,
                success:true
            }
        )

        // console.log(query)
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
module.exports=SearchProductController;