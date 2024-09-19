import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { txt } from "../../animation";

export default function Title({ timeline }) {
  const h1 = useRef(null);
  const h2 = useRef(null);

  useLayoutEffect(() => {
    timeline && timeline.add(txt(h1.current, h2.current));
  }, [timeline]);

  return (
    <div className="container">
      <div className="title">
        <AnimTitle cals={"h1"} reff={h1} title={"No zone like Ozone"} />
        <AnimTitle
          cals={"h1"}
          reff={h2}
          title={"Act Now to Heal the Ozone Layer"}
        />
      </div>
      <div className="btn">More about Ozone</div>
    </div>
  );
}

const AnimTitle = ({ cals, reff, title }) => {
  console.log(cals);
  return (
    <div className="wrapper">
      <h2 className={`${cals}`} ref={reff}>
        {title}
      </h2>
    </div>
  );
};
