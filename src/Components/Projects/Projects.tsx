import "./Projects.css"
import equi from "../../img/eqqui.png"
import calcu from "../../img/calcu.png"
import todo from "../../img/todo.png"
import cards from "../../img/cards.png"
import realTime from "../../img/realTime.png"
import devDark from "../../img/devLight.png"
import rate from "../../img/rate.png"
import faq from "../../img/faq1.png"
import { TbWorldCode } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";


function Projects(){
  return(
    <div className="project_Container">
      <div className="Cards">
        <img src={realTime} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>
      <div className="Cards">
        <img src={devDark} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>
      <div className="Cards">
        <img src={cards} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>
      <div className="Cards">
        <img src={todo} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>
      <div className="Cards">
        <img src={calcu} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>
      <div className="Cards">
        <img src={rate} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>
      <div className="Cards">
        <img src={faq} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>
      <div className="Cards">
        <img src={equi} alt="" />
        <div className="all_Btn">
          <a className="web_link" href="#">
            <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
          </a>
          <a className="code_link" href="#">
            <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
          </a>
        </div>
      </div>

    </div>
  )
}
export default Projects