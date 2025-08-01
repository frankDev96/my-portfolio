import React from 'react';
import { Skill } from '../types';

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div className="skill-card">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-level">
                <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
            <div className="skill-category">{skill.category}</div>
        </div>
    );
};

export default SkillCard;