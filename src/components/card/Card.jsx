import React from 'react';

import './Card.scss';

function Card({ header, className, children }) {

  const cardClass = 'card ' + (className ? className : '');

  return (
    <section className={cardClass}>
      <header className="card__header">
        {header}
      </header>
      <main className="card__content">
        {children}
      </main>
    </section>
  );
}

export { Card };
