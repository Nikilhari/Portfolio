import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className="project__card"key={item.id}>
        <img src={item.image} alt="" className='project__img'/>
        <h3 className="project__title">{item.title}</h3>
        <a href={item.link} className="project__button" target='_blank'>
          Link <i className="bx bx-right-arrow-alt project__button-icon"></i>  
        </a>
    </div>
  )
}

export default ProjectItems