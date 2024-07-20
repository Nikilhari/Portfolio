import React, { useEffect, useState } from 'react'
import { ProjectData } from './Data';
import { projectsNav } from './Data';
import ProjectItems from './ProjectItems';
const Project = () => {
  const [item,setItem]=useState({name:'all'});
  const [projects,setProjects]=useState([]);
  const [active,setActive]=useState(0);
  useEffect(()=>{
    if(item.name ==="all"){
      setProjects(ProjectData);
    }else{
      const newPro=ProjectData.filter((project)=>{
        return project.category===item.name;
      });
      setProjects(newPro)
    }
  },[item])
  return (
    <>
    <div className="project__filters">
      {projectsNav.map((item,index)=>{
        return(
          <span onClick={(e)=>{
              console.log(index)
              setItem({name: e.target.textContent})
              setActive(index);
          }} className={active === index ? "project__item activeNav" : "project__item"} key={index}>{item.name}</span>
        )
      })}
    </div>
    <div className="project__container container">
        {
          projects.map((item)=>{
            return <ProjectItems item={item} key={item.id}/>
          })
        }
    </div>
    </>
  )
}

export default Project