import React from 'react'
import {projectData} from "../../data/projects"
import ProjectCard from './projectCard'
import Separator from '../../common/separator'
import "./projects.css"
function Projects() {
    const data = projectData
    return (
        <div className="projects">
        <Separator />
           <label className="section-title">Projects</label>
           <div>
           {data.map((project) => {
               return <ProjectCard key={project.id} project={project}/>
           })}
           </div>
        </div>
    )
}

export default Projects
