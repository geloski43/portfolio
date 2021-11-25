import React from 'react';

const NavButtons = ({ isMobile, currentRef, setCurrentRef }) => {
  const buttons = [
    {
      text: 'Home',
      ref: 'home',
      icon: (
        <span
          class="iconify"
          style={{ marginTop: isMobile ? '-2px' : '-5px' }}
          data-width={isMobile ? '18' : `25`}
          data-height={isMobile ? '18' : `25`}
          data-icon="mdi:home-circle"
        ></span>
      ),
    },
    {
      text: 'Portfolio',
      ref: 'portfolio',
      icon: (
        <span
          style={{ marginTop: isMobile ? '-2px' : '-5px' }}
          data-width={isMobile ? '18' : `25`}
          data-height={isMobile ? '18' : `25`}
          class="iconify"
          data-icon="dashicons:portfolio"
        ></span>
      ),
    },
    {
      text: 'About',
      ref: 'about',
      icon: (
        <span
          class="iconify"
          data-icon="cib:about-me"
          style={{ marginTop: isMobile ? '-2px' : '-5px' }}
          data-width={isMobile ? '18' : `25`}
          data-height={isMobile ? '18' : `25`}
        ></span>
      ),
    },
    {
      text: 'Contacts',
      ref: 'contacts',
      icon: (
        <span
          class="iconify-inline"
          data-icon="ant-design:contacts-outlined"
          style={{ marginTop: isMobile ? '-2px' : '-5px' }}
          data-width={isMobile ? '18' : `25`}
          data-height={isMobile ? '18' : `25`}
        ></span>
      ),
    },
  ];

  return (
    <div className="ui tiny buttons">
      {buttons.map((button, i) => (
        <a href={`#${button.ref}`}>
          <div
            style={{ margin: '1px' }}
            onClick={() => setCurrentRef(button.ref)}
            id={currentRef === button.ref ? '' : 'button-seg'}
            className={`ui ${
              currentRef === button.ref ? 'active' : ''
            }  animated fade inverted ${
              currentRef === button.ref ? 'yellow' : 'black'
            } button`}
            tabIndex="0"
          >
            <div className="visible content">
              <span
                style={{
                  fontSize: isMobile ? 8 : 15,
                  color: button.ref === currentRef ? '#0b0d20' : 'whitesmoke',
                }}
                id="title"
              >
                {button.text}
              </span>
            </div>
            <div className="hidden content">
              <span id="card-alt">{button.icon}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NavButtons;
