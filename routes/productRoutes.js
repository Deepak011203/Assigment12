const express = require('express');
const {getallProducts,getproductbyId,createProduct,updateProduct,deleteProduct} = require("../controller/productController");

const router = express.Router();

router.get("/", getallProducts);
router.get("/:id", getproductbyId);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;
