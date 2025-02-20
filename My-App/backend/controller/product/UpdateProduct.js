const productModel = require("../model/productModel");
const uploadProductPermisssion=require("../../helper/permission")

async function updateProductController(req,res)
{
    try{
       
        if(!uploadProductPermisssion(req.userId))
            {
               throw new Error("Permission denied");
            }
            const {_id,...resBody}=req.body;
            const updateProduct=await productModel.findByIdAndUpdate(_id,resBody)
            res.json({
                mess:"Product is Updated Successfully",
                data:updateProduct,
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
module.exports=updateProductController;