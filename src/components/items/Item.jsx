import { Link } from "react-router-dom";
import "./item.css"
function Item(props){
    return(<>
    <div className="card_1">
        <div className="image_pw">
        <Link to={`/product/${props.id}`} ><img src={props.img} alt="img" /></Link>
        </div>
       
        <div className="details">
            <div>
            <p>{props.name}</p>
            </div>
         <div>
         <p>{props.price}</p>
         </div>
        
        </div>
    </div>
    </>);
}
export default Item