import React, { useState } from 'react';
import { Tooltip } from 'antd';
import useViewport from '../hooks/UseViewPort';
import hole from '../images/hole.svg';
import clouds from '../images/clouds.png';
import faker from 'faker';
import Bounce from 'react-reveal/Bounce';

const Home = () => {
  const { width } = useViewport();
  const isMobile = width < 487;

  const fakeWord = faker.hacker.phrase();
  const fakeName = faker.name.firstName();

  const randomInline = `${Math.floor(
    isMobile ? Math.random() * 40 + -20 : Math.random() * 70 + -10
  )}vw`;
  const randomBlock = `${Math.floor(
    isMobile ? Math.random() * 70 + -20 : Math.random() * 20 + -10
  )}vw`;

  const [monster, setMonster] = useState('Kapitan Smiley');
  const [randomMarginInline, setRandomMarginInline] = useState(randomInline);
  const [randomMarginBlock, setRandomMarginBlock] = useState(randomBlock);
  const [firstName, setFirstName] = useState(fakeName);
  const [word, setWord] = useState(fakeWord);

  return (
    <>
      <h1 className="home-title">
        <Bounce top cascade>
          Hi! I am Gelo, Front End Dev.
        </Bounce>
      </h1>
      <div
        className="hammer-cursor"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile ? '100px' : '200px',
          backgroundImage: `url(${clouds})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          marginTop: 20,
          marginInline: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            marginInline: randomMarginInline,
            marginTop: randomMarginBlock,
          }}
        >
          <div>
            <img
              alt=""
              style={{ height: isMobile ? '23px' : '40px' }}
              src={hole}
            />
          </div>
          <Bounce delay={500} spy={randomMarginInline}>
            <div>
              <Tooltip
                overlayClassName="tooltip-msg"
                trigger={['hover', 'click']}
                overlayInnerStyle={{
                  borderRadius: 20,
                  backgroundColor: 'whitesmoke',
                  color: 'black',
                }}
                color="whitesmoke"
                title={!isMobile ? `${word} -${firstName}` : ''}
              >
                <img
                  onClick={() => {
                    setRandomMarginBlock(randomBlock);
                    setRandomMarginInline(randomInline);
                    setMonster(fakeName);
                    setWord(fakeWord);
                    setFirstName(fakeName);
                  }}
                  alt=""
                  style={{
                    height: isMobile ? '35px' : '60px',
                    marginLeft: isMobile ? '12px' : '20px',
                    marginTop: isMobile ? '-79px' : '-118px',
                  }}
                  src={`https://robohash.org/${monster}?set=set2;size=100x100`}
                />
              </Tooltip>
            </div>
          </Bounce>
        </div>
      </div>
    </>
  );
};

export default Home;
