import "./login.css"
function Login(){
    return(<>

    <div className="login_signup_form">
        <h2>sign Up</h2>
        <div className="login_signup_container">
            <div className="fields">
            <form action="post">
                <input type="text" placeholder="your name" />
                <input type="email" name="email" id="email" placeholder="Enter Email" />
                <input type="password" name="password" id="password" placeholder="Enter password" />
             </form>
             <button>Continue</button>
            </div>
            <div className="agree_form">
                <p>Already have an account? <span>Login here</span> </p>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <p>By continuing i agree to the tern of use & privacy policy</p>
            </div>
        </div>
    </div>

    </>);
}

export default Login