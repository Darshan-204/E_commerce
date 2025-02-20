const express=require("express")
const router=express.Router()
const UserSignupController=require("../controller/User/UserSignup.js")
const UserSigninController=require("../controller/User/USerSignin.js")
const UserDetailsController=require("../controller/User/UserDetails.js")
const authtoken = require("../middlewire/authtoken")
const UpdateUser = require("../controller/User/UpdateUser")

const UserLogout = require("../controller/User/UserLogout")
const AllUserDetailsd =require("../controller/User/AllUserDetailsd")
const UploadProductd = require("../controller/product/UploadProductd")
const GetProductControllers = require("../controller/product/GetProduct")
const updateProductController = require("../controller/product/UpdateProduct")
const GetCatagoryProductSingle = require("../controller/product/GetCatagoryProductSingle.js")
const GetCatagoryWiseProduct = require("../controller/product/GetCatagoryWiseProduct.js")
const GetProductDetailsOne = require("../controller/product/GetProductDetailsOne.js")
const AddCartController = require("../controller/User/AddCartController.js")
const CountAddToProduct = require("../controller/User/CountAddToCartProduct.js")
const AddToCartViewProduct = require("../controller/User/AddToCartViewProduct.js")
const UpdateProductQuantity = require("../controller/product/UpdateProductQuantity.js")
const deleteProductCard = require("../controller/User/deleteProductCard.js")
const SearchProductController = require("../controller/product/SearchProductController.js")
const FilterProduct = require("../controller/product/FilterProduct.js")

router.post("/signup",UserSignupController)
router.post("/signin",UserSigninController)
router.get("/userDetail",authtoken,UserDetailsController)
router.get("/logout",UserLogout)
router.get("/all-user",authtoken,AllUserDetailsd)
router.post("/update-user",authtoken,UpdateUser)
router.get("/get-product",GetProductControllers)


//upload product
router.post("/upload-product",authtoken,UploadProductd)
router.post("/update-product",authtoken,updateProductController)
router.get("/get-categoryproduct",GetCatagoryProductSingle)
router.post("/category-product",GetCatagoryWiseProduct)
router.post("/product-details",GetProductDetailsOne)
router.post("/addToCart",authtoken,AddCartController);
router.get("/countaddtocart",authtoken,CountAddToProduct);
router.get("/view-cart-product",authtoken,AddToCartViewProduct);
router.post("/update-cart-product",authtoken,UpdateProductQuantity);
router.post("/delete-card-product",authtoken,deleteProductCard);
router.get("/search",SearchProductController)
router.post("/filter-product",FilterProduct);














module.exports=router