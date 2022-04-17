import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-cont">
        <div className="foot-box row">
          <div className="col col1">
            <ul>
              <li className="list-items">
                <FontAwesomeIcon icon={faBookOpen} />
                9ijakids
              </li>
              <li className="list-items">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>9ijakids
                lane
              </li>
              <li className=" list-items">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
                9ijakids@test.com
                <i></i>
              </li>
              <li className="list-items">
                <FontAwesomeIcon icon={faPhone} />
                phone 9ijakids
                <i></i>
              </li>
            </ul>
          </div>
          <div className="col cont">
            <h3>Community</h3>
            <ul className="flex-items">
              <li className="list-items">Learners</li>
              <li className="list-items">Partners</li>
              <li className="list-items">Develpers</li>
              <li className="list-items">Beta Testers</li>
              <li className="list-items">Translators</li>
              <li className="list-items">Blog</li>
              <li className="list-items">Tech Blog</li>
              <li className="list-items">Teaching Center</li>
            </ul>
          </div>
          <div className="col cont">
            <h3> Information</h3>
            <ul className="flex-items">
              <li className="list-items">About</li>
              <li className="list-items">Pricing</li>
              <li className="list-items">Blog</li>
              <li className="list-items">Careers</li>
              <li className="list-items">Contact</li>
            </ul>
          </div>

          <div className="col cont">
            <h3>More</h3>
            <ul className="flex-items">
              <li className="list-items">Press</li>
              <li className="list-items">Investors</li>
              <li className="list-items">Terms</li>
              <li className="list-items">Privacy</li>
              <li className="list-items">Help</li>
              <li className="list-items">Contact</li>
              <li className="list-items">Articles</li>
              <li className="list-items">Directory</li>
              <li className="list-items">Affiliates</li>
            </ul>
          </div>
        </div>

        <div className="foot-bar">
          <span className="foot-text">test test test</span>
          <section className="logo-items">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
