
import { useContext } from "react";
import Productdisplay from "../components/ProductDesplay/Productdisplay";
import { ShopContext } from "../Shopcontext/Shopcontext";
import { useParams } from "react-router-dom";

function Product(){
const {all_product}=useContext(ShopContext);
const {productId}=useParams();
const product=all_product.find((e)=> e.id===Number(productId));
return(<>
<Productdisplay product={product} />
</>);
}

export default Product