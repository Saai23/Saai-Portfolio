import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saai Gokul</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Saai23"
            target="_blank"
            className="footer__social-link"
          >
            <i class="uil uil-github-alt"></i>
          </a>

          <a
            href="https://twitter.com/Saai_sg"
            target="_blank"
            className="footer__social-link"
          >
            <i class="uil uil-twitter-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/saai-gokul-0989a917b/"
            target="_blank"
            className="footer__social-link"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Saai Gokul</span>
      </div>
    </footer>
  );
};

export default Footer;
