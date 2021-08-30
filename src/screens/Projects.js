import React from "react";
import { Card, Tooltip } from 'antd';
import { projectData } from "../data/projectData"
import Tilt from 'react-tilt';
import useViewport from "../UseViewPort";

const Projects = () => {

  const { width } = useViewport();
  const breakpoint = 650;

  return (
    < >
      {projectData.map((project, i) => (
        <Tooltip
          color="gray"
          key={i}
          placement="right"
          title={<div style={{ color: "black" }}>
            <span
              style={{ background: "linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))", color: "yellow" }}
              className="tool-title">
              {project.name}
            </span>
            <p>{project.description}</p>
            <a style={{ color: "cyan" }} rel="noopener noreferrer" target="_blank" href={project.url}>{project.url}</a>
          </div>}
        >
          <Tilt options={{ max: 5 }}>
            <Card
              hoverable
              style={{ width: 300, height: 400, marginBottom: 30 }}
              cover={
                <img
                  style={{
                    height: 400,
                  }}
                  src={project.thumb} alt="proj" />

              }>
            </Card>
          </Tilt>
        </Tooltip>
      ))}

    </>
  )
};

export default Projects;
