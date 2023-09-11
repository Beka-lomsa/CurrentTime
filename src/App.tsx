import { PiFingerprintFill } from 'react-icons/pi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './App.css'

function App() {

  return (
    <div className='main_container'>
      <header className='project_header'>
        <div className='hd_left'>
          <PiFingerprintFill className="portfolio_icons"/>
          <p className='portfolio'>portfolio</p>
        </div>
        <div className='navigationBar'>
          <p>About Me</p>
          <p>Technologies</p>
          <p>Resume</p>         
        </div>
        <div className='hd_right'>
          <BsGithub className="link_icons"/>
          <BsLinkedin className="link_icons"/>
        </div>
      </header>
    </div>
  )
}

export default App
