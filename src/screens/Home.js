import Tween from 'rc-tween-one';
import React, { useState, useEffect } from 'react';
import AnimatedSvg from "../components/AnimatedSvg"
import { Tooltip, message, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Title } = Typography;

const Home = () => {

  const [tweenData, setTweenData] = useState({ translateX: '100px', duration: 3000 });
  const [monster, setMonster] = useState("Kapitan Smiley")
  const [monsters, setMonsters] = useState([]);

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
          style={{ height: 400, width: 1200, textAlign: 'center' }}
        >
          {monsters && monsters.length > 1 &&
            <div
              style={{ width: 160, marginLeft: 520 }}
              className="title">
              <Title
                level={5}
                style={{
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
        <AnimatedSvg
          setMonster={setMonster}
          monster={monster}
          setMonsters={setMonsters}
          monsters={monsters}
        />
      </div>

    </>
  )
}

export default Home;