import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={ <Home /> } />
      {/* <Route path="/profile" element={ <Profile/> } />
      <Route path="/contact" element={ <Contact/> } /> */}
    </Routes>
    
    </>
  )
}

export default App
