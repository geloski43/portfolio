import React from "react";
import { Divider } from "antd";
import { Icon } from '@iconify/react';
import googleGmail from '@iconify-icons/logos/google-gmail';
import codewarsIcon from '@iconify-icons/cib/codewars';
import linkedinIcon from '@iconify-icons/logos/linkedin-icon';
import githubIcon from '@iconify-icons/logos/github-icon';


const FooterLinks = () => {
  return (

    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

      <div style={{ padding: 10, background: "linear-gradient(to right, rgb(141, 124, 124), rgb(255, 255, 255))", margin: 25, borderRadius: 10 }}>

        <a rel="noopener noreferrer" target="_blank" href="mailto:ajgonzales43@gmail.com">
          <Icon width={35} icon={googleGmail} />
        </a>
        <Divider type="vertical" />
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/angelo-gonzales-6b58a0212">
          <Icon width={35} icon={linkedinIcon} />
        </a>
        <Divider type="vertical" />
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/geloski43">
          <Icon width={35} icon={githubIcon} />
        </a>
        <Divider type="vertical" />
        <a rel="noopener noreferrer" target="_blank" href="https://www.codewars.com/users/geloski43">
          <Icon width={35} icon={codewarsIcon} />
        </a>
      </div>
    </div>
  )
};

export default FooterLinks;