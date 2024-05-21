import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResumePreview from './ResumePreview';
import '../styles/ResumeForm.css';

function ResumeForm() {
    const [formData, setFormData] = useState({
        personalDetails: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            website: '',
            linkedIn: '',
            phoneNumber: '',
            github: ''
        },
        educationDetails: [
            {
                college: '',
                graduationDate: '',
                degree: '',
                country: '',
                state: '',
                city: ''
            },
            {
                college: '',
                graduationDate: '',
                degree: '',
                country: '',
                state: '',
                city: ''
            }
        ],
        experienceDetails: [
            {
                organization: '',
                role: '',
                description: ''
            },
            {
                organization: '',
                role: '',
                description: ''
            }
        ],
        projectDetails: [
            {
                title: '',
                projectLink: '',
                description: ''
            },
            {
                title: '',
                projectLink: '',
                description: ''
            }
        ],
        skills: {
            skill1: '',
            skill2: '',
            skill3: '',
            skill4: '',
            skill5: '',
            skill6: ''
        },
        interests: {
            interest1: '',
            interest2: '',
            interest3: '',
            interest4: '',
            interest5: '',
            interest6: ''
        }
    });

    const [preview, setPreview] = useState(false);

    const handleChange = (section, index, e) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            const updatedSection = Array.isArray(prevState[section])
                ? [...prevState[section]]
                : { ...prevState[section] };

            if (Array.isArray(updatedSection)) {
                updatedSection[index] = {
                    ...updatedSection[index],
                    [name]: value
                };
            } else {
                updatedSection[name] = value;
            }

            return {
                ...prevState,
                [section]: updatedSection
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPreview(true);
    };
    return (
        <div className='body'>
            <br /><br /><br />
            <div className="container-fluid">
                <h1 className="text-center">Resume Builder</h1>
                {!preview ? (
                    <form onSubmit={handleSubmit}>
                        <h2>Personal</h2>
                        <div className='row'>
                            <div className='col'>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" name="firstName" value={formData.personalDetails.firstName} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="First Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="middleName">Middle Name</label>
                                    <input type="text" className="form-control" name="middleName" value={formData.personalDetails.middleName} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="Middle Name" required />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" value={formData.personalDetails.lastName} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="Last Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={formData.personalDetails.email} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="Email" required />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <input type="text" className="form-control" name="website" value={formData.personalDetails.website} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="Website" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="linkedIn">LinkedIn</label>
                                    <input type="text" className="form-control" name="linkedIn" value={formData.personalDetails.linkedIn} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="LinkedIn" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="tel" className="form-control" name="phoneNumber" value={formData.personalDetails.phoneNumber} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="github">GitHub</label>
                                    <input type="text" className="form-control" name="github" value={formData.personalDetails.github} onChange={(e) => handleChange('personalDetails', null, e)} placeholder="GitHub" />
                                </div>
                            </div>
                        </div>
                        <h2>Education</h2>
                        {formData.educationDetails.map((education, index) => (
                            <div key={index} className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label htmlFor="college">College/University</label>
                                        <input type="text" className="form-control" name="college" value={education.college} onChange={(e) => handleChange('educationDetails', index, e)} placeholder="College/University" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="graduationDate">Graduation Date</label>
                                        <input type="text" className="form-control" name="graduationDate" value={education.graduationDate} onChange={(e) => handleChange('educationDetails', index, e)} placeholder="Graduation Date" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label htmlFor="degree">Degree</label>
                                        <input type="text" className="form-control" name="degree" value={education.degree} onChange={(e) => handleChange('educationDetails', index, e)} placeholder="Degree" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Country</label>
                                        <input type="text" className="form-control" name="country" value={education.country} onChange={(e) => handleChange('educationDetails', index, e)} placeholder="Country" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input type="text" className="form-control" name="state" value={education.state} onChange={(e) => handleChange('educationDetails', index, e)} placeholder="State" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" className="form-control" name="city" value={education.city} onChange={(e) => handleChange('educationDetails', index, e)} placeholder="City" required />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h2>Experience</h2>
                        {formData.experienceDetails.map((experience, index) => (
                            <div key={index} className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label htmlFor="organization">Organization</label>
                                        <input type="text" className="form-control" name="organization" value={experience.organization} onChange={(e) => handleChange('experienceDetails', index, e)} placeholder="Organization" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="role">Role</label>
                                        <input type="text" className="form-control" name="role" value={experience.role} onChange={(e) => handleChange('experienceDetails', index, e)} placeholder="Role" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea className="form-control textarea-align" name="description" value={experience.description} onChange={(e) => handleChange('experienceDetails', index, e)} placeholder="Give a brief description of your job" required></textarea>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h2>Projects</h2>
                        {formData.projectDetails.map((project, index) => (
                            <div key={index}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" name="title" value={project.title} onChange={(e) => handleChange('projectDetails', index, e)} placeholder="Title" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="projectLink">Project Link</label>
                                    <input type="text" className="form-control" name="projectLink" value={project.projectLink} onChange={(e) => handleChange('projectDetails', index, e)} placeholder="Project Link" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control textarea-align" name="description" value={project.description} onChange={(e) => handleChange('projectDetails', index, e)} placeholder="Give a brief description of your project" required></textarea>
                                </div>
                            </div>
                        ))}
                        <h2>Skills</h2>
                        <div className='row'>
                            {Object.keys(formData.skills).map((skill, index) => (
                                <div className='col' key={index}>
                                    <div className="form-group">
                                        <label htmlFor={skill}>Skill {index + 1}</label>
                                        <input type="text" className="form-control" name={skill} value={formData.skills[skill]} onChange={(e) => handleChange('skills', null, e)} placeholder="Skill" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2>Interests</h2>
                        <div className='row'>
                            {Object.keys(formData.interests).map((interest, index) => (
                                <div className='col' key={index}>
                                    <div className="form-group">
                                        <label htmlFor={interest}>Interest {index + 1}</label>
                                        <input type="text" className="form-control" name={interest} value={formData.interests[interest]} onChange={(e) => handleChange('interests', null, e)} placeholder="Interest" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="button-group">
                            <Link to="/">
                                <button type="button" className="btn btn-secondary back-button">Back</button>
                            </Link>
                            <button type="submit" className="btn btn-primary submit-button">Submit</button>
                        </div>
                    </form>
                ) : (
                    <ResumePreview formData={formData} />
                )}
            </div>
        </div>
    );
}

export default ResumeForm;