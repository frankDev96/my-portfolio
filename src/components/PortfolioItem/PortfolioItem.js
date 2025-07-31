import React from 'react';
import './PortfolioItem.css';
import '../../styles/animations.css';
import CommonButton from '../CommonButton/CommonButton';

const PortfolioItem = ({ item, onClick = () => { } }) => {

    return (
        <div className="portfolio-container fade-in">
            <div className="project-container hover-lift">
                <img
                    src={item?.image}
                    alt="Project Screenshot"
                    className="project-image scale-in"
                />
                <div className="project-details slide-up">
                    <h2 className="project-title">{item?.title}</h2>
                    <p className="project-description">{item?.description}</p>
                    <div className="project-item">
                        <CommonButton
                            title="Case Study"
                            className="hover-lift"
                            onClick={onClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;