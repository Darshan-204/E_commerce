const mongoose=require("mongoose")
const productSchema=mongoose.Schema(
    {
        productName:{
            type:String

        },
        brandName: String,
        category: String,
        description: String,
        price : Number,
        sellingPrice : Number,
        productImage:[]
    },
    {
        timestamps:true
    }
)
const productModel=mongoose.model("product",productSchema);
module.exports=productModel;
