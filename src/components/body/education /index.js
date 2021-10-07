import React from 'react'
import './education.css'
import Separator from '../../common/separator';
import { EducationData } from '../../data/education';
import EducationCard from './educationCard'
function Education() {
    const data = EducationData
    return (
        <div className="education">
        <Separator />
           <label className="section-title">Education</label>
           <div className="education-list">
           {data.map((education) => {
               return(
                  <EducationCard education={education}/>
               )
           })}
           </div>
        </div>
    )
}

export default Education
