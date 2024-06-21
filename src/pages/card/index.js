import React from 'react'
import Up from '../../components/leftup/up1'
import Down from '../../components/down/down'
import Navbar from '../../components/navbars/navbar'
import {useLocation } from 'react-router-dom';
import { useState } from 'react';



const Left = () => {
  
  
  const [artist, setartist] = useState("")
  const state = useLocation().state;
  const link = state?.lunk || "none";
 
   

  

  async function getuser(myuser){
    try {
         console.log(myuser);
         
        let module = await import("./artist.js");
        let x =myuser.replace(".","").replace(/ /g,"")
        let  propertyValue = module[x];
        setartist(propertyValue)

        // console.log(propertyValue);
        return propertyValue
        } 
        catch (error) { console.error('Error importing module or accessing property:', error);}}


  

 getuser(link)

 const list = artist && (artist.songs) ;
  
 const songs = Array.from(list)
 
 
 console.log(typeof(songs));

  function songlist(){
    return(
      songs.map((e)=>(
        <span>{e}</span>
       ))
    )
  }
 

  


  
  return (
    <div className='flex flex-row'>
    <div className='flex flex-col'>
      <Up/>
      <Down/>
    </div>
    <section className='flex-1 flex flex-col ' style={{backgroundColor:"",width:"75%" , height: "95vh",overflowY:"scroll",overflowY:"scroll"}}>
      <Navbar/>
       
       <section style={{ marginLeft: "8px", padding: '10px',height:"95vh",overflowY:"scroll"}}>
        
    
     
      {songlist()}
   

       </section>
     
    
    </section>
    </div>

  );
}

export default Left
