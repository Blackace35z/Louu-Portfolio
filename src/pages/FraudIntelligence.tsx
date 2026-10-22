
import './ProjectPage.css'
import FraudDashboard from './FraudDashboard'

function FraudIntelligence() {
  return (
    <main className="project-page">
      <a className="project-back-link" href="/#work">
        ← Back to selected work
      </a>

      <section className="project-hero">
        <p className="project-eyebrow">CASE STUDY / 02</p>

        <h1>
          Fraud <span>Intelligence.</span>
        </h1>

        <p className="project-intro">
          Finding patterns hidden in financial data.
        </p>

        <p className="project-summary">
          An exploratory financial data analysis project using
          simulated mobile-money transactions to investigate
          fraud labels, compare transaction behavior, quantify
          transaction volumes, and communicate findings through
          SQL and an interactive-style analytics dashboard.
        </p>

        <div className="project-meta">
          <div>
            <span>PROJECT TYPE</span>
            <p>Data Analysis / Fintech</p>
          </div>

          <div>
            <span>STATUS</span>
            <p>Exploratory analysis completed</p>
          </div>

          <div>
            <span>TOOLS</span>
            <p>SQL · Python · Pandas · Power BI</p>
          </div>
        </div>

        <div className="lifeflow-showcase">
          <span className="showcase-label">
            TRANSACTION INTELLIGENCE
          </span>

          <div className="showcase-content">
            <p className="showcase-greeting">
              FOLLOW THE DATA
            </p>

            <h2>
              Every transaction
              <br />
              tells a story.
            </h2>

            <p>
              Explore transaction behavior, examine fraud labels,
              and turn large volumes of simulated financial data
              into clear, evidence-based findings.
            </p>

            <div className="showcase-task">
              <span className="task-check">01</span>
              <span>Profile millions of transactions</span>
            </div>

            <div className="showcase-task">
              <span className="task-check">02</span>
              <span>Compare fraud labels by transaction type</span>
            </div>

            <div className="showcase-task">
              <span className="task-check">03</span>
              <span>Present findings in a dashboard</span>
            </div>
          </div>
        </div>
      </section>

      <FraudDashboard />

      <section className="project-content">
        <article className="project-block">
          <p className="project-eyebrow">01 / THE CHALLENGE</p>

          <h2>
            Suspicious activity can hide in millions of transactions.
          </h2>

          <p>
            Financial transaction datasets can contain patterns
            that are difficult to recognize from individual records.
            Comparing transaction types, amounts, and fraud labels
            helps reveal where labeled activity is concentrated.
          </p>

          <p>
            The objective of this project is to analyze those
            patterns in a simulated mobile-money environment and
            communicate the findings clearly. The analysis explores
            existing fraud labels; it does not claim to be a
            production fraud-detection system.
          </p>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">02 / THE DATA</p>

          <h2>A simulated mobile-money dataset.</h2>

          <p>
            The project uses PaySim, a synthetic dataset created
            for research into mobile-money transactions and fraud
            detection. Its records represent simulated activity,
            not verified real-world customer transactions or
            confirmed financial losses.
          </p>

          <div className="project-feature-grid">
            <div className="project-feature">
              <span>01</span>
              <h3>Transaction behavior</h3>
              <p>
                Compare transaction types, transaction amounts,
                and activity across simulated time steps.
              </p>
            </div>

            <div className="project-feature">
              <span>02</span>
              <h3>Account balances</h3>
              <p>
                Use origin and destination balance fields to
                investigate changes associated with transactions.
              </p>
            </div>

            <div className="project-feature">
              <span>03</span>
              <h3>Fraud labels</h3>
              <p>
                Analyze the records labeled as fraudulent in
                the dataset and compare their distribution.
              </p>
            </div>
          </div>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">03 / THE METHOD</p>

          <h2>From raw data to evidence-based insights.</h2>

          <p>
            The analysis combines SQL aggregations with
            Python-based data handling and a Power BI dashboard.
            The workflow moves from understanding the dataset
            to comparing patterns and presenting results.
          </p>

          <div className="project-feature-grid">
            <div className="project-feature">
              <span>01</span>
              <h3>Prepare and profile</h3>
              <p>
                Review the dataset structure, identify relevant
                fields, and establish transaction and fraud-label
                totals for the analysis.
              </p>
            </div>

            <div className="project-feature">
              <span>02</span>
              <h3>Analyze with SQL</h3>
              <p>
                Aggregate transactions by type and time period,
                calculate fraud-label rates, and compare
                transaction amounts with labeled fraud amounts.
              </p>
            </div>

            <div className="project-feature">
              <span>03</span>
              <h3>Visualize findings</h3>
              <p>
                Prepare grouped analytical results for Power BI
                and present key metrics, transaction comparisons,
                and financial summaries in a dashboard.
              </p>
            </div>
          </div>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">04 / KEY FINDINGS</p>

          <h2>Fraud labels are concentrated in two transaction types.</h2>

          <p>
            In the analyzed PaySim dataset, the 8,213
            fraud-labeled records occur in TRANSFER and CASH_OUT
            transactions. The other three transaction types in
            this analysis contain no fraud-labeled records.
          </p>

          <div className="project-feature-grid">
            <div className="project-feature">
              <span>01</span>
              <h3>TRANSFER</h3>
              <p>
                4,097 fraud-labeled transactions out of 532,909
                transfers, representing approximately 0.769%.
              </p>
            </div>

            <div className="project-feature">
              <span>02</span>
              <h3>CASH_OUT</h3>
              <p>
                4,116 fraud-labeled transactions out of 2,237,500
                cash-out transactions, representing approximately
                0.184%.
              </p>
            </div>

            <div className="project-feature">
              <span>03</span>
              <h3>Class imbalance</h3>
              <p>
                Fraud-labeled records represent approximately
                0.129% of all 6,362,620 transactions, so overall
                accuracy alone would be insufficient for evaluating
                a future detection model.
              </p>
            </div>
          </div>

          <p>
            These figures describe the dataset's existing labels.
            They do not establish that the same patterns or rates
            occur in real financial systems.
          </p>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">05 / FINANCIAL ANALYSIS</p>

          <h2>Transaction value adds another layer of context.</h2>

          <p>
            The dataset contains approximately 1.144 trillion
            in total transaction amount units, with about 12.056
            billion in transaction amounts associated with
            fraud-labeled records. These are dataset-level
            simulated amounts, not confirmed real-world losses.
          </p>

          <p>
            Comparing total transaction value with fraud-labeled
            transaction value helps describe the scale of activity
            represented in the dataset. Amounts alone do not prove
            that a transaction is fraudulent or that the entire
            amount was lost.
          </p>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">06 / THE TOOLKIT</p>

          <h2>Built for practical data exploration.</h2>

          <p>
            SQL is used to aggregate and compare transaction
            records. Python and Pandas support data handling,
            while Power BI provides a visual layer for exploring
            the resulting metrics. The current work focuses on
            descriptive analysis rather than a trained predictive
            model.
          </p>

          <div className="project-tags">
            <span>SQL</span>
            <span>Python</span>
            <span>Pandas</span>
            <span>Power BI</span>
            <span>Exploratory Data Analysis</span>
            <span>Financial Analytics</span>
          </div>
        </article>

        <article className="project-block">
          <p className="project-eyebrow">07 / LIMITATIONS & NEXT STEPS</p>

          <h2>Insight is the starting point, not the finish line.</h2>

          <p>
            PaySim is synthetic, and the current analysis examines
            existing labels rather than predicting fraud on
            unseen transactions. A future modeling stage could
            compare suitable classification methods using
            precision, recall, F1-score, and precision-recall
            analysis, with a leakage-aware train/test strategy.
          </p>

          <p>
            Further work could also investigate balance changes,
            transaction sequences, and the reasons fraud labels
            are concentrated in specific transaction types.
          </p>
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

export default FraudIntelligence
