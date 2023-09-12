import "./HomeSection.css";
import B from "../img/jixvi.jpg"
// import L from "../img/beka.jpg"

function HomeSection() {
  return (
    <div className="homeSection_Container">
      <div className="myReview">
        <p className="name">
          👋 Hello! I Am<span>Beka Lomsadze,</span> a passionate junior web
          developer with an insatiable curiosity for crafting digital
          experiences.
        </p>
        <p>
          🚀 My exploration of web development began with HTML, CSS, and
          JavaScript, and now I'm on a journey to master React and TypeScript
        </p>
        <p>
          🌟 I thrive on turning ideas into reality through clean and elegant
          code. From user-friendly interfaces to interactive web apps, I'm
          driven by a commitment to excellence.
        </p>
        <p>
          💡 Let's create something extraordinary together. Feel free to explore
          my portfolio, and let's connect! 🌐 give me others 
        </p>
        <div>
          <button className="">Download <span>CV</span></button>  
          <button>Projects</button>
        </div>  
      </div>
      <div className="img_container">
        <img src={B} alt="Prof/Img"/>
      </div>
    </div>
  );
}

export default HomeSection;
