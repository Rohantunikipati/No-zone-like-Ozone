import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { UpperLayOut, LowerLayOut } from "../../animation";

export default function Layout({ timeline }) {
  const ul1 = useRef(null);
  const ul2 = useRef(null);
  const ul3 = useRef(null);
  const ll1 = useRef(null);
  const ll2 = useRef(null);
  const ll3 = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(UpperLayOut(ul1.current, ul2.current, ul3.current))
        .add(LowerLayOut(ll1.current, ll2.current, ll3.current), "bottom");
  }, [timeline]);

  return (
    <div className="layout">
      <div className="upperlayout">
        <div ref={ul1} className="ul1"></div>
        <div ref={ul2} className="ul2"></div>
        <div ref={ul3} className="ul3"></div>
      </div>
      <div className="lowerlayout">
        <div ref={ll1} className="ll1"></div>
        <div ref={ll2} className="ll2"></div>
        <div ref={ll3} className="ll3"></div>
      </div>
    </div>
  );
}
