
const productModal = require('../modal/productModal');

const getallProducts =(req,res) => {
    res.status(200).json(productModal);

}
const getproductbyId = (req,res) => {
    const id = parseInt(req.params.id);
    const product = productModal.find(data => data.id ===id);
    if(product) {
        res.status(200).json(product);
    }else{
        res.status(404).json({message:"product not found"})
    }
}

const createProduct = (req,res) =>{
    const {category,title,price,stockAvailable}  = req.body;

    if(!category || !title || !price || !stockAvailable ) {
        return res.status(404).json({message: "All fiedls are required"});

    }
    const newProduct = {
        id: productModal.length ? productModal[productModal.length -1].id + 1 : 1,
        category,
        title,
        price,
        stockAvailable
    };
    productModal.push(newProduct);
    res.status(201).json(newProduct);

}
const updateProduct = (req,res)=>{
    const id = parseInt(req.params.id);
    const {category,title,price,stockAvailable} = req.body;

    const product = productModal.find(data => data.id === id);
    if(product) {
        product.category = category ?? product.category;
        product.title = title ?? product.title;
        product.price = price ?? product.price;
        product.stockAvailable = stockAvailable ?? product.stockAvailable;

        
        res.status(200).json({message:"Product Updated",product});
    }else{
        res.status(404).json({message:"product not found"})
    }
}
const deleteProduct = (req,res) =>{
    const id = parseInt(req.params.id);

    const productIndex = productModal.findIndex(data => data.id ===id)
    if(productIndex !== -1){
        const deletedProduct = productModal.splice(productIndex,1);
        res.status(200).json({message: "product deleted",deletedProduct})
    }else{
        res.status(404).json({message:"product not found"});

    }
}

module.exports ={getallProducts, getproductbyId,createProduct,updateProduct,deleteProduct};