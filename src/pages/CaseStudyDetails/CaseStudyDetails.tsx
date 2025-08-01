import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../utils/constants';
import CommonButton from '../../components/CommonButton/CommonButton';
import './CaseStudyDetails.css';

interface CaseStudyDetailsProps { }

const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id || "0"));

    if (!project) {
        return <div className="not-found">Project not found</div>;
    }

    return (
        <div className="case-study-container">
            <div className="case-study-header">
                <CommonButton
                    title="Back"
                    onClick={() => navigate('/')}
                    className="back-button"
                />
                <h1 className="case-study-title">{project.title}</h1>
            </div>

            <div className="case-study-content">
                <img
                    src={project.image}
                    alt={project.title}
                    className="case-study-image"
                />
                <div className="case-study-details">
                    <p className="case-study-description">{project.description}</p>
                    {/* Add more project details here as needed */}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetails;