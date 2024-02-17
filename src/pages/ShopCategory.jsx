import React, { useContext } from 'react';
import './css/Shopcategory.css';
import { Shopcontext } from '../Context/Shopcontext';

const ShopCategory = (props) => {
  const {all_products} = useContext(Shopcontext);
  return (
    <div className="shop-category"></div>
  )
}

export default ShopCategory