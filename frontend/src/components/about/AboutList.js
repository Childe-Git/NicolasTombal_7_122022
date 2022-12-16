import React from "react";
import Reliability from "./Reliability";
import Respect from "./Respect";
import Security from "./Security";
import Service from "./Service";

const AboutList = () => {
  return (
    <section>
      <div>
        <Reliability />
        <br />
        <br />
        <Respect />
        <br />
        <br />
        <Service />
        <br />
        <br />
        <Security />
      </div>
    </section>
  );
};

export default AboutList;
