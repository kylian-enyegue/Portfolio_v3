import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import isepLogo from './assets/img/Institut_supérieur_d_électronique_de_Paris.png'
import juniorIsepLogo from './assets/img/Junior-ISEP.png'
import garageIsepLogo from './assets/img/garageisep.png'
import gmitixImg from './assets/img/gmitix.png'
import seekStayImg from './assets/img/seek&stay.png'
import ragImg from './assets/img/rag.png'
import portfolioImg from './assets/img/portfolio2.png'
import compagnieImg from './assets/img/compagnie.png'
import ddosImg from './assets/img/ddos.png'
import capgeImg from './assets/img/capge.webp'
import tpcyberImg from './assets/img/tpcyber2.png'
import pianoImg from './assets/img/piano.png'
import quizzImg from './assets/img/quizz.png'
import traductionImg from './assets/img/traduction.png'
import chassisImg from './assets/img/chassis.png'
import fondImg from './assets/img/fond2.png'
import pythonLogo from './assets/img/Python-logo.png'
import javaLogo from './assets/img/java-logo.png'
import cppLogo from './assets/img/c++-logo.png'
import cssLogo from './assets/img/css-logo.png'
import jsLogo from './assets/img/javascript-logo.png'
import phpLogo from './assets/img/php-logo.png'
import springLogo from './assets/img/spring-boot-logo.png'
import angularLogo from './assets/img/angular.jpg'
import reactLogo from './assets/img/react.png'
import gitLogo from './assets/img/outils/Git-logo.png'
import gitlabLogo from './assets/img/outils/GitLab_logo.png'
import dbeaverLogo from './assets/img/outils/dbeaver.png'
import dockerLogo from './assets/img/outils/docker.png'
import kaliLogo from './assets/img/outils/kali.png'
import mysqlLogo from './assets/img/outils/mysql.png'
import packetLogo from './assets/img/outils/packet.png'
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

const outils = [
  { name: 'Git', logo: gitLogo },
  { name: 'GitLab', logo: gitlabLogo },
  { name: 'DBeaver', logo: dbeaverLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Kali Linux', logo: kaliLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'Packet Tracer', logo: packetLogo },
  { name: 'Spring Boot', logo: springLogo },
  { name: 'Angular', logo: angularLogo },
  { name: 'React', logo: reactLogo },
]

const CITATION = '« Les rêves donnent naissance aux idées, les idées créent l\'innovation, et l\'innovation transforme le monde. »'

function App() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(CITATION.slice(0, i))
      if (i >= CITATION.length) clearInterval(interval)
    }, 2500 / CITATION.length)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Sidebar />
      <div className="banner" id="home">
        <img src={fondImg} alt="bannière" />
        <div className="banner-text">
          <h1>Kylian ENYEGUE</h1>
          <p className="banner-sub">De la réflexion à la solution</p>
          <p className="banner-tagline">Étudiant ingénieur</p>
        </div>
        <p className="banner-citation">{displayed}<span className="cursor">|</span></p>
      </div>
      <main>
        <section id="about">
          <h1 className="section-title">About me</h1>
          <div className="about-container">
            <div className="about-text">
              <p>Bonjour,</p>
              <p>En tant qu'étudiant ingénieur en informatique, je vais vous convaincre que mon profil est indispensable à votre entreprise.</p>
              <p>Je suis capable de m'adapter rapidement à un nouvel environnement technique et de monter en compétences de manière autonome. De plus je suis en mesure de travailler aussi bien seul qu'en équipe, ayant eu l'habitude de mener des projets de bout en bout tout en collaborant et communiquant avec d'autres personnes.</p>
              <p>En complément, j'ai la capacité de vulgariser des concepts techniques complexes grâce à mon expérience de tuteur et des soutenances de projets, ce qui me permet de communiquer efficacement avec des interlocuteurs non techniques.</p>
              <p>Je suis également curieux de nature et je prends l'initiative d'explorer des domaines que je ne connais pas encore, ce qui m'a amené à toucher au génie logiciel, à la cybersécurité, à l'IA et la Data.</p>
              <p>Par ailleurs, je suis capable d'apporter une vision globale sur un projet, en comprenant aussi bien les enjeux techniques que les besoins concrets d'un client derrière une fonctionnalité.</p>
              <p>Étant motivé et opérationnel, je suis apte à gérer plusieurs sujets en parallèle sans perdre en rigueur, une habitude prise entre mes projets académiques, mes activités associatives et mes expériences professionnelles.</p>
            </div>
            <div className="about-logo">
              <img src={isepLogo} alt="ISEP" />
              <a href={`${import.meta.env.BASE_URL}fiche_formation_isep.pdf`} target="_blank" rel="noopener noreferrer" className="experience-link">
                <i className="fi fi-rr-up-right-from-square"></i> Accéder à la fiche de formation
              </a>
            </div>
          </div>

          <div className="experience-container">
            <div className="experience-logo experience-logo-desktop">
              <img src={juniorIsepLogo} alt="Junior ISEP" />
              <a href="https://www.juniorisep.com/" target="_blank" rel="noopener noreferrer" className="experience-link">
                <i className="fi fi-rr-up-right-from-square"></i> Accéder à la page présentation JE
              </a>
            </div>
            <div className="experience-text">
              <h2 className="subsection-title">Expérience</h2>
              <div className="experience-logo-mobile">
                <img src={juniorIsepLogo} alt="Junior ISEP" />
                <a href="https://www.juniorisep.com/" target="_blank" rel="noopener noreferrer" className="experience-link">
                  <i className="fi fi-rr-up-right-from-square"></i> Accéder à la page présentation JE
                </a>
              </div>
              <p>Junior ISEP est la junior-entreprise de l'ISEP, classée parmi les meilleures de France, qui réalise des prestations numériques sur mesure pour des entreprises clientes.</p>
              <p>En tant que Responsable Technique en formation, j'ai l'opportunité de mettre en pratique les bonnes pratiques du développement logiciel telles que la conteneurisation avec Docker, la peer review de code et la gestion de dépôts GitLab.</p>
              <p>Je participe également à la supervision de l'infrastructure réseau de la structure, incluant des serveurs, machines virtuelles et conteneurs LXC via Proxmox, utilisés pour le développement, les tests et le déploiement des missions clients. Je contribue aussi à la configuration de reverse proxies, au monitoring via Grafana et à la sécurisation des accès avec WireGuard.</p>
              <p>C'est à partir de début juillet 2026 que je prendrai officiellement ce poste au sein de Junior ISEP.</p>
            </div>
          </div>

          <div className="experience-container">
            <div className="experience-logo experience-logo-desktop">
              <img src={garageIsepLogo} alt="GarageISEP" style={{ marginTop: '75px' }} />
            </div>
            <div className="experience-text">
              <h2 className="subsection-title">Engagement associatif</h2>
              <div className="experience-logo-mobile">
                <img src={garageIsepLogo} alt="GarageISEP" />
              </div>
              <p>Je suis membre du CyberLab, un pôle de l'association GarageISEP. Au sein de ce groupe, je participe à des Capture The Flag et m'entraîne sur la plateforme TryHackMe pour développer progressivement mes compétences en cybersécurité. Je pratique le pentest sur des terminaux et des machines virtuelles tout en approfondissant mes connaissances des commandes Linux sur Kali.</p>
            </div>
          </div>
        </section>
        <section id="skills">
          <h1 className="section-title">Skills</h1>
          <h2 className="subsection-title subsection-title--right">Langages que je maîtrise :</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.logo} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <h2 className="subsection-title">Outils Devops, Virtualisation, automatisation et Systèmes réseaux utilisés :</h2>
          <div className="outils-marquee">
            <div className="outils-track">
              {[...outils, ...outils].map((outil, i) => (
                <img key={i} src={outil.logo} alt={outil.name} className="outil-img" />
              ))}
            </div>
          </div>
        </section>
        <section id="projets">
          <h1 className="section-title">Projets</h1>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-left">
                <img src={gmitixImg} alt="PWA transcription" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-java"></i>
                    <i className="fi fi-tr-react"></i>
                    <i className="fi fi-brands-gitlab"></i>
                    <i className="fi fi-ss-sql-server"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>PWA de transcription automatique de réunions</h3>
                <p>Cette application web progressive automatise la gestion complète des réunions. Elle planifie les sessions, suit leur avancement et gère des templates de comptes-rendus. L'IA transcrit les enregistrements audio et génère un document Word synchronisé avec Google Meet.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={seekStayImg} alt="Seek&Stay" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fa-brands fa-html5"></i>
                    <i className="fi fi-brands-css3-alt"></i>
                    <i className="fi fi-brands-js"></i>
                    <i className="fi fi-brands-php"></i>
                    <i className="fi fi-ss-sql-server"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Plateforme de location étudiante</h3>
                <p style={{ textAlign: 'left' }}>Cette plateforme web centralise la recherche et publication de logements étudiants. Elle propose des filtres dynamiques, une carte interactive via Google Maps, un système de messagerie, la gestion des annonces et une authentification complète.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={ragImg} alt="RAG" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-python"></i>
                    <i className="fi fi-rr-microchip-ai"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Système intelligent de recherche documentaire (RAG)</h3>
                <p>Cet outil intelligent permet de rechercher une information au sein de documents internes d'une entreprise en langage naturel. Il analyse, vectorise et sécurise les sources documentaires pour générer des réponses précises et sourcées, tout en contrôlant les permissions d'accès.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={portfolioImg} alt="Gestion portefeuille" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-java"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Application de gestion de portefeuille d'actifs</h3>
                <p>Cette application dispose d'une interface graphique permettant de créer, cloner et gérer des portefeuilles multi-actifs et de cryptomonnaies. Elle suit l'évolution des investissements dans le temps, traite les achats et ventes et récupère les prix du marché via une API publique.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={ddosImg} alt="DDoS" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-ss-shield-keyhole"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Simulation attaque DDoS et analyse de sécurité réseau</h3>
                <p>Cette simulation modélise une attaque DDoS sur un réseau complet afin d'analyser ses impacts et identifier les vulnérabilités. Des stratégies de défense multicouches sont ensuite mises en place pour sécuriser et protéger l'infrastructure réseau.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={capgeImg} alt="Hackathon Capgemini" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-python"></i>
                    <i className="fi fi-rr-microchip-ai"></i>
                    <i className="fi fi-brands-css3-alt"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Hackathon AI & Cybersecurity: Capgemini Silicon Days</h3>
                <p>Cette solution conçue lors du Hackathon Capgemini Silicondays 2026 exploite l'IA pour détecter le phishing, analyser les incidents en temps réel et générer automatiquement des rapports post-mortem, afin de renforcer la cybersécurité avant, pendant et après une attaque.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={tpcyberImg} alt="TP cybersécurité" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons"></div>
                </div>
              </div>
              <div className="project-info">
                <h3>TP de cybersécurité fait en classe</h3>
                <p>Dans le cadre de mes cours de cybersécurité, j'ai réalisé plusieurs travaux pratiques portant sur le chiffrement de messages entre deux interlocuteurs, sur l'analyse et l'exploitation de vulnérabilités d'applications web et bien d'autres thèmes...</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={compagnieImg} alt="Compagnie aérienne" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-java"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Application de gestion pour une compagnie aérienne</h3>
                <p>Cette application de gestion aérienne implémente en Java les fonctionnalités de réservation de vols pour les passagers ainsi que l'affectation automatique des équipages aux trajets, en appliquant les principes de la programmation orientée objet.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={pianoImg} alt="Digital Music Instrument Studio" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-python"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Digital Music Instrument Studio</h3>
                <p>Cette application musicale interactive propose un piano 3 octaves, un xylophone et une soundboard personnalisables. Elle lit des partitions via fichier texte et enregistre en temps réel les touches jouées par l'utilisateur pour générer des tracks audio complets.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={quizzImg} alt="Quiz Game App" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-python"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Quiz Game App</h3>
                <p>Ce jeu de quiz propose une interface graphique avec des questions de culture générale, histoire et géographie stockées en fichier JSON. Il intègre un timer affiché en barre de progression, trois niveaux de difficulté et un suivi du score en temps réel avec résultat final.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={traductionImg} alt="Outil de traduction" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-brands-python"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Outil de traduction avec interface graphique</h3>
                <p>Cet outil propose une interface graphique pour traduire et prononcer des mots entre le français et l'anglais via un dictionnaire en fichier texte. Les utilisateurs peuvent ajouter des mots et compléter les traductions manquantes, sauvegardées automatiquement pour une utilisation future.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-left">
                <img src={chassisImg} alt="Robot sumo japonais" />
                <div className="project-techstack">
                  <span>Tech Utilisées :</span>
                  <div className="project-techstack-icons">
                    <i className="fi fi-rr-microchip"></i>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Robot sumo japonais</h3>
                <p>Ce robot de combat conçu en équipe intègre une modélisation 3D des roues, du châssis et des composants structurels, fabriqués par impression 3D. Programmé sur Arduino, il détecte automatiquement les limites de l'arène et le robot adverse grâce à des capteurs de ligne et sonores.</p>
              </div>
            </div>

            {[...Array(0)].map((_, i) => (
              <div className="project-card" key={i}>
                <div className="project-left">
                  <img src={gmitixImg} alt="PWA transcription" />
                  <div className="project-techstack">
                    <span>Tech Utilisées :</span>
                    <div className="project-techstack-icons">
                      <i className="fi fi-brands-java"></i>
                      <i className="fi fi-tr-react"></i>
                      <i className="fi fi-brands-gitlab"></i>
                      <i className="fi fi-ss-sql-server"></i>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>PWA de transcription automatique de réunions</h3>
                  <p>Cette application web progressive automatise la gestion complète des réunions. Elle planifie les sessions, suit leur avancement et gère des templates de comptes-rendus. L'IA transcrit les enregistrements audio et génère un document Word synchronisé avec Google Meet.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <h2>Contact</h2>
        <div className="footer-links">
          <a href="mailto:kylian.enyeguemvodo@gmail.com">
            <i className="fi fi-sr-envelope"></i>
            kylian.enyeguemvodo@gmail.com
          </a>
          <a href="tel:+33601615351">
            <i className="fi fi-sr-phone-call"></i>
            +(33) 6 01 61 53 51
          </a>
        </div>
        <p className="footer-copy">Ce site a été conçu et développé avec ReactJS — Tous droits réservés</p>
      </footer>
    </>
  )
}

export default App
