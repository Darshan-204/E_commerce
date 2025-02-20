const CartproductModel = require("../model/CartProduct");

const AddCartController=async(req,res)=>
{
    try{
        const {productId}=req?.body;
        const currentUser=req.userId;
        const IsproductAvailable=await CartproductModel.findOne({productId,userId:currentUser});
        if(IsproductAvailable )
        {
           return res.json({
                mess:"Already product is exist in cart",
                success:false,
                error:true
                
            })
        }
        console.log(IsproductAvailable+" "+currentUser);
        const payload={
            productId:productId,
            quantity:1,
            userId:currentUser
    }
    const addtocart=new CartproductModel(payload);
    const response=await addtocart.save()
    res.json({
        data:response,
        mess:"Product added Cart",
        success:true,
        error:false
    })
}
    catch(err)
    {
        res.status(401).json(
            {
                mess:err?.message||err,
                error:true,
                success:false
            }
        )
    }
}
module.exports=AddCartController;