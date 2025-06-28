import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productDeleteController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);
//delte controller
router.delete("/delete-product/:pid", productDeleteController);

//filter prioduct
router.post("/product-filter", productFilterController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);
//related product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//paument route
//token
router.get("/braintree/token", braintreeTokenController);
//payment
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
