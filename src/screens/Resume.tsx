import React from "react";

interface ResumeProps { }

interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string[];
}

interface Education {
    institution: string;
    degree: string;
    duration: string;
    description: string;
}

const Resume: React.FC<ResumeProps> = () => {
    const experiences: Experience[] = [
        {
            company: "Tech Company",
            position: "Frontend Developer",
            duration: "2020 - Present",
            description: [
                "Developed responsive web applications using React and TypeScript",
                "Collaborated with design team to implement UI/UX improvements",
                "Optimized application performance and loading speeds",
            ],
        },
        {
            company: "Another Tech Company",
            position: "Junior Developer",
            duration: "2018 - 2020",
            description: [
                "Built and maintained company website",
                "Implemented responsive designs",
                "Worked with React and JavaScript",
            ],
        },
    ];

    const education: Education[] = [
        {
            institution: "University Name",
            degree: "Bachelor of Science in Computer Science",
            duration: "2014 - 2018",
            description: "Graduated with honors. Specialized in web development.",
        },
    ];

    return (
        <div className="resume-container">
            <h1>My Resume</h1>

            <div className="resume-section">
                <h2>Experience</h2>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.position}</h3>
                        <div className="company-info">
                            <span className="company-name">{exp.company}</span>
                            <span className="duration">{exp.duration}</span>
                        </div>
                        <ul>
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="resume-section">
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.degree}</h3>
                        <div className="institution-info">
                            <span className="institution-name">{edu.institution}</span>
                            <span className="duration">{edu.duration}</span>
                        </div>
                        <p>{edu.description}</p>
                    </div>
                ))}
            </div>

            <div className="resume-download">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                >
                    Download Full Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
