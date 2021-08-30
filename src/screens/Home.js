import Tween from 'rc-tween-one';
import React, { useState, useEffect } from 'react';
import AnimatedSvg from "../components/AnimatedSvg"
import { Tooltip, message, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useViewport from '../UseViewPort';
import MobileAnimatedSvg from '../components/MobileAnimatedSvg';

const { Title } = Typography;

const Home = () => {

  const [tweenData, setTweenData] = useState({ translateX: '100px', duration: 3000 });
  const [monster, setMonster] = useState("Kapitan Smiley")
  const [monsters, setMonsters] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);

  const { width } = useViewport();
  const breakpoint = 650;

  const info = () => {
    message.info({
      className: "message",
      content: ` Greetings! Please click on the animated letters for us to create an army. 
      Sincerely, ${monster}`,
      style: {
        marginTop: '15vh',
        color: "black",
        fontWeight: "bolder"
      },
      duration: 5.5,
      icon: <FontAwesomeIcon icon={['fas', 'comment-dots']} transform="grow-5" color="#2ede17" />
    });
  };

  const warning = () => {
    message.warning({
      className: "message",
      content: ` ${monster} reporting for duty.`,
      style: {
        marginTop: '15vh',
        color: "black",
        fontWeight: "bolder"
      },
      duration: 2,
      icon: <FontAwesomeIcon icon={['fas', 'comment-dots']} transform="grow-5" color="#2ede17" />
    });
  };

  const getRandomString = (length) => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  };

  const maxWarning = () => {
    message.warning({
      content: "Max monsters reached! Page will reload..",
      style: {
        marginTop: '15vh',
      },
      duration: 5
    });
  };

  const randomMonster = () => {
    if (monsters.length === 15) {
      maxWarning();
      setTimeout(() => {
        window.location.reload();
      }, 4000)
    }
    setImageLoading(true);
    setMonster(getRandomString(Math.floor((Math.random() * 30) + 1)))
    setTimeout(() => {
      setImageLoading(false);
    }, 900)
  };

  useEffect(() => {
    if (monsters.length > 1) {
      warning();
    } else {
      return;
    }
  }, [monsters]);

  useEffect(() => {
    setTimeout(() => {
      setTweenData({ opacity: 0.5, marginTop: 90, marginLeft: 0, duration: 1000 })
    }, 1000);
    setTimeout(() => {
      setTweenData({ opacity: 2 });
    }, 2000)
  }, []);

  useEffect(() => {
    setMonsters([{ name: monster, url: `https://robohash.org/${monster}?set=set2;size=100x100` }]);
    info();
  }, []);

  return (
    <>
      <div style={{ marginRight: 35, marginBottom: 50, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
        <Tween
          animation={tweenData}
          style={{ height: 400, width: width < breakpoint ? 300 : 1200, textAlign: 'center' }}
        >
          {monsters && monsters.length > 1 &&
            <div
              style={{ width: 160, marginLeft: width < breakpoint ? 65 : 520 }}
              className="title">
              <Title
                level={5}
                style={{
                  fontSize: width < breakpoint ? 8 : 16,
                  color: "#a94eca",
                  background: "#1b1a2d",
                  borderRadius: 4
                }}>
                {`${monsters[0].name}${monsters.length > 1 ? " and squad" : ""}`}
              </Title>
            </div>}

          {monsters && monsters.map((monster, i) => (
            <Tooltip
              color="black"
              key={i}
              placement="bottom"
              title={<div style={{ color: "black" }}>
                <span
                  style={{ background: "linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))", color: "orange", fontSize: 15 }}
                  className="tool-title">
                  {monster.name}
                </span>
              </div>}
            >
              <img
                style={{
                  height: width < breakpoint ? 45 : 100,
                  marginTop: 50,
                  marginRight: 10,
                  cursor: "grabbing",
                  background: "linear-gradient(to right, rgb(97, 112, 101), rgb(26, 116, 1))",
                  borderRadius: 5
                }}
                src={monster.url} alt="gelo" />
            </Tooltip>
          ))}
        </Tween>


        {width > breakpoint ?
          <AnimatedSvg
            setMonster={setMonster}
            monster={monster}
            setMonsters={setMonsters}
            monsters={monsters}
            randomMonster={randomMonster}
            setImageLoading={setImageLoading}
            imageLoading={imageLoading}
          />
          :

          <MobileAnimatedSvg
            setMonster={setMonster}
            monster={monster}
            setMonsters={setMonsters}
            monsters={monsters}
            randomMonster={randomMonster}
            setImageLoading={setImageLoading}
            imageLoading={imageLoading}
          />
        }
        {/* {alert(width)} */}
      </div>

    </>
  )
}

export default Home;