

async function handleAllProducts(req, res) {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const products = await response.json();
        res.status(200).json(products);

    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function handleProductByCategory(req, res) {
    const categoryId = req.query.categoryId;
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories`, {
            headers: {  
                'Content-Type': 'application/json',
            }
        });
        const products = await response.json();
        console.log(products)
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function handleProductById(req, res) {
   const productId = req.params.id;
   try {
       const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {  
              headers: {
                'Content-Type': 'application/json',
              }
       });
       const product = await response.json();
       res.status(200).json(product);
   } catch (error) {
       console.error('Error fetching product by ID:', error);
       res.status(500).json({ message: 'Internal server error' });
   }}

   async function handleProductByCategoryId(req, res) {
    const categoryId = req.params.categoryId;
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}`, {
            headers: {  
                'Content-Type': 'application/json',
            }
        });
        const products = await response.json();

        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }   
}

module.exports = { handleAllProducts, handleProductByCategory, handleProductById, handleProductByCategoryId };