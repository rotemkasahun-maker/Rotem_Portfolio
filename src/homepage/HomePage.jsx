import React, { useState } from 'react';
import './homepage.css';

const homepageCopy = {
  fridgeHidden: 'If the vegetables are hidden in the drawer, I forget they exist.',
  fridgeVisible: 'So I stopped hiding them.'
};

function FridgeHero({ openCase }) {
  const [visible, setVisible] = useState(false);

  return (
    <section className="homepage-hero">
      <div className="homepage-hero-copy">
        <h1>{visible ? homepageCopy.fridgeVisible : homepageCopy.fridgeHidden}</h1>

        <div className="homepage-state-selector" aria-label="Refrigerator visibility state">
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

      <div className="homepage-fridge">
        <img
          src={visible ? '/assets/fridge-visible.png' : '/assets/fridge-hidden.png'}
          alt={
            visible
              ? 'Open refrigerator with fresh vegetables visible in the door'
              : 'Open refrigerator with wilted vegetables hidden in the drawer'
          }
        />
      </div>

      <button className="homepage-hero-link" onClick={openCase}>
        View Family Finance case study →
      </button>
    </section>
  );
}

function ProjectTeaser({ openCase }) {
  return (
    <section className="homepage-project">
      <div className="homepage-project-rule" />
      <div className="homepage-project-index" aria-label="Catalogue entry 01">01</div>

      <div className="homepage-project-field">
        <div className="homepage-project-identification">
          <div className="homepage-project-type">Product / UX / Systems</div>
          <h2>Family Finance</h2>
          <button className="homepage-project-link" onClick={openCase}>
            Open case study →
          </button>
        </div>

        <div className="homepage-project-artifact">
          <img
            src="/assets/ff-sections-1-2-reference.png"
            alt="Family Finance case study visual reference"
          />
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ setRoute }) {
  const openCase = () => setRoute('family-finance');

  return (
    <main className="homepage">
      <FridgeHero openCase={openCase} />
      <ProjectTeaser openCase={openCase} />
    </main>
  );
}
