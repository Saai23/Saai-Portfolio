import React from "react";
import leetcode from "../../assets/leetcode-logo.png";
import github from "../../assets/github-logo.png";
import twitter from "../../assets/twitter-logo.png";
import linkedin from "../../assets/linkedin-logo.png";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://leetcode.com/Saaigokul/"
        target="_blank"
        className="home__social-icon"
      >
        <img src={leetcode} alt="" />
      </a>

      <a
        href="https://github.com/Saai23"
        target="_blank"
        className="home__social-icon"
      >
        <img src={github} alt="" />
      </a>

      <a
        href="https://twitter.com/Saai_sg"
        target="_blank"
        className="home__social-icon"
      >
        <img src={twitter} alt="" />
      </a>

      <a
        href="https://www.linkedin.com/in/saai-gokul-0989a917b/"
        target="_blank"
        className="home__social-icon"
      >
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
};

export default Social;
