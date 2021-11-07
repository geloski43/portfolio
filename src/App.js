import React, { useState } from 'react';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Fade from 'react-reveal/Fade';
import About from './screens/About';
import './divider.css';
import BottomDivider from './components/Divider';
import FooterLinks from './components/FooterLinks';
import StickyHeader from './hooks/StickyHeader';
import StickyToTop from './components/StickyToTop';
import useViewport from './hooks/UseViewPort';
import { Typography } from 'antd';

const App = () => {
  const { width } = useViewport();
  const isMobile = width < 487;
  const { tableRef, isSticky } = StickyHeader();
  const [currentRef, setCurrentRef] = useState('home');

  const { Title } = Typography;

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
    <div id="home">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
        }}
      >
        <div
          style={{
            backgroundColor: 'brown',
          }}
          className="ui stackable compact menu"
        >
          <div className="item">
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
                          color:
                            button.ref === currentRef
                              ? '#0b0d20'
                              : 'whitesmoke',
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
          </div>
        </div>
      </div>

      <Home />
      <div ref={tableRef}>
        <div
          style={{
            marginTop: isMobile ? 0 : 150,
          }}
          className="custom-shape-divider-bottom-1621412357"
        >
          <BottomDivider />
        </div>

        <div id="portfolio" style={{ marginTop: 15 }}>
          <Fade left>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Title
                className="tool-title"
                level={2}
                style={{
                  fontSize: isMobile ? 20 : 30,
                  color: '#dad416',
                  background:
                    'linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))',
                  borderRadius: 10,
                }}
              >
                Projects
              </Title>
            </div>
            <Projects />
          </Fade>
        </div>

        <div className="custom-shape-divider-bottom-1621412583">
          <BottomDivider />
        </div>

        <div id="about" style={{ marginTop: 140 }}>
          <Fade right>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Title
                className="tool-title"
                level={2}
                style={{
                  fontSize: isMobile ? 20 : 30,
                  color: '#dad416',
                  background:
                    'linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))',
                  borderRadius: 10,
                }}
              >
                About
              </Title>
            </div>
            <About />
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <div
          style={{
            height: 88,
            backgroundColor: 'rgb(18, 60, 74, 0.3)',
          }}
          className="ui segment"
          id="contacts"
        >
          <FooterLinks />
        </div>
      </Fade>
      {isSticky && <StickyToTop setCurrentRef={setCurrentRef} />}
    </div>
  );
};

export default App;
