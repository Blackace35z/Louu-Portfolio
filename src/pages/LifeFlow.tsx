
import './ProjectPage.css'

function LifeFlow() {
  return (
    <main className="project-page">
      <a className="project-back-link" href="/#work">
        ← Back to selected work
      </a>

      <section className="project-hero">
        <p className="project-eyebrow">CASE STUDY / 01</p>

        <h1>
          Life<span>Flow.</span>
        </h1>

        <p className="project-intro">
          Make room for what matters.
        </p>

        <p className="project-summary">
          LifeFlow is a productivity app concept designed to help
          people organize their days, focus on priorities, and make
          meaningful progress without feeling overwhelmed.
        </p>

        <div className="project-meta">
          <div>
            <span>PROJECT TYPE</span>
            <p>Productivity / Digital Product</p>
          </div>

          <div>
            <span>STATUS</span>
            <p>In development</p>
          </div>

          <div>
            <span>TECHNOLOGY</span>
            <p>React · TypeScript</p>
          </div>
        </div>

        <div className="lifeflow-showcase">
          <span className="showcase-label">A MORE INTENTIONAL DAY</span>

          <div className="showcase-content">
            <p className="showcase-greeting">YOUR DAY, IN FOCUS</p>

            <h2>
              Small steps.
              <br />
              Real progress.
            </h2>

            <p>
              A calmer way to approach your priorities, one task at a
              time.
            </p>

            <div className="showcase-task">
              <span className="task-check">✓</span>
              <span>Choose what matters today</span>
            </div>

            <div className="showcase-task">
              <span className="task-check">○</span>
              <span>Focus on one meaningful task</span>
            </div>

            <div className="showcase-task">
              <span className="task-check">○</span>
              <span>Reflect on your progress</span>
            </div>
          </div>
        </div>
      </section>

      <section className="project-content">
        <article className="project-block">
          <p className="project-eyebrow">01 / THE CHALLENGE</p>

          <h2>Productivity shouldn't feel overwhelming.</h2>

          <p>
            Busy days can make it difficult to decide what deserves
            attention. Too many tasks and competing priorities can
            leave people feeling stuck before they even begin.
          </p>

          <p>
            LifeFlow explores a simpler approach: make priorities
            visible, keep the experience clear, and help users take
            manageable steps forward.
          </p>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">02 / THE APPROACH</p>

          <h2>Clarity over complexity.</h2>

          <div className="project-feature-grid">
            <div className="project-feature">
              <span>01</span>
              <h3>Organize</h3>
              <p>
                Bring daily tasks and priorities into one clear view.
              </p>
            </div>

            <div className="project-feature">
              <span>02</span>
              <h3>Focus</h3>
              <p>
                Encourage attention on the next useful step instead
                of everything at once.
              </p>
            </div>

            <div className="project-feature">
              <span>03</span>
              <h3>Progress</h3>
              <p>
                Make it easier to recognize small wins and build
                consistent habits.
              </p>
            </div>
          </div>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">03 / THE TECHNOLOGY</p>

          <h2>Built with the web in mind.</h2>

          <p>
            The current portfolio describes LifeFlow as a project in
            development. React and TypeScript are the intended
            technologies shown here; the final implementation and
            features will be documented as they are completed.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Product thinking</span>
            <span>UI/UX exploration</span>
          </div>
        </article>

        <div className="project-next">
          <p className="project-eyebrow">MORE FROM LOUU</p>
          <h2>Curiosity becomes creation.</h2>

          <a className="project-next-link" href="/#work">
            Explore all projects <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default LifeFlow
