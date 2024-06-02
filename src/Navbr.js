import React from 'react'
import { useState } from 'react';
import logo from './fire.png'

function Navbr() {


  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonStyle = {
    width:"120px",
    height:"40px",
    position:"absolute",
    top:"10px",
    left:"590px",
    color:"white",
    background: isHovered ? 'grey' : 'black',
    color:isHovered ? 'black':'white',
  };



  return (

    <>
    <img src={logo} style={{position:"absolute",height:"33px",width:"33px",top:"25px",left:"150px"}}></img>
    <nav class="navbar navbar-expand-lg " style={{width:"1090px",height:"60px",position:"absolute",top:"10px",left:"175px",color:"white",fontSize:"20px",font:"Clash Display"}}>
  <div class="container-fluid" >
  
    <a class="navbar-brand" href="#" style={{fontWeight:"500",font:"Clash Display",fontSize:"27px"}}>uifry</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"red",fontWeight:"700"}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <button style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>Download</button>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbr;