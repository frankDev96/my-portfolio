import React from 'react';
import './PortfolioItem.css'; // Importing the CSS file
import CommonButton from '../CommonButton/CommonButton';

const PortfolioItem = ({ item }) => {
    return (
        <div className="portfolio-container">
            <div className="project-container">
                <img
                    src={item?.image}
                    alt="Project Screenshot"
                    className="project-image"
                />
                <div className="project-details">
                    <h2 className="project-title">{item?.title}</h2>
                    <p className="project-description">
                        {item?.description}
                    </p>
                    <CommonButton title={"Case Study"} />
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
