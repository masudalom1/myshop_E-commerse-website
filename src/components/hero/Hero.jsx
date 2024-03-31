import "./hero.css";
import hero from "../../assets/hero.png";
import { FaArrowRight } from "react-icons/fa";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h5>NEW ARRIVALES ONLY</h5>
          <h1>
            New
            <br /> collections <br /> for everyone{" "}
          </h1>
          <button>Latest Collection </button>
        </div>

        <div className="hero-right">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </>
  );
}

export default Hero;
