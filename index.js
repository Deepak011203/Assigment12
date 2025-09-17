const express = require('express');

const app = express();
const productRoutes = require("./routes/productRoutes");

let port = 8081;

app.use(express.json());
app.use("/products",productRoutes);



app.listen(port,()=>{
    console.log(`Server runnig on ${port}`)
})