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

type Beat = {
  num: string
  time: string
  title: string
  role: 'in-role' | 'out-of-role'
  body: React.ReactNode
}

const BEATS: Beat[] = [
  {
    num: '1',
    time: '0:00 – 0:30',
    title: 'Hook with the numbers',
    role: 'in-role',
    body: (
      <p>
        GM has <strong>1,319 applications</strong> in their rationalization
        workbook. Joi Bigelow's RFI on May 18 asks Salesforce to consolidate{' '}
        <strong>about 30 of them</strong>. PACCAR/DAF — different OEM, different
        continent — told us <strong>150 sales apps</strong> and asked for a
        6/12/18-month North Star. Stellantis is consolidating six brands. Every
        one of these conversations starts the same way: <em>here's the spreadsheet.</em>{' '}
        And every one of them ends the same way: <em>we'll get back to you.</em>{' '}
        Today I'm going to end one of these conversations differently.
      </p>
    ),
  },
  {
    num: '2',
    time: '0:30 – 1:00',
    title: 'Frame the move',
    role: 'in-role',
    body: (
      <p>
        I'm going to drop PACCAR's 150-app inventory into a portal. An agent is
        going to read it, classify every app against the Salesforce 4-Systems
        framework — Engagement, Agency, Work, Context — and hand me back an
        architecture diagram. Replace, coexist, integrate. Color-coded. In 90
        seconds. Watch.
      </p>
    ),
  },
  {
    num: '3',
    time: '1:00 – 3:30',
    title: 'Live demo',
    role: 'in-role',
    body: (
      <ul>
        <li>
          <strong>Drop file (0:10).</strong> Drag PACCAR CSV onto the Experience
          Cloud site. 10 apps appear in a list.
        </li>
        <li>
          <strong>Talk to the agent (0:30).</strong> Type "Classify these for me."
          Agent acknowledges, writes records to{' '}
          <code>App_Inventory__c</code>, calls Apex Rationalizer, returns the
          populated grid.
        </li>
        <li>
          <strong>Architecture renders (0:20).</strong> 2x2 grid appears. Engagement
          / Agency / Work / Context. Each app a colored pill. Replace = red,
          Coexist = amber, Integrate = green.
        </li>
        <li>
          <strong>Drill in (0:50).</strong> Click DAF 3D Truck Configurator. Side
          panel: System = Work. Decision = REPLACE. Solution = Revenue Cloud +
          Variant Configurator on Auto Cloud Vehicle. Rationale traces back to
          the customer's named risk.
        </li>
        <li>
          <strong>Photograph it (0:10).</strong> Pause. <em>"That's the architecture.
          That's what the customer photographs and walks out of the room with."</em>
        </li>
        <li>
          <strong>Verbalize GM (0:30).</strong> Same engine. 1,319 GM apps. RFI
          scopes 30. Same drag-and-drop. Same agent. Same grid. Different customer,
          same answer shape.
        </li>
      </ul>
    ),
  },
  {
    num: '4',
    time: '3:30 – 4:00',
    title: 'Name the four systems',
    role: 'in-role',
    body: (
      <p>
        What you just watched is Headless 360. <strong>Engagement</strong> is the
        Experience Cloud site — embeddable in any customer portal.{' '}
        <strong>Agency</strong> is the Agentforce agent that just classified.{' '}
        <strong>Work</strong> is <code>App_Inventory__c</code>, the system of
        record. <strong>Context</strong> is the rule metadata and the customer's
        named risks behind it. The 4-Systems framework didn't just classify the
        apps — it <em>is</em> the architecture.
      </p>
    ),
  },
  {
    num: '5',
    time: '4:00 – 4:30',
    title: 'Slack cameo',
    role: 'in-role',
    body: (
      <>
        <p>
          <em>Switch to Slack DM with Slackbot.</em> "And because the engine is
          Salesforce-native, the same agent answers from a different surface.
          Watch. Slack. Same agent."
        </p>
        <p>
          <em>Type:</em> "Classify these PACCAR apps for me: DAF 3D Truck
          Configurator, SAP ECC OrderCapture, IDMS/Cobol Warehousing."{' '}
          <em>Slackbot replies inline with 3 classifications.</em>
        </p>
        <p>
          Same agent. Same engine. Different surface.{' '}
          <strong>GM rolled Slack to 90,000 employees in 9 months — 7,000
          workflows, 200 integrations.</strong> Slack is our System of Engagement
          now. The spreadsheet says we have an inventory problem. The 4-Systems
          map says we have a Salesforce-shaped hole — and Headless 360 means the
          answer shows up wherever the customer already is.
        </p>
      </>
    ),
  },
  {
    num: '6',
    time: '4:30 – 5:00',
    title: 'Out of role — build summary + 2 prompts',
    role: 'out-of-role',
    body: (
      <>
        <p>
          <em>Step out of role. Talk to camera.</em> Quick build summary. Four
          Salesforce primitives — custom object, custom metadata, Apex Invocable,
          Agentforce agent — wired into one Experience Cloud site with an LWC for
          the grid, plus the same agent surfaced in Slack via the standard
          Salesforce-Slack connection. No custom server. No bespoke
          infrastructure. Built in an SDO using MeshMesh, in about six hours.
        </p>
        <div className="prompt">
          <span className="prompt-label">Prompt 1 — the data layer</span>
          <p>
            Create custom object <code>App_Inventory__c</code> with fields for
            Name, Category, Current_Owner, Named_Risk, Business_Criticality,
            System, Decision, Salesforce_Solution, Rationale, Customer. Create
            custom metadata <code>Four_Systems_Rule__mdt</code> with
            Category_Match, System, Decision, Salesforce_Solution. Seed 8 rule
            records from the JSON I'll paste.
          </p>
        </div>
        <div className="prompt">
          <span className="prompt-label">Prompt 2 — the agent action</span>
          <p>
            Generate Apex class <code>Rationalizer</code> with an{' '}
            <code>@InvocableMethod</code> that takes a list of{' '}
            <code>App_Inventory__c</code> records, looks up the matching{' '}
            <code>Four_Systems_Rule__mdt</code> by category, and updates each
            record with system, decision, and Salesforce solution. Make it
            Agentforce-callable.
          </p>
        </div>
        <p>
          Every action this agent takes is an Apex Invocable. The same engine
          answers from a Slack bot, an email handler, or an MCP client tomorrow
          — I just didn't need to ship those tomorrow to win today.{' '}
          <strong>API is the UI.</strong> That's Headless 360 in one sentence.
        </p>
      </>
    ),
  },
]

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

      <section className="talktrack">
        <div className="talktrack-head">
          <h2>5-Minute Demo Talk Track</h2>
          <p>
            Beat-by-beat script for the submission video. In-role beats are the
            customer-facing demo; out-of-role beats hit rubric items 6 and 7
            (build summary + prompts shared).
          </p>
        </div>
        <ol className="beats">
          {BEATS.map((beat) => (
            <li key={beat.num} className={`beat beat--${beat.role}`}>
              <div className="beat-meta">
                <span className="beat-num">Beat {beat.num}</span>
                <span className="beat-time">{beat.time}</span>
                <span className={`beat-role beat-role--${beat.role}`}>
                  {beat.role === 'in-role' ? 'in role' : 'out of role'}
                </span>
              </div>
              <h3 className="beat-title">{beat.title}</h3>
              <div className="beat-body">{beat.body}</div>
            </li>
          ))}
        </ol>
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
