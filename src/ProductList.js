    import React from 'react';
    import ProductCard from './ProductCard';
    import './App.css';
    import './styles/product.css';
    import { Provider } from 'react-redux';
    import { ProductContext } from './ProductContext';
    import products from './Product';  

 

    
    const ProductList = () => {
    return (
        <div className='product-grid'>       
        {products.map((product, index) => (
         
       
            <ProductCard key={index} product={product} />
   
        ))}          
        </div>
    );
    };

    export default ProductList;