import React, { useState } from 'react';
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from 'recharts';
import { Icon } from '@iconify/react';
import Tilt from 'react-tilt';
import { Tag } from 'antd';
import { feGroup, beGroup } from '../data/stackGroup';
import { feData, beData, legendData } from '../data/stackData';
import useViewport from '../hooks/UseViewPort';

const About = () => {
  const [color, setColor] = useState('#8884d8');
  const [stack, setStack] = useState('Front End Stack');
  const [sourceData, setSourceData] = useState(feData);

  const { width } = useViewport();
  const breakpoint = 650;

  const handleClick = () => {
    if (stack === 'Front End Stack') {
      setStack('Back End Stack');
      setSourceData(beData);
      setColor('#00C49F');
    } else {
      setStack('Front End Stack');
      setSourceData(feData);
      setColor('#8884d8');
    }
  };

  const reverseStack = stack === 'Front End Stack' ? 'BE Stack' : 'FE Stack';

  const frontEndStack = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300,
          margin: 20,
          justifyContent: 'space-around',
          cursor: 'pointer',
        }}
      >
        {feGroup.map((value, i) => (
          <Tilt key={i} options={{ max: 25 }}>
            <a rel="noopener noreferrer" target="_blank" href={value.domain}>
              {value.icon ? (
                <Tag
                  style={{ marginBottom: 10 }}
                  icon={
                    <Icon
                      icon={value.icon}
                      color={value.name === 'Chakra UI' ? 'teal' : ''}
                    />
                  }
                >
                  {' '}
                  {value.name}
                </Tag>
              ) : (
                <Tag style={{ marginBottom: 10 }}> {value.name}</Tag>
              )}
            </a>
          </Tilt>
        ))}
      </div>
    );
  };

  const backEndStack = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300,
          margin: 20,
          justifyContent: 'space-around',
          cursor: 'pointer',
        }}
      >
        {beGroup.map((value, i) => (
          <Tilt key={i} options={{ max: 25 }}>
            <a rel="noopener noreferrer" target="_blank" href={value.domain}>
              <Tag
                style={{ marginBottom: 10 }}
                icon={<Icon icon={value.icon} />}
              >
                {' '}
                {value.name}
              </Tag>
            </a>
          </Tilt>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          background:
            'linear-gradient(to right, rgb(223, 88, 88), rgb(37, 37, 45))',
          paddingInline: 10,
          marginInline: 10,
          width: '90%',
          margin: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{ height: 32, marginBlock: 10, backgroundColor: color }}
            onClick={handleClick}
            id="button-seg"
            className="small ui animated fade inverted button"
          >
            <div className="visible content">My stack</div>
            <div className="hidden content">{reverseStack}</div>
          </div>

          <div
            style={{
              padding: '10px',
            }}
          >
            <ul>
              {legendData.map((entry, index) => (
                <li style={{ color: entry.color }} key={index}>
                  {entry.value} - {entry.equiv}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h4
          style={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'whitesmoke',
            fontWeight: 'bolder',
          }}
        >
          {stack}
        </h4>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            outerRadius={width < breakpoint ? 80 : 170}
            width={width < breakpoint ? 200 : 300}
            height={400}
            data={sourceData}
          >
            <PolarGrid />
            <PolarAngleAxis stroke={color} dataKey="stack" />
            <PolarRadiusAxis angle={65} domain={[1, 5]} />
            <Radar
              name={stack}
              dataKey="proficiency"
              stroke={color}
              fill={color}
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {stack === 'Front End Stack'
            ? frontEndStack()
            : stack === 'Back End Stack'
            ? backEndStack()
            : null}
        </div>
      </div>

      <div style={{ padding: '5%' }}>
        <div
          style={{
            background:
              'linear-gradient(to right, rgb(238,238,221), rgb(167, 170, 157))',
          }}
          class="ui centered fluid raised card"
        >
          <div class="content">
            <div class="header">About me and coding</div>
            <div class="description">
              <p>
                {' '}
                I'm a self-taught web developer which started from a Udemy
                course "Complete Web Developer in 2020 from Zero to Mastery".
                Right now my focus is solely on React for frontend and NodeJS
                for backend and expand as I go along coding. Programming /
                Coding is not for the faint of heart as it comes with constant
                struggles and challenges being thrown at you along the way.
                Perseverance and maintaining the level of learning right where
                you started is the key to moving forward.
              </p>
            </div>
          </div>
          <div class="extra content">
            <div class="right floated author">
              <img
                alt=""
                class="ui avatar image"
                src="https://robohash.org/Kapitan%20Smiley?set=set2;size=100x100"
              />{' '}
              Angelo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
