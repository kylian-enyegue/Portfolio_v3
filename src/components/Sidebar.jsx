import './sidebar.css'

function Sidebar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <button onClick={() => scrollTo('home')}><i className="fi fi-br-house-blank"></i> Home</button>
        <button onClick={() => scrollTo('about')}><i className="fi fi-rr-file-user"></i> About me</button>
        <button onClick={() => scrollTo('skills')}><i className="fi fi-ss-user-skill-gear"></i> Skills</button>
        <button onClick={() => scrollTo('projets')}><i className="fi fi-br-diagram-project"></i> Projets</button>
        <button onClick={() => scrollTo('contact')}><i className="fi fi-rs-phone-guide"></i> Contact</button>
      </div>
      <a className="navbar-btn" href="/cv.pdf" target="_blank" rel="noopener noreferrer">Mon CV</a>
    </nav>
  )
}

export default Sidebar
