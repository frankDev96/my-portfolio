import React from "react";

const Stats = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <div>
        <h3 style={{ color: "white", fontSize: "2rem" }}>12+</h3>
        <p style={{ color: "white", fontSize: "0.8rem" }}>Years experience</p>
      </div>
      <div>
        <h3 style={{ color: "white", fontSize: "2rem" }}>60+</h3>
        <p style={{ color: "white", fontSize: "0.8rem" }}>Clients</p>
      </div>
      <div>
        <h3 style={{ color: "white", fontSize: "2rem" }}>240+</h3>
        <p style={{ color: "white", fontSize: "0.8rem" }}>Completed projects</p>
      </div>
      <div>
        <h3 style={{ color: "white", fontSize: "2rem" }}>20+</h3>
        <p style={{ color: "white", fontSize: "0.8rem" }}>Achievements</p>
      </div>
    </div>
  );
};

export default Stats;
