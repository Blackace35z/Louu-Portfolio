
import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LifeFlow from './pages/LifeFlow'
import FraudIntelligence from './pages/FraudIntelligence'
import ScrollToTop from './ScrollToTop'

const roles = [
  'digital experiences.',
  'products that matter.',
  'real-world solutions.',
]

const projects = [
  {
    number: '01',
    category: 'PRODUCTIVITY',
    name: 'LifeFlow',
    description:
      'A productivity app concept designed to help people organize their days, focus on priorities, and make meaningful progress.',
    tags: ['React', 'TypeScript', 'Product Design'],
    visual: 'lifeflow',
    status: 'IN DEVELOPMENT',
    path: '/projects/lifeflow',
  },
  {
    number: '02',
    category: 'DATA & FINTECH',
    name: 'Fraud Intelligence',
    description:
      'A Python-based investigation of simulated mobile-money transactions to explore fraud patterns and detection methods.',
    tags: ['Python', 'Pandas', 'Fraud Detection'],
    visual: 'data',
    status: 'IN DEVELOPMENT',
    path: '/projects/fraud-intelligence',
  },
]

function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <main>
      <header className="navbar container">
        <a className="brand" href="/#home" aria-label="Louu home">
          louu<span className="brand-dot">.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="/#contact">
          Let's talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero container" id="home">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            <span>BUILDING, LEARNING, EXPLORING</span>
          </div>

          <p className="eyebrow">
            ABDELLATIF AOUSAJI <span>— THE PERSON BEHIND LOUU</span>
          </p>

          <h1>
            I turn ideas
            <br />
            into{' '}
            <span className="changing-role" aria-live="polite">
              {roles[roleIndex]}
            </span>
          </h1>

          <p className="hero-description">
            I'm Abdellatif, the mind behind Louu. I bring together
            technology, data, and creative thinking to explore ideas
            and build useful digital products.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Let's connect
            </a>
          </div>

          <div className="hero-bottom">
            <a className="scroll-cue" href="#work">
              <span className="scroll-line" />
              SCROLL TO EXPLORE
            </a>

            <span className="hero-index">01 / 04</span>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="orbit-core">L.</div>
          <span className="orbit-star star-one">✳</span>
          <span className="orbit-star star-two">✳</span>
          <span className="orbit-caption">IDEAS INTO IMPACT</span>
        </div>
      </section>

      <section className="work-section container" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">01 — SELECTED WORK</p>
            <h2>
              Built from curiosity<span>.</span>
            </h2>
          </div>

          <p className="section-note">
            A growing collection of projects, experiments, and ideas.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-card"
              key={project.number}
              to={project.path}
              aria-label={`Explore ${project.name}`}
            >
              <div
                className={`project-visual ${project.visual}-visual`}
              >
                <span className="visual-label">
                  {project.number} / {project.category}
                </span>

                <span className="project-status">
                  {project.status}
                </span>

                {project.visual === 'lifeflow' ? (
                  <div className="lifeflow-preview">
                    <span className="preview-kicker">
                      YOUR DAY, IN FOCUS
                    </span>

                    <span className="preview-title">
                      Make room for
                      <br />
                      what matters.
                    </span>

                    <div className="preview-progress">
                      <span />
                    </div>

                    <span className="preview-caption">
                      SMALL STEPS. REAL PROGRESS.
                    </span>
                  </div>
                ) : (
                  <div className="chart-art" aria-hidden="true">
                    <div className="chart-bars">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <svg viewBox="0 0 320 120">
                      <path
                        d="M5 100 L45 82 L85 90 L125 48 L165 62 L205 25 L245 40 L315 5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>

                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <span>
                  Explore project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="projects-note">
          This is a growing portfolio. Project descriptions and status
          labels will evolve as the work develops.
        </p>
      </section>

      <section className="about-section container" id="about">
        <p className="section-label">02 — BEHIND THE BRAND</p>

        <h2>
          Curious by nature.
          <br />
          <span>Driven to build.</span>
        </h2>

        <div className="about-layout">
          <p className="about-description">
            I'm Abdellatif Aousaji, the person behind Louu. I'm
            interested in how technology, data, and thoughtful design
            can turn complex problems into useful experiences. I'm
            learning by building, experimenting with ideas, and
            challenging myself to create things that matter.
          </p>

          <div className="about-principles">
            <div>
              <span>01</span>
              <p>Stay curious</p>
            </div>

            <div>
              <span>02</span>
              <p>Build with purpose</p>
            </div>

            <div>
              <span>03</span>
              <p>Keep getting better</p>
            </div>
          </div>
        </div>

        <a className="text-link" href="/#work">
          See what I'm exploring <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="contact-section container" id="contact">
        <p className="section-label">03 — YOUR TURN</p>

        <h2>
          Have something
          <br />
          <span>in mind?</span>
        </h2>

        <p>
          Have an interesting idea, a project to discuss, or an
          opportunity to share? Let's start a conversation.
        </p>

        <a
          className="button button-primary"
          href="mailto:abdellatifaousaji29@gmail.com"
        >
          Get in touch <span aria-hidden="true">↗</span>
        </a>

        <a
          className="contact-footnote"
          href="mailto:abdellatifaousaji29@gmail.com"
        >
          abdellatifaousaji29@gmail.com
        </a>

        <div>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/abdelatif-aousaji-56209b339/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          {' · '}

          <a
            className="text-link"
            href="https://github.com/Blackace35z"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="footer container">
        <a className="brand" href="/#home" aria-label="Back to Louu home">
          louu<span className="brand-dot">.</span>
        </a>

        <p>Designed with curiosity. Built with intention.</p>

        <a href="/#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} Abdellatif Aousaji · Louu
        </span>
      </footer>
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/lifeflow" element={<LifeFlow />} />
        <Route
          path="/projects/fraud-intelligence"
          element={<FraudIntelligence />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
