import React, { useState } from 'react';
import { Tooltip } from 'antd';
import useViewport from '../hooks/UseViewPort';
import homeBg from '../images/homebg.jpg';

const Home = () => {
  const [monster, setMonster] = useState('Kapitan Smiley');
  const [string, setString] = useState('Who TF are these guys?');

  const { width } = useViewport();
  const isMobile = width < 487;

  const getRandomString = (length) => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  };

  return (
    <>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          backgroundImage: `url(${homeBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            height: 400,
            marginTop: '20%',
            textAlign: 'center',
          }}
        >
          <Tooltip
            overlayInnerStyle={{ borderRadius: 20, height: '40px' }}
            trigger=""
            defaultVisible={true}
            color="whitesmoke"
            placement="top"
            title={
              <div>
                <span
                  id="title"
                  style={{
                    color: 'black',
                    fontSize: isMobile ? 8 : 12,
                  }}
                >
                  {string !== 'Who TF are these guys?'
                    ? "I'm saying random.." + string
                    : string}
                </span>
              </div>
            }
          >
            <img
              onClick={() => {
                setMonster(getRandomString(Math.floor(Math.random() * 10 + 1)));
                setString(getRandomString(Math.floor(Math.random() * 10 + 1)));
              }}
              style={{
                height: isMobile ? '4.5%' : '15%',
                marginTop: isMobile ? 185 : 132,
                marginRight: isMobile ? 5.5 : 19,
                cursor: 'pointer',
                background: 'transparent',
              }}
              src={`https://robohash.org/${monster}?set=set2;size=100x100`}
              alt="gelo"
            />
          </Tooltip>
        </div>
        {/* {alert(width)} */}
      </div>
    </>
  );
};

export default Home;
