import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
// import { useState } from 'react';
import Left from './components/left'
// import Navbar from './components/navbars/navbar';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Card from './pages/card'
import Timer from './components/timer/timer'
// import Signin from './pages/signin';

const App = () => {
 
  // const [link,setlink] =useState() ;

 const  grow = () => {
    return(
      <>
      <div>Hello my friends</div>
      <div>kaise hai aaplog</div>
      </>
    )
  }

  console.log(grow);
  

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Left/>} />
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/signin" element={<Signin/>}/> */}
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path='/timer' element={
                  <Timer deadlinedate={4} month={9} year={2024} hour={0} minutes={0}
        
                  newscript={grow()}
                  />

        }/>
        
      </Routes>
    </Router>
        
        // // put the hr in 24-hr format

  );
};

export default App;
