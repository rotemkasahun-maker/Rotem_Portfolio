import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import HomePage from './homepage/HomePage.jsx';

const copy = {
  fridgeHidden: 'If the vegetables are hidden in the drawer, I forget they exist.',
  fridgeVisible: 'So I stopped hiding them.',
  ffOpening: 'I wanted to know where our money was going.',
  collecting: 'So I started collecting things.',
  realizationA: 'The problem wasn’t finding the information,',
  realizationB: 'it was me.',
  noSystem: 'I didn’t want another system to manage.',
  manageForMe: 'I wanted something to manage it for me.',
  onePlace: 'Now everything was in one place.',
  boring: 'But the system still expected me to do the boring parts.',
  hell: 'Oh hell no.',
  moreToDo: 'So I kept giving it more to do.',
  ask: 'When it really does need me, it can ask.',
  threeReceipts: 'Three receipts. One understanding.',
  insights: 'Suddenly the data could tell me other things as well.'
};

function Header({ route, setRoute }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setRoute('home')}>Rotem Kasahun</button>
      <nav>
        <button className={route === 'work' ? 'active' : ''} onClick={() => setRoute('work')}>Work</button>
        <button className={route === 'about' ? 'active' : ''} onClick={() => setRoute('about')}>About</button>
        <button className={route === 'contact' ? 'active' : ''} onClick={() => setRoute('contact')}>Contact</button>
      </nav>
    </header>
  );
}

function FridgeHero({ openCase }) {
  const [visible, setVisible] = useState(false);

  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>{visible ? copy.fridgeVisible : copy.fridgeHidden}</h1>

        <div className="toggle" aria-label="Refrigerator visibility state">
          <button
            className={!visible ? 'active' : ''}
            onClick={() => setVisible(false)}
          >
            Hidden
          </button>

          <button
            className={visible ? 'active' : ''}
            onClick={() => setVisible(true)}
          >
            Visible
          </button>
        </div>
      </div>

      <div className="fridge">
        <img
          src={visible ? '/assets/fridge-visible.png' : '/assets/fridge-hidden.png'}
          alt={
            visible
              ? 'Open refrigerator with fresh vegetables visible in the door'
              : 'Open refrigerator with wilted vegetables hidden in the drawer'
          }
        />
      </div>

      <div className="hero-action">
        <button onClick={openCase}>View Family Finance case study →</button>
      </div>
    </section>
  );
}

function Project({ openCase }) {
  return (
    <section className="project">
      <div className="project-index">01</div>

      <div className="project-layout">
        <div className="project-title-block">
          <div className="project-type">Product / UX / Systems</div>
          <h2>Family Finance</h2>
          <button className="text-link" onClick={openCase}>Open case study →</button>
        </div>

        <div className="project-artifact">
          <img
            src="/assets/ff-sections-1-2-reference.png"
            alt="Family Finance case study visual reference"
          />
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <div className="evidence">
      <div className="paper receipt">
        <small>RECEIPT</small>
        <b>Groceries</b>
        <p>Produce<br />Household<br />Cleaning<br />Everyday items</p>
      </div>

      <div className="paper sms">
        <small>SMS</small>
        <div className="bubble">Your digital receipt is ready.</div>
      </div>

      <div className="paper mail">
        <small>EMAIL</small>
        <b>Order confirmation</b>
        <p>Invoice attached. Payment received.</p>
      </div>

      <div className="paper bank">
        <small>BANK</small>
        <p>Supermarket&nbsp;&nbsp;₪287.40<br />Pharmacy&nbsp;&nbsp;₪84.70<br />Transfer&nbsp;&nbsp;₪300.00</p>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-kicker">Family Finance</div>
      <div className="phone-title">This month</div>

      <div className="phone-card">
        <span>Household spending</span>
        <strong>Overview</strong>
      </div>

      <div className="phone-list">
        <div><span>Transactions</span><b>View</b></div>
        <div><span>Receipts</span><b>Linked</b></div>
        <div><span>Needs attention</span><b>Review</b></div>
      </div>

      <div className="phone-nav">• ○ ○ ○</div>
    </div>
  );
}

function Ticker() {
  const items = [
    'Upload receipt',
    'Review transaction',
    'Confirm category',
    'Match receipt',
    'Add missing document',
    'Review exception'
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function DecisionNote({ title, status, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="decision-note">
      <button onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>
          <small>{status}</small>
          <strong>{title}</strong>
        </span>
        <span>{open ? '−' : '+'}</span>
      </button>

      {open && <div className="decision-body">{children}</div>}
    </div>
  );
}

function FamilyFinanceCaseStudy({ onBack }) {
  return (
    <main className="case-study">
      <div className="case-topbar">
        <button onClick={onBack}>← Back</button>
        <span>Family Finance / Product & UX case study</span>
      </div>

      <section className="ff-opening">
        <h1>{copy.ffOpening}</h1>
        <p className="collecting">{copy.collecting}</p>
        <Evidence />

        <div className="realization">
          <div>{copy.realizationA}</div>
          <div>{copy.realizationB}</div>
        </div>

        <div className="manage-copy">
          <p>{copy.noSystem}</p>
          <p>{copy.manageForMe}</p>
        </div>
      </section>

      <section className="ff-section ff-relief">
        <h2>{copy.onePlace}</h2>

        <div className="relief-layout">
          <PhoneMockup />
        </div>

        <p className="boring-line">{copy.boring}</p>
        <Ticker />
        <p className="hell">{copy.hell}</p>
      </section>

      <section className="ff-section short-section">
        <div className="section-kicker">Automation</div>
        <h2>{copy.moreToDo}</h2>
      </section>

      <section className="ff-section ask-section">
        <div className="section-kicker">Attention, only when necessary</div>
        <h2>{copy.ask}</h2>

        <div className="notification-scene">
          <div className="notification">
            <small>Family Finance</small>
            <strong>Receipt missing</strong>
            <span>Still nearby? Add it while the context is fresh.</span>
          </div>

          <DecisionNote title="Near-real-time receipt reminder" status="Important product decision">
            The intended behavior is to surface a missing-receipt reminder roughly 30 seconds after a transaction when no receipt has been detected.
          </DecisionNote>
        </div>
      </section>

      <section className="ff-section item-level">
        <div className="section-kicker">Item-level understanding</div>
        <h2>{copy.threeReceipts}</h2>
      </section>

      <section className="ff-section insights-section">
        <div className="section-kicker">Insights</div>
        <h2>{copy.insights}</h2>
      </section>

      <section className="ff-section madrid-section">
        <div className="section-kicker">Motivation</div>
        <h2>Madrid.</h2>
      </section>

      <section className="ff-section current-section">
        <div className="section-kicker">Current state</div>
        <h2>Still in development.</h2>
      </section>

      <section className="ff-ending">
        <p>The story stops here.</p>
        <h2>The product doesn’t.</h2>
        <button onClick={onBack}>Back to portfolio →</button>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="simple-page">
      <div className="page-kicker">About</div>
      <h1>Product thinking, UX and systems.</h1>
      <p>TODO: insert final approved biography copy here.</p>
    </main>
  );
}

function Contact() {
  return (
    <main className="simple-page">
      <div className="page-kicker">Contact</div>
      <h1>Let’s talk.</h1>
      <p>TODO: add approved email / LinkedIn links.</p>
    </main>
  );
}

function Home({ setRoute }) {
  return <HomePage setRoute={setRoute} />;
}

function App() {
  const [route, setRoute] = useState('home');

  if (route === 'family-finance') {
    return <FamilyFinanceCaseStudy onBack={() => setRoute('home')} />;
  }

  return (
    <>
      <Header route={route} setRoute={setRoute} />

      {route === 'home' && <Home setRoute={setRoute} />}
      {route === 'work' && <Project openCase={() => setRoute('family-finance')} />}
      {route === 'about' && <About />}
      {route === 'contact' && <Contact />}

      <footer className="footer">
        <span>Rotem Kasahun</span>
        <span>Product & UX</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
