import { Router } from "express";
import productController from "../controller/productController.js";

const productRoute = Router()


productRoute.post("/createnew", productController.createNew)
productRoute.get("/allProducts", productController.getAllProducts)
productRoute.put("/:id", productController.updateProduct)
productRoute.delete("/:id", productController.deleteProduct)

export default productRoute