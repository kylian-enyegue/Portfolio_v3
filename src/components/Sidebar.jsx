import keLogo from '../assets/img/ke.png'
import './sidebar.css'

function Sidebar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <img src={keLogo} alt="KE" className="navbar-ke-logo" onClick={() => window.location.reload()} />
      <div className="navbar-links">
        <img src={keLogo} alt="KE" className="navbar-ke-logo-mobile" onClick={() => window.location.reload()} />
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="fi fi-br-house-blank"></i> Home</button>
        <button onClick={() => scrollTo('about')}><i className="fi fi-rr-file-user"></i> About me</button>
        <button onClick={() => scrollTo('skills')}><i className="fi fi-ss-user-skill-gear"></i> Skills</button>
        <button onClick={() => scrollTo('projets')}><i className="fi fi-br-diagram-project"></i> Projets</button>
        <button onClick={() => scrollTo('contact')}><i className="fi fi-sr-phone-call"></i> Contact</button>
        <a className="navbar-btn navbar-btn-mobile-cv" href={`${import.meta.env.BASE_URL}CV.pdf`} target="_blank" rel="noopener noreferrer">Mon CV</a>
      </div>
      <a className="navbar-btn" href={`${import.meta.env.BASE_URL}CV.pdf`} target="_blank" rel="noopener noreferrer">Mon CV</a>
    </nav>
  )
}

export default Sidebar
