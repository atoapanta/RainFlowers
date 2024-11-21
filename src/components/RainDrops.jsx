import React from "react";

export const RainDrops = ({ emoji }) => {
  const size = ["s", "s", "s", "s", "m", "m", "m", "m", "m", "l", "xl"];

  const randomSize = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const randomValue = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  const xStart = randomSize(0, 100);
  const xEnd = randomSize(xStart - 20, xStart + 20);
  const yStart = randomSize(-100, 0);

  return (
    <div
      className={`rainDrop rainDrop--${randomValue(size)}`}
      style={{
        "--x-start": `${xStart}vw`,
        "--x-end": `${xEnd}vw`,
        "--y-start": `${yStart}vh`,
        "--y-end": `${yStart + 200}vh`,
      }}
    >
      {emoji}
    </div>
  );
};
