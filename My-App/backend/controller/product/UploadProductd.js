// const uploadProductPermisssion = require("../helper/permission");
const productModel = require("../../controller/model/productModel")
const uploadProductPermisssion=require("../../helper/permission")

async function UploadProductd(req,res)
{
    try
    {
        const sessionUserId=req.userId;
        if(!uploadProductPermisssion(sessionUserId))
        {
           throw new Error("Permission denied");
        }

        const uploadproduct=new productModel(req.body);
       const savedproduct=await uploadproduct.save()
       res.status(201).json(
        {
            mess:"product is uploaded successfully",
            error:false,
            success:true,
            data:savedproduct
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
module.exports=UploadProductd;