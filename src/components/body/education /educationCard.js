import React from 'react'
import './educationCard.css'
function EducationCard({education}) {
    return (
        <div className="school-card">
            <img className="school-logo" src={education.logo}/>
            <div className= "school-info">
            <label className="school-name">{education.school}</label>
            <div className="school-year">
            <label>{education.degree}</label> <br />
            <label>{education.endYear}</label>
            </div>
            </div>
        </div>
    )
}

export default EducationCard