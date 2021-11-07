import React from 'react';

const StickyToTop = ({ setCurrentRef }) => {
  return (
    <div
      style={{ marginTop: '-14px' }}
      id="bottom-sticky"
      className="ui left close rail"
    >
      <div id="sticky-segment" className="ui compact raised inverted segment">
        <a
          onClick={() => setCurrentRef('home')}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          href="#home"
        >
          <i
            style={{ alignSelf: 'center' }}
            className="bordered yellow arrow up small icon"
          ></i>
          <span
            style={{
              fontSize: 10,
              color: '#dad416',
              fontWeight: 'bolder',
            }}
          >
            Home
          </span>
        </a>
      </div>
    </div>
  );
};

export default StickyToTop;
