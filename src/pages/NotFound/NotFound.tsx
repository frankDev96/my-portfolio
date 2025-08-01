import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import "../../styles/animations.css";

interface NotFoundProps { }

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <div className="not-found-container">
            <h1 className="fade-in">404</h1>
            <h2 className="slide-up">Page Not Found</h2>
            <p className="slide-up">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="scale-in">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
