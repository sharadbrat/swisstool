import React from 'react';

import './Dialog.scss';

function Dialog({ children, active, title, close }) {
  const dialogClass = active ? 'dialog' : 'dialog dialog_inactive';
  const overlayRef = React.createRef();
  const closeBtnRef = React.createRef();

  function outerClick(event) {
    if (event.target === overlayRef.current) {
      close();
    }
  }

  return (
    <div ref={overlayRef} className={dialogClass} onClick={e => outerClick(e)}>
      <section className="dialog__window">
        <header className="dialog__window__header">
          <h1 className="dialog__window__heading">{title}</h1>
          <button ref={closeBtnRef} className="dialog__window__close-button" onClick={() => close()}/>
        </header>
        <main className="dialog__window__container">
          {children}
        </main>
      </section>
    </div>
  );
}

export { Dialog };
