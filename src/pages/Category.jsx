import React, { useContext } from "react";
import { ShopContext } from "../Shopcontext/Shopcontext";
import Item from "../components/items/Item";
import "./category.css"

function Category(props) {
  const {all_product}=useContext(ShopContext);

   return (
      <>
      <div className="banner">
        <img src={props.banner} alt="banner" />
      </div>
     <div className="items">
        {all_product.map((item,i)=>{
            if(props.Category===item.categories){
                return <Item key={i} id={item.id} name={item.name} img={item.image} price={item.price}  />
            }else{
                return null;
            }
        })}
     </div>
      </>
   );
}

export default Category;

