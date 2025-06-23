"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none" // Tailwind classes
      // style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, pointerEvents: 'none' }}
    >
      <Snowfall
        // Customize snowflake properties
        color="#dee4fd" // Snowflake color
        snowflakeCount={60} // Number of snowflakes
        speed={[1.0, 2.0]} // Fall speed [min, max]
        wind={[-0.5, 1.5]} // Wind direction [min, max]
        radius={[0.5, 3.0]} // Snowflake size [min, max]
      />
    </div>
  );
};

export default SnowBackground;
