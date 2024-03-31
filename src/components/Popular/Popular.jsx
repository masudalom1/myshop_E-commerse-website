
import data from "../../assets/popular_women"
import Item from "../items/Item";
import "./popular.css"
function Popular(){
    return(<>
    <div className="popular_women_cloth">
        <h2>POPULAR IN WOMEN</h2>
        <hr/>
        <div className="items">
            {data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} img={item.image} price={item.price} />
            })}
        </div>
    </div>
    </>);
}

export default Popular