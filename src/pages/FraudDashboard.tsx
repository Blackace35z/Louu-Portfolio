
import './FraudDashboard.css'

const totalTransactions = 6_362_620
const totalFraudLabeled = 8_213

const transactionTypes = [
  { name: 'CASH_OUT', transactions: 2_237_500, fraudLabeled: 4_116, fraudRate: 0.184 },
  { name: 'PAYMENT', transactions: 2_151_495, fraudLabeled: 0, fraudRate: 0 },
  { name: 'CASH_IN', transactions: 1_399_284, fraudLabeled: 0, fraudRate: 0 },
  { name: 'TRANSFER', transactions: 532_909, fraudLabeled: 4_097, fraudRate: 0.7688 },
  { name: 'DEBIT', transactions: 41_432, fraudLabeled: 0, fraudRate: 0 },
]

function formatNumber(value: number) {
  return value.toLocaleString('en-US')
}

function FraudDashboard() {
  const highestVolume = Math.max(
    ...transactionTypes.map((type) => type.transactions),
  )

  const highestFraudRate = Math.max(
    ...transactionTypes.map((type) => type.fraudRate),
  )

  return (
    <section
      className="fraud-dashboard"
      aria-label="Fraud analytics dashboard"
    >
      <header className="fraud-dashboard-header">
        <div>
          <span className="fraud-overline">LOUU / ANALYTICS LAB</span>
          <h2>Transaction intelligence</h2>
          <p>Key findings from simulated mobile-money transactions.</p>
        </div>

        <span className="fraud-demo-badge">PAYSIM DATA</span>
      </header>

      <div className="fraud-metrics">
        <article className="fraud-metric">
          <span>TOTAL TRANSACTIONS</span>
          <strong>{(totalTransactions / 1_000_000).toFixed(2)}M</strong>
        </article>

        <article className="fraud-metric">
          <span>FRAUD-LABELED</span>
          <strong>{formatNumber(totalFraudLabeled)}</strong>
        </article>

        <article className="fraud-metric">
          <span>FRAUD-LABEL RATE</span>
          <strong>
            {((totalFraudLabeled / totalTransactions) * 100).toFixed(4)}%
          </strong>
        </article>
      </div>

      <div className="fraud-dashboard-grid">
        <article className="fraud-panel">
          <div className="fraud-panel-heading">
            <span className="fraud-overline">01 / VOLUME</span>
            <h3>Transaction types</h3>
            <p>Share of all transactions by type.</p>
          </div>

          <div className="fraud-volume-list">
            {transactionTypes.map((type) => {
              const share = (type.transactions / totalTransactions) * 100
              const barWidth = (type.transactions / highestVolume) * 100

              return (
                <div className="fraud-volume-item" key={type.name}>
                  <div className="fraud-type-label">
                    <span>{type.name}</span>
                    <span>{share.toFixed(1)}%</span>
                  </div>

                  <div
                    className="fraud-type-track"
                    role="progressbar"
                    aria-label={`${type.name} transaction volume`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Number(barWidth.toFixed(1))}
                  >
                    <span
                      className="fraud-type-fill"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>

                  <p className="fraud-volume-count">
                    {formatNumber(type.transactions)} transactions
                  </p>
                </div>
              )
            })}
          </div>
        </article>

        <article className="fraud-panel">
          <div className="fraud-panel-heading">
            <span className="fraud-overline">02 / FRAUD LABELS</span>
            <h3>Where labels appear</h3>
            <p>Fraud-label rate within each transaction type.</p>
          </div>

          <div className="fraud-volume-list">
            {transactionTypes
              .filter((type) => type.fraudRate > 0)
              .sort((a, b) => b.fraudRate - a.fraudRate)
              .map((type) => {
                const barWidth =
                  (type.fraudRate / highestFraudRate) * 100

                return (
                  <div className="fraud-volume-item" key={type.name}>
                    <div className="fraud-type-label">
                      <span>{type.name}</span>
                      <span>{type.fraudRate.toFixed(3)}%</span>
                    </div>

                    <div
                      className="fraud-type-track"
                      role="progressbar"
                      aria-label={`${type.name} fraud-labeled rate`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Number(barWidth.toFixed(1))}
                    >
                      <span
                        className="fraud-type-fill"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>

                    <p className="fraud-volume-count">
                      {formatNumber(type.fraudLabeled)} fraud-labeled transactions
                    </p>
                  </div>
                )
              })}
          </div>

          <p className="fraud-chart-note">
            TRANSFER has the highest fraud-label rate in this dataset.
          </p>
        </article>
      </div>

      <p className="fraud-disclaimer">
        PaySim is synthetic data. These figures describe existing
        dataset labels, not live fraud detections or verified losses.
      </p>
    </section>
  )
}

export default FraudDashboard
