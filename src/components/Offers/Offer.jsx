import "./offer.css"
import offer from "../../assets/offer.png"

function Offer(){
    return(<>
    <div className="offers_section">
        <div className="left_offers">
            <h2>Exclusive  Offers for you</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="right_offers">
             <img src={offer} alt="" />
        </div>
    </div>
    </>);
}

export default Offer