  

import React, { useState, useEffect } from 'react';

import './App.css'

function App() {
 

  
    const [hora, setHora] = useState(new Date().toLocaleTimeString()); 

  

    useEffect(() => { 
  
      const interval = setInterval(() => { 
  
        setHora(new Date().toLocaleTimeString()); 
  
      }, 1000); 
  
    
  
      return () => clearInterval(interval); 
  
    }, []); 
  
    
  
    return ( 
  
      <div className='container'> 
  
        <h1>Relógio Digital</h1> 
  
        <p>{hora}</p> 
  
      </div> 
  
    );
}

export default App
