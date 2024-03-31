import { useContext } from "react";
import "./productdisplay.css";
import { ShopContext } from "../../Shopcontext/Shopcontext";

function Productdisplay(props) {
const {product}=props;

    return (
        <>
          <div className="product_display">
            <div className="left">
               <div className="product_images">
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
                 <img src={product.image} alt="" />
                    
               </div>
               <div className="product_image">
               <img src={product.image} alt="" />
               </div>
            </div>
            
            <div className="right">
              <h3>{product.name}</h3>
              <div className="product_discription">
                <p>A comfortable and versatile basic cotton T-shirt for everyday wear.</p>
                <p>ratings :</p>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </div>

              <button>Add Card</button>
            </div>
          </div>
        </>
    );
}

export default Productdisplay;
