import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <div className="news">
      <img
        src="https://github.com/9ijakidArchitect/Practicetasks/blob/main/Newsletter.png"
        alt=""
      />
      <form className="">
        <p>subscribe now </p>
        <h1>Be in the know ...</h1>
        <input type={text}>
          <FontAwesomeIcon icon={faEnvelope} />
          <button className="btn">subscribe now</button>
        </input>
      </form>
    </div>
  );
};
