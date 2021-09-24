import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    let totall=0;
    for(const price of props.cart)
    totall=totall+price.price;
    console.log(totall)
    const shipping=15;
     const tax=(totall+shipping)/100*10;
     const grandTotall=(totall+shipping+tax)
    return (
        <div>
             <h1 className ='cart-element'>Order summary</h1>
                <p className='border-style'><span>Order items:{props.cart.length}</span></p>
                <p className='border-style'>Totall:$ {totall.toFixed(2)}</p>
                <p className='border-style'>Shipping:$ {shipping}</p>
                <p className='border-style'>Tax :$ {tax.toFixed(2)}</p>
                
                <h3 >Grand Totall:$ {grandTotall.toFixed(2)}</h3>
                <button className='submit-btn'>  <i class="fas fa-shopping-cart"></i> Submit order</button>
        </div>
    );
};

export default Cart;