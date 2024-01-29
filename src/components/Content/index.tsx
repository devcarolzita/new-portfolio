import React from 'react'
import perfil from '../../assets/perfil.png'
const Content = () => {
  return (
    <div className="content">
      <div className="content-text">
        <h1>Creative <span>Dev, Teacher and Cx</span></h1>
        <button>Hire me</button>
        <button>Download CV</button>
      </div>
      <div className="content-img">
        <img src={perfil} alt="" />
      </div>
    </div>
  )
}

export default Content