import Sidebar from './components/Sidebar'
import isepLogo from './assets/img/Institut_supérieur_d_électronique_de_Paris.png'
import juniorIsepLogo from './assets/img/Junior-ISEP.png'
import garageIsepLogo from './assets/img/garageisep.png'
import pythonLogo from './assets/img/Python-logo.png'
import javaLogo from './assets/img/java-logo.png'
import cppLogo from './assets/img/c++-logo.png'
import cssLogo from './assets/img/css-logo.png'
import jsLogo from './assets/img/javascript-logo.png'
import phpLogo from './assets/img/php-logo.png'
import './App.css'

const skills = [
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'C++', logo: cppLogo },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'PHP', logo: phpLogo },
]

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <section id="home">
          <h1>Home</h1>
        </section>
        <section id="about">
          <h1 className="section-title">About me</h1>
          <div className="about-container">
            <div className="about-text">
              <p>
                Étudiant en 1ère année cycle ingénieur, je suis heureux de vous présenter mon portfolio.
                J'ai choisi de me concentrer sur le génie logiciel et la cybersécurité car j'ai développé
                un véritable intérêt pour ces domaines en travaillant sur des projets concrets, innovants
                et stimulants, tout en améliorant mes compétences techniques.
              </p>
              <p>
                En génie logiciel, j'aime coder, concevoir des applications mobiles Android, développer
                des interfaces graphiques, contribuer à des architectures back-end et automatiser des
                processus. La cybersécurité m'intéresse également car elle me permet de comprendre les
                vulnérabilités des systèmes et des réseaux, et d'apprendre à concevoir des infrastructures
                sécurisées pour protéger les données des utilisateurs. À l'avenir, j'aimerais me spécialiser
                dans l'un de ces deux domaines au sein de mon école d'ingénieurs.
              </p>
              <p>
                Je recherche une première expérience professionnelle sous forme d'un stage de 4,5 mois ou
                d'une alternance de 2 ans, afin d'appliquer mes compétences dans votre entreprise et
                contribuer activement à vos projets. Je suis disponible à partir du 21 juin 2026, après
                la fin de mes cours.
              </p>
              <p>
                En dehors de mes études, je pratique le basketball et suis l'actualité NBA. Je m'intéresse
                également aux comics et à l'univers DC, et je pratique le dessin lié à l'art des comics.
                Ces activités m'aident à rester concentré, à développer ma créativité et à soutenir mon
                développement personnel.
              </p>
            </div>
            <div className="about-logo">
              <img src={isepLogo} alt="ISEP" />
            </div>
          </div>

          <h2 className="subsection-title">Expérience</h2>
          <div className="experience-container">
            <div className="experience-logo">
              <img src={juniorIsepLogo} alt="Junior ISEP" />
            </div>
            <div className="experience-text">
              <p>
                I am an apprentice member of the CyberLab, a division of the GarageISEP association.
                As part of this group, I participate in Capture The Flag challenges and train on the
                TryHackMe platform to progressively develop my cybersecurity skills. I practice
                penetration testing on end devices and virtual machines while improving my Linux
                command knowledge. I regularly use Kali Linux and other Linux distributions.
              </p>
              <p>
                Although I am still in the learning phase, I am currently preparing Cisco certifications
                to improve and structure my technical expertise.
              </p>
            </div>
          </div>

          <h2 className="subsection-title">Engagement associatif</h2>
          <div className="experience-container">
            <div className="experience-logo">
              <img src={garageIsepLogo} alt="GarageISEP" />
            </div>
            <div className="experience-text">
              <p>
                I am an apprentice member of the CyberLab, a division of the GarageISEP association.
                As part of this group, I participate in Capture The Flag challenges and train on the
                TryHackMe platform to progressively develop my cybersecurity skills. I practice
                penetration testing on end devices and virtual machines while improving my Linux
                command knowledge. I regularly use Kali Linux and other Linux.
              </p>
              <p>
                Although I am still in the learning phase, I am currently preparing Cisco certifications
                to improve and structure my technical expertise.
              </p>
            </div>
          </div>
        </section>
        <section id="skills">
          <h1 className="section-title">Skills</h1>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.logo} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section id="projets">
          <h1>Projets</h1>
        </section>
        <section id="contact">
          <h1>Contact</h1>
        </section>
      </main>
    </>
  )
}

export default App
