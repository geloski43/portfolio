import React, { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { Icon } from '@iconify/react';
import Tilt from 'react-tilt';
import { Tag, Button, Card } from 'antd';
import {
  SwapOutlined,
} from '@ant-design/icons';
import { feGroup, beGroup } from "../data/stackGroup";
import { feData, beData, legendData } from "../data/stackData";
import useViewport from "../UseViewPort";

const About = () => {
  const [color, setColor] = useState("#8884d8")
  const [stack, setStack] = useState("Front End Stack");
  const [sourceData, setSourceData] = useState(feData);

  const { width } = useViewport();
  const breakpoint = 487;


  const frontEndStack = () => {
    return (
      <>
        <h6 className="message" style={{ marginTop: 20 }}>FrontEnd Stack</h6>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: 300, margin: 20, justifyContent: "space-around", cursor: "pointer" }}>
          {feGroup.map((value, i) => (
            <Tilt key={i} options={{ max: 25 }}>
              <a rel="noopener noreferrer" target="_blank" href={value.domain}>
                <Tag style={{ marginBottom: 10 }} icon={<Icon icon={value.icon} />} >     {value.name}
                </Tag>
              </a>
            </Tilt>
          ))}
        </div>
      </>
    )
  }

  const backEndStack = () => {
    return (
      <>
        <h6 className="message" style={{ marginTop: 20 }}>BackEnd Stack</h6>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: 300, margin: 20, justifyContent: "space-around", cursor: "pointer" }}>
          {beGroup.map((value, i) => (
            <Tilt key={i} options={{ max: 25 }}>
              <a rel="noopener noreferrer" target="_blank" href={value.domain}>
                <Tag style={{ marginBottom: 10 }} icon={<Icon icon={value.icon} />} >     {value.name}
                </Tag>
              </a>
            </Tilt>
          ))}
        </div>
      </>
    )
  };

  return (
    <div style={{ marginTop: -20, display: "flex", flexDirection: width < breakpoint ? "column" : "row", justifyContent: "space-evenly" }}>

      <div style={{ padding: 10, background: "linear-gradient(to right, rgb(223, 88, 88), rgb(37, 37, 45))", alignContent: "center", margin: 25, borderRadius: 10 }}>

        {sourceData === feData &&
          <div style={{ display: "flex", flexDirection: "row" }}>
            {frontEndStack()}
            <Button
              type="primary"
              style={{ marginTop: 20, marginLeft: width < breakpoint ? -20 : 180 }}
              onClick={() => {
                setSourceData(beData);
                setStack("BackEnd Stack");
                setColor("#82ca9d")
              }}
              ghost icon={
                <SwapOutlined />}
              size="small"
            >BackEnd
            </Button>
          </div>
        }

        {sourceData === beData &&
          <div style={{ display: "flex", flexDirection: "row" }}>
            {backEndStack()}
            <Button
              type="primary"
              style={{ marginTop: 20, marginLeft: width < breakpoint ? -20 : 180 }}
              onClick={() => {
                setSourceData(feData);
                setStack("Front End Stack");
                setColor("#8884d8")
              }}
              ghost icon={
                <SwapOutlined />}
              size="small" >
              FrontEnd
            </Button>
          </div>}

        <div
          style={{ display: "flex", justifyContent: "center", marginLeft: width < breakpoint ? -150 : 50 }}
        >
          <RadarChart cx={300} cy={200} outerRadius={width < breakpoint ? 65 : 150} width={width < breakpoint ? 450 : 600} height={400} data={sourceData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stack" />
            <PolarRadiusAxis angle={65} domain={[1, 5]} />
            <Radar name={stack} dataKey="proficiency" stroke={color} fill={color} fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>

          <div style={{ marginLeft: width < breakpoint ? -135 : -100, marginTop: 350 }}>
            <ul >
              {
                legendData.map((entry, index) => (
                  <li style={{ color: entry.color }} key={index}>{entry.value} - {entry.equiv}</li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 25, padding: "30px",
        background: width < breakpoint ? "none" : "#ececec", marginBottom: 25
      }}>
        <Card className="title" title="About Me" bordered={false} style={{ width: 300, height: 550 }}>
          <p className="message">I'm a self-taught web developer which started from a Udemy course "Complete
            Web Developer in 2020 from Zero to Mastery". Right now my focus is solely on React for frontend and NodeJS for backend
            and expand as I go along coding.
            Programming / Coding is not for the faint of heart as it comes with constant struggles and challenges being thrown at you along the way.
            Perseverance and maintaining the level of learning right where you started is the key to moving forward.
          </p>
        </Card>
      </div>

    </div>
  )
};

export default About;