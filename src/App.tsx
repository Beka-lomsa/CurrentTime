import { useState } from "react";
import { PiFingerprintFill } from "react-icons/pi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaReact, FaTwitter, FaInstagram } from "react-icons/fa";
import HomeSection from "./Components/Home/HomeSection";
import About from "./Components/About/About";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";

function App() {
  //* Alert */
  const [alert, setAlert] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setAlert(true);
  };
  const handleMouseLeave = () => {
    setAlert(false);
  };
  //* HomeSection */
  const [selectedInfo, setSelectedInfo] = useState<JSX.Element>(
    (<HomeSection/>)
  );

  function handleActive(e: React.MouseEvent<HTMLParagraphElement>) {
    const getActive = document.querySelectorAll(".inActive");

    getActive.forEach((targeted) => {
      if (targeted.classList.contains("active")) {
        targeted.classList.remove("active");
      }
    });
    e.currentTarget.classList.add("active");

    if (e.currentTarget.title === "home") {
      setSelectedInfo(<HomeSection/>);
    } else if (e.currentTarget.title === "aboutMe") {
      setSelectedInfo(<About />);
    }else if(e.currentTarget.title === "projects"){
      setSelectedInfo(<Projects/>);
    }else if(e.currentTarget.title === "resume"){
      setSelectedInfo(<Resume/>);
    }
  }

  return (
    <div className="main_container">
      <header className="project_header">
        <div className="hd_left">
          <PiFingerprintFill
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="print_icons"
          />
          <p title="home" className="inActive active" onClick={handleActive}>
            home
          </p>
        </div>
        <div className="navigationBar">
          <p title="aboutMe" className="inActive" onClick={handleActive}>
            About Me
          </p>
          <p title="projects" className="inActive" onClick={handleActive}>
            Projects
          </p>
          <p title="resume" className="inActive" onClick={handleActive}>
            Resume
          </p>
        </div>
        <div className="hd_right">
          <a
            title="linkdin"
            rel="noopener"
            target="_blank"
            href="https://github.com/Beka-lomsa"
          >
            <BsGithub className="git" />
          </a>

          <a
            title="linkdin"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/beka-beka-7aa4b2256/"
          >
            <BsLinkedin className="linkd" />
          </a>
        </div>
      </header>
      <p className={alert ? "accdntical_Alart" : "hidden"}>
        B.L's Portfolio...
      </p>
      {selectedInfo}
      <footer className="footer_container">
        <div className="logos_container">
          <div className="logo">
            <FaReact size={40} />
          </div>
          <div className="social-icons">
            <a
              rel="noopener"
              title="TW"
              href="https://twitter.com/beqa021996"
              target="_blank"
            >
              <FaTwitter className="twit" size={30} />
            </a>
            <a
              rel="noopener"
              title="IN"
              href="https://instagram.com/lomsazebeka?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <FaInstagram className="inst" size={30} />
            </a>
          </div>
        </div>
        <div className="legal-info">
          <p>&copy; 2023 Portfolio</p>
          <div>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
