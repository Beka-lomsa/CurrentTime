import "./HomeSection.css";
import { FaGears } from "react-icons/fa6";
import { BsRocketTakeoff, BsLightbulbFill } from "react-icons/bs";
import { GiStarSkull } from "react-icons/gi";
import Beka from "../../img/7beka.jpg";
import { GiHand } from "react-icons/gi";

function HomeSection() {


  return (
      <div className="homeSection_Container">
        <div className="myReview">
          <p className="name">
            <GiHand className="iconsAll" /> Hello! I Am
            <span>Beka Lomsadze,</span> a junior web developer with a flair for
            creating digital wonders.
          </p>
          <p className="listOfReview">
            <BsRocketTakeoff className="iconsAll" /> My exploration of web
            development began with HTML, CSS, and JavaScript, and now I'm on a
            journey to master React and TypeScript
          </p>
          <p className="listOfReview">
            <GiStarSkull className="iconsAll" /> I thrive on turning ideas into
            reality through clean and elegant code. From user-friendly
            interfaces to interactive web apps, I'm driven by a commitment to
            excellence.
          </p>
          <p className="listOfReview">
            <BsLightbulbFill className="iconsAll" /> Let's create something
            extraordinary together. Feel free to explore my portfolio, and let's
            connect!
          </p>
          <div className="btnContainer">
            <button type="button" className="downloadBtn">
              Download <span>CV</span>
            </button>
            <button type="button" className="projBtn">
              Projects{" "}
              <span>
                <FaGears />
              </span>
            </button>
          </div>
        </div>
        <div className="img_container">
          <img src={Beka} alt="Prof/Img" />
        </div>
      </div>
  );
}

export default HomeSection;
