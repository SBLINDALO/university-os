import { useMemo, useState } from 'react'
import './App.css'

const exams = [
  { id: 'psicologia', name: 'Psicologia della Comunicazione', credits: 12, color: 'coral', short: 'Psicologia' },
  { id: 'linguistica', name: 'Linguistica e Comunicazione', credits: 12, color: 'teal', short: 'Linguistica' },
  { id: 'persuasione', name: 'Comunicazione e Persuasione', credits: 12, color: 'yellow', short: 'Persuasione' },
  { id: 'storia', name: 'Istituzioni di Storia Contemporanea', credits: 12, color: 'blue', short: 'Storia' },
  { id: 'inglese', name: 'Inglese B1', credits: 6, color: 'pink', short: 'Inglese B1' },
]

const startDate = new Date('2026-10-08T12:00:00')
const endDate = new Date('2026-12-20T12:00:00')
const storageKey = 'university-os-activity-status'
const toKey = (date) => date.toISOString().slice(0, 10)
const formatDate = (date, options) => new Intl.DateTimeFormat('it-IT', options).format(date)
const daysBetween = (first, second) => Math.round((second - first) / 86400000)

function buildActivities() {
  const activities = []
  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const dayIndex = daysBetween(startDate, date)
    const exam = exams[dayIndex % exams.length]
    const dateKey = toKey(date)
    activities.push({ id: `${dateKey}-study`, date: dateKey, type: 'studio', title: `Sessione: ${exam.short}`, detail: `${dayIndex % 3 === 0 ? 'Ripasso attivo' : 'Capitolo e appunti'} · 90 min`, examId: exam.id })
    if (date.getDay() === 2 || date.getDay() === 4) activities.push({ id: `${dateKey}-lesson`, date: dateKey, type: 'lezione', title: `Lezione di ${exam.short}`, detail: '18:00 · aula / streaming · 2 h', examId: exam.id })
  }
  return activities
}

const allActivities = buildActivities()

function App() {
  const [selectedDate, setSelectedDate] = useState('2026-10-08')
  const [status, setStatus] = useState(() => JSON.parse(localStorage.getItem(storageKey) || '{}'))
  const [filter, setFilter] = useState('tutte')
  const days = useMemo(() => Array.from({ length: 7 }, (_, offset) => {
    const selected = new Date(`${selectedDate}T12:00:00`)
    const mondayOffset = (selected.getDay() + 6) % 7
    const day = new Date(selected)
    day.setDate(selected.getDate() - mondayOffset + offset)
    return day
  }), [selectedDate])
  const selectedActivities = allActivities.filter((activity) => activity.date === selectedDate).filter((activity) => filter === 'tutte' || (status[activity.id] || 'da fare') === filter)
  const completed = Object.values(status).filter((value) => value === 'completata').length
  const skipped = Object.values(status).filter((value) => value === 'saltata').length
  const progress = Math.round((completed / allActivities.length) * 100)
  const saveStatus = (id, nextStatus) => {
    setStatus((current) => {
      const next = { ...current }
      if (nextStatus === 'da fare') delete next[id]
      else next[id] = nextStatus
      localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })
  }
  const shiftWeek = (amount) => {
    const next = new Date(`${selectedDate}T12:00:00`)
    next.setDate(next.getDate() + amount * 7)
    const bounded = next < startDate ? startDate : next > endDate ? endDate : next
    setSelectedDate(toKey(bounded))
  }

  return (
    <main className="app-shell">
      <header className="topbar"><div className="brand-mark">U<span>O</span></div><div><p className="eyebrow">SESSIONE INVERNALE 26/27</p><h1>Il tuo semestre, a fuoco.</h1></div><div className="topbar-date">8 OTT — 20 DIC<br /><strong>2026</strong></div></header>
      <section className="hero-row"><div><p className="eyebrow accent-text">PIANO DI STUDIO</p><h2>Settimana del {formatDate(days[0], { day: 'numeric', month: 'long' })}</h2><p className="muted">Lezioni e studio, già distribuiti per arrivare preparato.</p></div><div className="progress-block"><div className="progress-label"><span>Avanzamento</span><strong>{progress}%</strong></div><div className="progress-track"><span style={{ width: `${progress}%` }} /></div><small>{completed} completate · {skipped} da recuperare</small></div></section>
      <section className="exam-strip">{exams.map((exam) => <div className="exam-chip" key={exam.id}><span className={`dot ${exam.color}`} /><div><strong>{exam.name}</strong><small>{exam.credits} CFU</small></div></div>)}</section>
      <section className="calendar-panel"><div className="panel-heading"><div><p className="eyebrow">CALENDARIO</p><h3>Il ritmo della settimana</h3></div><div className="week-actions"><button onClick={() => shiftWeek(-1)} aria-label="Settimana precedente">←</button><button onClick={() => setSelectedDate('2026-10-08')}>Oggi</button><button onClick={() => shiftWeek(1)} aria-label="Settimana successiva">→</button></div></div><div className="week-grid">{days.map((day) => { const key = toKey(day); const dayActivities = allActivities.filter((activity) => activity.date === key); return <button className={`day-cell ${key === selectedDate ? 'selected' : ''}`} key={key} onClick={() => setSelectedDate(key)}><span>{formatDate(day, { weekday: 'short' }).replace('.', '')}</span><strong>{day.getDate()}</strong><i>{dayActivities.length ? `${dayActivities.length} attività` : 'riposo'}</i><div className="day-dots">{dayActivities.map((activity) => <b className={activity.type} key={activity.id} />)}</div></button> })}</div></section>
      <section className="content-grid"><div className="activities-panel"><div className="panel-heading activity-heading"><div><p className="eyebrow">{formatDate(new Date(`${selectedDate}T12:00:00`), { weekday: 'long', day: 'numeric', month: 'long' })}</p><h3>Le tue attività</h3></div><div className="filter-tabs">{['tutte', 'da fare', 'completata', 'saltata'].map((item) => <button className={filter === item ? 'active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>{selectedActivities.length ? selectedActivities.map((activity) => { const current = status[activity.id] || 'da fare'; const exam = exams.find((item) => item.id === activity.examId); return <article className={`activity-card ${current.replace(' ', '-')}`} key={activity.id}><div className={`activity-icon ${activity.type}`}><span>{activity.type === 'lezione' ? '◌' : '✦'}</span></div><div className="activity-copy"><div className="activity-meta"><span>{activity.type}</span><em className={`dot ${exam.color}`} />{exam.short}</div><h4>{activity.title}</h4><p>{activity.detail}</p></div><div className="activity-actions">{current === 'saltata' && <button className="recover" onClick={() => saveStatus(activity.id, 'da fare')}>Recupera</button>}{current !== 'completata' && current !== 'saltata' && <button className="complete" onClick={() => saveStatus(activity.id, 'completata')}>Completa</button>}{current !== 'completata' && <button className="skip" onClick={() => saveStatus(activity.id, 'saltata')}>Salta</button>}{current === 'completata' && <button className="undo" onClick={() => saveStatus(activity.id, 'da fare')}>Annulla</button>}</div></article> }) : <div className="empty-state">Nessuna attività con questo filtro.<br /><button onClick={() => setFilter('tutte')}>Mostra tutte</button></div>}</div><aside className="side-panel"><div className="side-note"><span className="note-pin">+</span><p className="eyebrow">PROSSIMO PASSO</p><h3>Una cosa alla volta.</h3><p>Le attività saltate restano qui finché non le riporti nel tuo piano.</p></div><div className="legend"><p className="eyebrow">LEGENDA</p><div><span className="legend-mark lesson-mark" />Lezione</div><div><span className="legend-mark study-mark" />Studio individuale</div><div><span className="legend-mark missed-mark" />Da recuperare</div></div></aside></section>
      <footer><span>PIANO GENERATO IL 8 OTTOBRE 2026</span><span>{allActivities.length} attività pianificate · salvataggio automatico attivo</span></footer>
    </main>
  )
}

export default App
