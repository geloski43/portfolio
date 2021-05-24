import React from "react";
import { Typography, Anchor } from 'antd';

const { Link } = Anchor;
const { Title } = Typography;

const AnchorNavigator = () => {
  return (
    <Anchor
      showInkInFixed={false}
      affix={false}
    >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <Link href="#home" title={
          <div className="title">
            <Title
              level={2}
              style={{
                color: "#dad416",
                background: "linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))",
                borderRadius: 10
              }}>
              Home
            </Title>
          </div>
        } />
        <Link href="#portfolio" title={
          <div className="title">
            <Title
              level={2}
              style={{
                color: "#dad416",
                background: "linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))",
                borderRadius: 10
              }}>
              Portfolio
            </Title>
          </div>
        } />
        <Link href="#about" title={
          <div className="title">
            <Title
              level={2}
              style={{
                color: "#dad416",
                background: "linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))",
                borderRadius: 10
              }}>
              About
            </Title>
          </div>
        } />
        <Link href="#links" title={
          <div className="title">
            <Title
              level={2}
              style={{
                color: "#dad416",
                background: "linear-gradient(to right, rgb(8, 8, 8), rgb(54, 54, 54))",
                borderRadius: 10
              }}>
              Contact . Links
            </Title>
          </div>
        } />
      </div>
    </Anchor>
  )
};

export default AnchorNavigator;