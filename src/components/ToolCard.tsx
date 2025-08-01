import React from 'react';

interface Tool {
    name: string;
    icon: string;
    description: string;
}

interface ToolCardProps {
    tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
    return (
        <div className="tool-card">
            <div className="tool-icon">
                <img src={tool.icon} alt={`${tool.name} icon`} />
            </div>
            <h3 className="tool-name">{tool.name}</h3>
            <p className="tool-description">{tool.description}</p>
        </div>
    );
};

export default ToolCard;