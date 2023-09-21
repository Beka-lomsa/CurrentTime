import "./Resume.css";
import cvImg from "../../img/7beka.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { BsPhoneVibrate } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
// import { HiOutlineAtSymbol } from "react-icons/hi";

function Resume() {
  return (
    <div className="resume_Container">
      <div className="connection_container">
        <div className="left_part">
          <header className="cv_header">
            <img className="cvImg" src={cvImg} alt="cvImg" />
            <div className="persInfo">
              <h1>Beka Lomsadze</h1>
              <h3>Junior Front-End Developer</h3>
              <article>
                Self-studied Front-end Developer with learn-hunting desire.
                Great Knowledge in HTML/CSS as well as JavaScript/TypeScript.
                Main Framework is React. Equipped with a diverse and promising
                skill-set. Proficient in various platforms. Basic knowledge in
                GIT (version control system). Able to effectively self manage
                during independent projects, as well as collaborate as part of a
                productive team. Full of Responsibility and ability to learn and
                grow
              </article>
            </div>
          </header>
          <section className="contact_Info">
            <div className="leftPart_contact">
              <p>
                <TfiLocationPin className="cont_icons" /> Georgia, Didi Dighomi,
                Khataeti st. N48
              </p>

              <p className="sss">
                <SlSocialLinkedin className="cont_icons" />
                <a href="https://www.linkedin.com/in/beka-beka-7aa4b2256/">
                  https://www.linkedin.com/in/beka-beka-7aa4b2256/
                </a>
              </p>
              <p>
                <FiGithub className="cont_icons" />
                <a href="https://github.com/Beka-lomsa">
                  https://github.com/Beka-lomsa
                </a>
              </p>
            </div>
            <div className="rightPart_contact">
              <p>
                <BsPhoneVibrate className="cont_icons" />
                +995 591 05 74 85
              </p>
              <p>
                <RiMailSendLine className="cont_icons" />
                beqa.lomsadze3@gmail.com
              </p>
              <p>
                <CiFacebook className="cont_icons" />
                <a href="https://www.facebook.com/">
                  https://www.facebook.com/
                </a>
              </p>
            </div>
          </section>
          <section className="skills_container">
            <h2>Skills</h2>
            <div className="list_ofSkills">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>React Router</p>
              <p>Git</p>
              <p>Figma</p>
              <p>Work under pressure</p>
              {/* <p>Styled Components</p> */}

            </div>
          </section>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
}

export default Resume;
