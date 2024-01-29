import {useState} from 'react'
import perfil from '../../assets/perfil.png';
import './index.css'
const Content = () => {
  const [newName, setNewName] = useState('');
  const [countNames, setCountNames] = useState(0);

  const handleNames = () => {
    const names = ['DEV', 'CX', 'TEACHER'];
    setNewName(names[countNames]);
    if(countNames  >= names.length - 1){
      setCountNames(0);
      return;
    }
    setCountNames(countNames + 1);
    
  }

  setTimeout(() => {
    handleNames()
  }, 1000);
  return (
    <div className="content">
      <div className="content-text">
        <h1>I AM A <span>{newName}</span></h1>
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