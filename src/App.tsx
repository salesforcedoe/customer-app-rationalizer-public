import './App.css'

const SYSTEMS = [
  {
    key: 'engagement',
    title: 'System of Engagement',
    blurb: 'Where customers and employees show up — Experience Cloud, Slack, web.',
  },
  {
    key: 'agency',
    title: 'System of Agency',
    blurb: 'Agentforce — autonomous agents that act on behalf of users.',
  },
  {
    key: 'work',
    title: 'System of Work',
    blurb: 'CRM, Service, Sales, Industry Clouds — where work gets done.',
  },
  {
    key: 'context',
    title: 'System of Context',
    blurb: 'Data Cloud + Trust Layer — the grounding for every interaction.',
  },
]

const ARCHITECTURE_URL =
  `${import.meta.env.BASE_URL}architecture.html`.replace(/\/+/g, '/')

function App() {
  return (
    <main>
      <header className="hero">
        <div className="eyebrow">EA Hackathon · 2026-06-01</div>
        <h1>Customer App Rationalizer</h1>
        <p className="lede">
          Drop a customer's app inventory in. Get back a 4-Systems classification —
          replace, coexist, or integrate — grounded in the Headless 360 architecture.
        </p>
      </header>

      <section className="systems">
        {SYSTEMS.map((s) => (
          <article key={s.key} className={`system system--${s.key}`}>
            <h2>{s.title}</h2>
            <p>{s.blurb}</p>
          </article>
        ))}
      </section>

      <section className="architecture">
        <div className="architecture-head">
          <h2>Reference architecture</h2>
          <p>
            Four Salesforce primitives — custom object, custom metadata, Apex
            Invocable, Agentforce agent — wired into one Experience Cloud site
            with an LWC for the grid, plus the same agent surfaced in Slack.
            <a
              href={ARCHITECTURE_URL}
              target="_blank"
              rel="noreferrer"
              className="architecture-open"
            >
              Open full diagram ↗
            </a>
          </p>
        </div>
        <iframe
          src={ARCHITECTURE_URL}
          title="Reference Architecture — Customer App Rationalizer"
          className="architecture-frame"
        />
      </section>

      <section className="agent">
        <h2>Talk to the agent</h2>
        <p>
          The chat widget below is the same Application Strategy Agent powering
          the Experience Cloud surface and the Slackbot DM. Same brain, three
          doors.
        </p>
        <div id="agent-embed-slot" className="agent-slot">
          <div className="agent-placeholder">
            Agent embed loads here once the SDO Messaging for Web snippet is wired in.
          </div>
        </div>
      </section>

      <footer>
        <p>
          Built on Salesforce Platform · Experience Cloud · Agentforce · Data Cloud · Slack
        </p>
      </footer>
    </main>
  )
}

export default App
