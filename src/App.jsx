import { useLayoutEffect, useState } from "react";
import Button from "./componets/ui/Button";
import Navbar from "./componets/ui/Navbar";
import gsap from "gsap";
import Title from "./componets/landingpageComponets/Title";
import "./App.css";
import Layout from "./componets/landingpageComponets/Layout";
import Bottom from "./componets/landingpageComponets/Bottom";
import Causes from "./componets/Section-2/Causes";

function App() {
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      setTimeline(tl);
    });
    return () => context.revert();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        {/* <h1 className="text-9xl">Rohan</h1> */}
        <Title timeline={timeline} />
        <Layout timeline={timeline} />
        <Bottom timeline={timeline} />

        {/* <Button></Button> */}
      </div>
      <Causes />
    </>
  );
}

export default App;
