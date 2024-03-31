import "./offers.css"


function Offers(){
    return(<>
    <div className="offers_sections">
        <div className="left_section">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newlatter and stay updated</p>
        </div>
        <div className="right_section">
             <input type="email" name="email" id="email" placeholder="Your Email Id" />
            <button>Subscribe</button>
        </div>
    </div>
    </>);
}

export default Offers