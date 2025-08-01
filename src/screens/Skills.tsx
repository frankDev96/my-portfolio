import React from "react";
import { Skill } from "../types";

interface SkillsProps { }

const Skills: React.FC<SkillsProps> = () => {
    const skills: Skill[] = [
        {
            name: "HTML",
            level: 90,
            category: "frontend",
        },
        {
            name: "CSS",
            level: 85,
            category: "frontend",
        },
        {
            name: "JavaScript",
            level: 90,
            category: "frontend",
        },
        {
            name: "React",
            level: 88,
            category: "frontend",
        },
        {
            name: "React Native",
            level: 85,
            category: "frontend",
        },
        {
            name: "TypeScript",
            level: 80,
            category: "frontend",
        },
    ];

    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3>{skill.name}</h3>
                        <div className="skill-level">
                            <div
                                className="skill-progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <span>{skill.level}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
