import React from "react";
import { Typography, Anchor } from 'antd';
import useViewPort from "../UseViewPort";

const { Link } = Anchor;
const { Title } = Typography;

const AnchorNavigator = () => {
  const { width } = useViewPort();
  const breakpoint = 487;


  return (
    <Anchor
      showInkInFixed={false}
      affix={false}
    >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: 15 }}>
        <Link href="#home" title={
          <div className="title">
            <Title
              level={2}
              style={{
                fontSize: width < breakpoint ? 12 : 30,
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
                fontSize: width < breakpoint ? 12 : 30,
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
                fontSize: width < breakpoint ? 12 : 30,
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
                fontSize: width < breakpoint ? 12 : 30,
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