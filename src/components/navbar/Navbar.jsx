import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css"
import { FaCartShopping } from "react-icons/fa6";
function Navbar(){
    const [menu,setmenu]=useState("");
    return(<>
    <div className="navbar">
        <div className="logo">
        <p>MYSHOP</p>
        </div>
        
       <div className="categories">
        <li onClick={()=>{setmenu("shop")}} ><Link style={{textDecoration: "none"}} to='/'>Shop</Link></li>
        <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration: "none"}} to='/men' >Men</Link></li>
        <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration: "none"}} to='/women' >Women</Link></li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: "none"}} to='/kids' >Kids</Link></li>
       </div>

        <div className="login">
       <Link to="/login" > <button>Login</button></Link>
       <Link style={{textDecoration: "none"}} to="/card"> <p className="card"><FaCartShopping /></p></Link>
    </div>
    </div>
    
    </>);
}

export default Navbar 