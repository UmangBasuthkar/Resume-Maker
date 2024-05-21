import React from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import '../styles/ResumePreview.css';

function ResumePreview({ formData }) {
    const { personalDetails, educationDetails, experienceDetails, projectDetails, skills, interests } = formData;

    const handleDownload = async () => {
        const button = document.querySelector('.download-button');
        button.classList.add('hidden');

        const back = document.querySelector('.back-button');
        back.classList.add('hidden');

        // Add a small delay to ensure the canvas is fully rendered
        await new Promise(resolve => setTimeout(resolve, 1000));

        const input = document.getElementById('resume');
        html2canvas(input, { scale: 2, logging: true, useCORS: true })
            .then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('resume.pdf');

                button.classList.remove('hidden');
                back.classList.remove('hidden');
            })
            .catch(err => {
                console.error("Error generating PDF: ", err);
                button.classList.remove('hidden');
            });
    };

    return (
        <div className="resume-container" id="resume">
            <header className="resume-header">
                <p className='title-color'>{personalDetails.firstName} {personalDetails.middleName} {personalDetails.lastName}</p>
                <p>{personalDetails.email} | {personalDetails.phoneNumber} | {personalDetails.website}</p>
                <p>{personalDetails.linkedIn} | {personalDetails.github}</p>
            </header>
            <section className="resume-section">
                <h2>Education</h2>
                {educationDetails.map((edu, index) => (
                    <div key={index} className="resume-item">
                        <h3>{edu.degree}, {edu.college}</h3>
                        <p>{edu.city}, {edu.state}, {edu.country} - {edu.graduationDate}</p>
                    </div>
                ))}
            </section>
            <section className="resume-section">
                <h2>Experience</h2>
                {experienceDetails.map((exp, index) => (
                    <div key={index} className="resume-item">
                        <h3>{exp.role}, {exp.organization}</h3>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </section>
            <section className="resume-section">
                <h2>Projects</h2>
                {projectDetails.map((proj, index) => (
                    <div key={index} className="resume-item">
                        <h3>{proj.title}</h3>
                        <p><a href={proj.projectLink} target="_blank" rel="noopener noreferrer">{proj.projectLink}</a></p>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </section>
            <section className="resume-section">
                <h2>Skills</h2>
                <ul className="horizontal-list">
                    {Object.values(skills).filter(skill => skill).map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
            <section className="resume-section">
                <h2>Interests</h2>
                <ul className="horizontal-list">
                    {Object.values(interests).filter(interest => interest).map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </section>
            <div className="button-group">
                <button onClick={handleDownload} className="btn btn-success download-button">Download as PDF</button>
                <Link to="/">
                    <button type="button" className="btn btn-secondary back-button">Back</button>
                </Link>
            </div>
        </div>
    );
}

export default ResumePreview;
