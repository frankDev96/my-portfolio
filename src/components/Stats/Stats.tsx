import React from "react";

interface StatsProps { }

interface Stat {
  number: string;
  label: string;
}

const Stats: React.FC<StatsProps> = () => {
  const stats: Stat[] = [
    {
      number: "12+",
      label: "Years experience",
    },
    {
      number: "60+",
      label: "Clients",
    },
    {
      number: "240+",
      label: "Completed projects",
    },
    {
      number: "20+",
      label: "Achievements",
    },
  ];

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
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 style={{ color: "white", fontSize: "2rem" }}>{stat.number}</h3>
          <p style={{ color: "white", fontSize: "0.8rem" }}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
