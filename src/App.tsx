import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
      </Route>
      {/* <Route path="/profile" element={ <Profile/> } />
      <Route path="/contact" element={ <Contact/> } /> */}
    </Routes>
    
    </>
  )
}

export default App
