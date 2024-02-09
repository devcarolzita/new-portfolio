import './index.css';
import data from '../../data/data';
import { useState } from 'react';
import { DataElements } from '../../types/type';

export const Projects = () => {
  const [typeData, setTypeData] = useState<DataElements[]>(data);
  const filterData = (type:string) => {
    console.log('teste');
    
    if(type === 'All'){
      return true
    }
    setTypeData(data.filter((element) => element.type === type)) 
    console.log(type);
    
    
  }
  console.log(typeData);
  

  return (
    <div className="projects-box">
      <h2>My Recent Works</h2>
        <button onClick={() => filterData('All')}>All</button>
        <button onClick={() => filterData('web')}>Web</button>
        <button onClick={() => filterData('course')}>Courses</button>
      <div className="projects-box-container">
        
          {typeData && typeData.map((project) => (
            <div key={project.nameProject} className="projects-box-itens">
            <div className="project">
            <p>{project.nameProject}</p>
            <img src={`./assets/${project.nameProject.toLowerCase().replace(/\s/g, '')}.jpeg`} alt="" />
            <p>Tecnologias: X,Y,Z</p>
            </div>
            </div>
          ))}
         
     
        {/* <div className="projects-box-itens">
          <div className="project">
            <p>Projeto tal</p>
            <img src={password} alt="" />
            <p>Tecnologias: X,Y,Z</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects;