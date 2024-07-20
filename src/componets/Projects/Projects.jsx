import React from 'react'
import Project from './Project'
import './Projects.css'
const Projects = () => {
  return (
    <div className="project section" id="projects">
        <h2 className="section__title">
            Projects
        </h2>
        <span className="section__subtitle">Most recent works</span>
    <Project/>
    </div>
  )
}

export default Projects