import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  
  const [project , setProject]=useState('Mobile App');
  const handleClick=(e)=>{
    setProject(e);
  }
  console.log(project);
  
  return (
    <div className='flex h-full px-1 shadow-sm font-inter rounded-2xl'>
              <SideBar handleClick={handleClick}/>
        <div className='relative flex flex-col flex-1 w-full'>
              <NavBar/>
              <Dashboard title={project}/>
        </div>
        
    </div>
  );
}

export default App;

