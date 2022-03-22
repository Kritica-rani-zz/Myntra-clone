import './product.css'
import ProductsData from '../../db.json'
import { useState } from 'react'
import React from 'react'

export default function Product() {
    const [Products,setProducts] = useState(ProductsData.products)
    console.log("productsData",typeof Products)
  return (
      <>
      
      <div className='product-border'></div>
      
    <div className='product-page'>
    {/* <aside>
        <RadioSelectors/>
      </aside> */}
        { Products.map((item)=>{
             console.log("name",item.name)
           return(
              
            <div className='product-main'>
              <div className='product-main-img'> 
               <img src={item.image}alt="product"/>
             
              <div className='product-wishlist'><button>Wishlist</button></div>
              </div>
              <div className='product-box-desc'>
                  
           <div className='product-main-brand'> <p>{item.brand}</p>    </div>
           
           <div className='product-main-desc'> <p> {item.description}</p> </div>
             <div className='product-main-price'>  Rs. {item.price} </div>
           
             </div>
            </div>
            
        )})}
        
    </div>
    </>
  )
}

