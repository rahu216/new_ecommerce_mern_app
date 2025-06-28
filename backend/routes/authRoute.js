import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotcontroller,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authcontroller.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//rouer object
const router = express.Router();

//routing
//Regiser||Method POST
router.post("/register", registerController);
//user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//login||post

router.post("/login", loginController);

router.post("/forgot-password", forgotcontroller);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//admin route
//update profile
router.put("/profile", requireSignIn, updateProfileController);
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
