import { useCallback, useEffect, useState } from 'react'
import './App.css'

type Theme = 'dark' | 'light'

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = window.localStorage.getItem('theme') as Theme | null
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

const ARCHITECTURE_URL =
  `${import.meta.env.BASE_URL}architecture.html`.replace(/\/+/g, '/')

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

type Slide = {
  id: string
  label: string
  render: () => React.ReactNode
}

const SLIDES: Slide[] = [
  {
    id: 'title',
    label: 'Title',
    render: () => (
      <div className="slide-title-wrap">
        <p className="title-setup">
          Every customer hands us<br />the same spreadsheet.
        </p>
        <p className="title-pivot">Today we hand back</p>
        <h1 className="title-punch">an architecture.</h1>
        <div className="title-divider" />
        <div className="title-brand">Headless360 App Rationalizer</div>
        <p className="title-sub">
          The 4-Systems framework — drawn live by an agent.
          <br />
          <strong>1,319 GM apps. 90 seconds. One pattern.</strong>
        </p>
      </div>
    ),
  },
  {
    id: 'problem',
    label: 'The Problem',
    render: () => (
      <div className="slide-center slide-problem">
        <div className="eyebrow">The same conversation, every time</div>
        <h2 className="slide-h2">"Here's our spreadsheet."</h2>
        <div className="stat-row">
          <div className="stat">
            <div className="stat-num">1,319</div>
            <div className="stat-label">GM apps in their rationalization workbook</div>
          </div>
          <div className="stat">
            <div className="stat-num">150</div>
            <div className="stat-label">PACCAR / DAF sales applications</div>
          </div>
          <div className="stat">
            <div className="stat-num">6</div>
            <div className="stat-label">Stellantis brands consolidating</div>
          </div>
        </div>
        <p className="lede">
          Every conversation ends the same way: <em>we'll get back to you.</em>
          Today we end one differently.
        </p>
      </div>
    ),
  },
  {
    id: 'four-systems',
    label: 'The 4 Systems',
    render: () => (
      <div>
        <div className="slide-head">
          <div className="eyebrow">Headless 360</div>
          <h2 className="slide-h2">The 4-Systems Framework</h2>
        </div>
        <div className="systems">
          {SYSTEMS.map((s) => (
            <article key={s.key} className={`system system--${s.key}`}>
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'architecture',
    label: 'Architecture',
    render: () => (
      <div>
        <div className="slide-head">
          <div className="eyebrow">Reference architecture</div>
          <h2 className="slide-h2">Headless 360 is open to any agent</h2>
          <a
            href={ARCHITECTURE_URL}
            target="_blank"
            rel="noreferrer"
            className="architecture-open"
          >
            Open full diagram ↗
          </a>
        </div>
        <iframe
          src={ARCHITECTURE_URL}
          title="Reference Architecture — Headless360 App Rationalizer"
          className="architecture-frame"
        />
      </div>
    ),
  },
  {
    id: 'close',
    label: 'To the demo',
    render: () => (
      <div className="slide-center slide-close">
        <h2 className="slide-h2">Enough talk. Let's watch it work.</h2>
        <p className="lede">
          One agent. One Apex layer. Three doors. Watch it triage 1,300+ apps
          live.
        </p>
        <div className="close-stack">
          <span className="pill">Experience Cloud</span>
          <span className="pill">Agentforce</span>
          <span className="pill">Data Cloud</span>
          <span className="pill">Slack</span>
        </div>
      </div>
    ),
  },
]

function App() {
  const [theme, toggleTheme] = useTheme()
  const [index, setIndex] = useState(() => {
    if (typeof window === 'undefined') return 0
    const hash = window.location.hash.replace('#', '')
    const i = SLIDES.findIndex((s) => s.id === hash)
    return i >= 0 ? i : 0
  })

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, i))
    setIndex(clamped)
    window.location.hash = SLIDES[clamped].id
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(SLIDES.length - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const i = SLIDES.findIndex((s) => s.id === hash)
      if (i >= 0 && i !== index) setIndex(i)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [index])

  const slide = SLIDES[index]

  return (
    <div className="deck">
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span className="theme-toggle-icon" aria-hidden="true">
          {theme === 'dark' ? '☀️' : '🌙'}
        </span>
        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>

      <main className="slide" key={slide.id}>
        {slide.render()}
      </main>

      <nav className="deck-nav" aria-label="Slide navigation">
        <button
          type="button"
          className="nav-btn"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="dots" role="tablist">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`dot ${i === index ? 'dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}: ${s.label}`}
              aria-selected={i === index}
              role="tab"
              title={s.label}
            />
          ))}
        </div>
        <button
          type="button"
          className="nav-btn"
          onClick={next}
          disabled={index === SLIDES.length - 1}
          aria-label="Next slide"
        >
          →
        </button>
        <div className="counter">
          {index + 1} / {SLIDES.length}
        </div>
      </nav>
    </div>
  )
}

export default App
