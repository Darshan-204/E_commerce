const mongoose=require("mongoose")
const CartproductSchema=mongoose.Schema(
    {
        productId:{
            ref:"product",
            type:String},
        quantity:Number,
        userId:String
    },
    {
        timestamps:true
    }
)
const CartproductModel=mongoose.model("productCART",CartproductSchema);
module.exports=CartproductModel;
