import React from 'react'
import './index.css';
import password from '../../assets/password-manager.png'

export const Projects = () => {
  return (
    <div className="projects-box">
      <h2>My Recent Works</h2>
        <button>All</button>
        <button>Web</button>
        <button>Courses</button>
      <div>
        <div className="projects-box-itens">
          <div className="project">
            <p>Projeto tal</p>
            <img src={password} alt="" />
            <p>Tecnologias: X,Y,Z</p>
          </div>
        </div>
        <div className="projects-box-itens">
          <div className="project">
            <p>Projeto tal</p>
            <img src={password} alt="" />
            <p>Tecnologias: X,Y,Z</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;