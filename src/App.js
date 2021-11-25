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
import Bounce from 'react-reveal/Bounce';
import NavButtons from './components/NavButtons';

const App = () => {
  const { width } = useViewport();
  const isMobile = width < 487;
  const { tableRef, isSticky } = StickyHeader();
  const [currentRef, setCurrentRef] = useState('home');

  const { Title } = Typography;

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
            <NavButtons
              isMobile={isMobile}
              currentRef={currentRef}
              setCurrentRef={setCurrentRef}
            />
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Bounce bottom cascade>
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
            </Bounce>
          </div>
          <Fade left>
            <Projects />
          </Fade>
        </div>

        <div className="custom-shape-divider-bottom-1621412583">
          <BottomDivider />
        </div>

        <div id="about" style={{ marginTop: 140 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Bounce top cascade>
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
            </Bounce>
          </div>
          <Fade right>
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
