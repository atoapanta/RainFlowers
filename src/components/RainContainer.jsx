import React from "react";
import { RainDrops } from "./RainDrops";
import "./RainContainer.css";

const RainContainer = () => {
  const emoji = "🌻";

  const drops = (val) => {
    const rainDropsArray = [];

    for (let i = 0; i < val; i++) {
      rainDropsArray.push(<RainDrops key={i} emoji={emoji} />);
    }

    return rainDropsArray;
  };

  return <div className="rain-box position-absolute z-n1">{drops(200)}</div>;
};

export default RainContainer;
