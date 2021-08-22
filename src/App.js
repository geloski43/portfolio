import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./screens/Home";
import Projects from "./screens/Projects"
import Fade from "react-reveal/Fade"
import { Typography, Anchor } from 'antd';
import About from "./screens/About";
import "./divider.css";
import BottomDivider from "./components/Divider";
import AnchorNavigator from "./components/AnchorNavigator";
import FooterLinks from "./components/FooterLinks";

const { Title } = Typography;
const { Link } = Anchor;

const App = () => {

  const goHome = () => {
    return (
      <Anchor
        showInkInFixed={false}
        affix={false}
      >
        <Link href="#home" title={
          <span style={{ color: "orange", marginLeft: 20 }}>
            <FontAwesomeIcon icon={['fas', 'arrow-circle-up']} transform="grow-3" color="yellow" />     Home
          </span>
        } />
      </Anchor>
    )
  };

  return (
    <div id="home">
      <AnchorNavigator />
      <div className="custom-shape-divider-bottom-1621412357">
        <BottomDivider />
      </div>

      <div >
        <div>
          <Home />
        </div>

        <div id="portfolio" style={{ marginTop: 100 }}>
          <Fade left>
            <Title level={3} className="title" style={{ marginLeft: 40, color: "#dad416", marginBottom: 40 }}>Projects</Title>
            <div
              style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap" }}>
              <Projects />
            </div>
          </Fade>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1621412583">
        <BottomDivider />
      </div>

      <div id="about" style={{ marginTop: 100 }}>
        <Fade right>
          {/* <Title level={3} className="title" style={{ marginLeft: 40, color: "#dad416" }}>About</Title> */}
          <About />
        </Fade>
      </div>
      {goHome()}
      <div className="custom-shape-divider-bottom-1621603280">
        <BottomDivider />
      </div>

      <div
        id="links">
        <Fade bottom>
          <FooterLinks />
        </Fade>
      </div>

    </div>
  );
}

export default App;


