import express from "express";

import {
  listProduct,
  addProduct,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  addProduct
);

productRouter.post("/single", singleProduct);
productRouter.post("/remove", removeProduct);
productRouter.get("/list", listProduct);

export default productRouter;
