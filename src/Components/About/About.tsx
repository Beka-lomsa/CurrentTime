import "./About.css"
import GeoFlag from "../../img/saqartvelo.webp"

function About() {
  return (
    <div className="about_Container">
      <div className="flagInfo_Container">
        <p>I was born in <img className="geoFlag" src={GeoFlag} alt="GeoFlag"/>Georgia in 1996.</p>
      </div>
      <div className="allInfo_Container">
        <p>I grew up in a small town called Surami and graduated from Public School N2.</p>
      </div>
      <div className="allInfo_Container">
        <p>I pursued a career in construction and earned a Bachelor's degree with honors.</p>
        <p>Later, I furthered my education and obtained a Master's degree.</p>
      </div>
      <div className="devInfo">
        <p>In 2022, I made a significant career shift and developed a strong interest in web development.</p>
        <p>Now, I'm passionate about creating digital wonders through coding.</p>
      </div>  
     </div>
  )
}

export default About