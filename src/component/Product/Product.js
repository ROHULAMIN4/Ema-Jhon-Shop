import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    
    const {name,img,seller,price, stock,star}=(props.product)

    return (


      <div className='main-container'>
                <div className="product-img">
                <       img src={img} alt="" />

                </div>
                <div className="product-container">

                        <h3>{name}</h3>
                        <p><small>by {seller}</small></p>
                    <h3>Price : ${price}</h3>
                    <Rating  
                    readonly
                    initialRating={star}
                     emptySymbol="far fa-star empty-icon"
                     fullSymbol="fas fa-star full-icon"
                    ></Rating>
                    
                    
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button onClick={()=>props.handleClick(props.product)}  className='btn'> <i class="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>
         </div>
        

    
    );
};

export default Product;