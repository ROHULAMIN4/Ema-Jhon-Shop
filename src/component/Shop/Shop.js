import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    const [displyui,setDisplayui]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{setProducts(data)
        
            setDisplayui(data)
        })
    },[])
    useEffect(()=>{
        if(products.length){
            const saveCart=getStoredCart();
            const storageCart=[];
       
            for(const key in saveCart){
                // console.log(key)
                const addProduct=products.find(product=>product.key===key)
                    // console.log(key,addProduct)
                    storageCart.push(addProduct)
        }
        
          setCart(storageCart)  

          
        }
    },[products])
 const handleClick=(product)=>{
     setCart([...cart,product]);
     addToDb(product.key)
  
     
 }
const addChange=(event)=>{
   const SearchText=(event.target.value);
   const matchProduct=products.filter(product=>product.name.toLowerCase().includes(SearchText.toLowerCase()))
   setDisplayui(matchProduct)
}
    return (
        <>
        <div className="search-container">
            <input type="text " onChange={addChange}  placeholder='Search Product' />
        </div>
        <div className='main-product'>


             <div>
            {
                displyui.map(product=><Product product={product} key={product.key}
                    handleClick={handleClick}
                ></Product>)
            }
            </div>
            <div className='Order-summary'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;



   