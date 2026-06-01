import { useEffect } from 'react'
import './App.css'

declare global {
  interface Window {
    embeddedservice_bootstrap?: {
      settings: { language: string }
      init: (orgId: string, name: string, scrt2URL: string, options: object) => void
    }
  }
}

const SYSTEMS = [
  {
    key: 'engagement',
    title: 'System of Engagement',
    blurb: 'Where customers and employees show up — Slack, web, mobile, voice.',
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

function App() {
  useEffect(() => {
    // Placeholder for Salesforce Messaging for Web bootstrap.
    // Replace ORG_ID, DEPLOYMENT_NAME, and SCRT2_URL with values from
    // Embedded Service Deployment in the SDO once provisioned.
    // Trusted Sites + CORS must include this github.io origin.
  }, [])

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

      <section className="agent">
        <h2>Talk to the agent</h2>
        <p>
          The chat widget below is the same Agentforce agent powering the Experience
          Cloud surface and the Slackbot DM. Same brain, three doors.
        </p>
        <div id="agent-embed-slot" className="agent-slot">
          <div className="agent-placeholder">
            Agent embed loads here once the SDO Messaging for Web snippet is wired in.
          </div>
        </div>
      </section>

      <footer>
        <p>
          Built on Salesforce Platform · Experience Cloud · Agentforce · Data Cloud ·
          Slack
        </p>
      </footer>
    </main>
  )
}

export default App
