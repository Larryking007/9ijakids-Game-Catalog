import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <li className="items">
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>9ijakids lane
        </li>
        <li className=" items">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
          9ijakids@test.com
        </li>
      </div>
      <section className="logo-items">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </section>
    </div>
  );
};
export default Header;
