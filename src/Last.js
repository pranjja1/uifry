import React from 'react'
import ready from './ready.png'
import spot from './spot.png'
import logo from './fire.png'
import star from './star.png'
import { useState } from 'react'

function Last() {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonStyle = {
    position:"absolute",
    top:"3820px",
    left:"742px",
    fontSize:"14px",
    background: isHovered ? 'grey' : 'black',
    color:isHovered ? 'black':'white',
  };



  return (
    <>

    <img src={spot} style={{position: "absolute",width: "413px",height: "355.14px",
   left: "1px",top: "3112.85px"}}></img>

<img src={star} style={{position :"absolute",width: "34px",height: "34px",left: "555px",top: "2702.85px" }}></img>

<img src={star} style={{position :"absolute",width: "34px",height: "34px",left: "915px",top: "3202.85px" }}></img>

<img src={star} style={{position :"absolute",width: "24px",height: "24px",left: "70px",top: "3372.85px" }}></img>

<img src={ready} style={{position :"absolute",width: "702.96px",height: "387.83px",left: "155px",top: "3282.85px" }}></img>

<ul style={{listStyle:"none",position:"absolute",top:"3750px",left:"148px",font:"Clash Display",fontSize:"14px"}}>
    <li style={{fontSize:"20px",fontWeight:"650"}}>uifry</li>
    <li>Help@Frybix.Com</li>
    <li>+1234 456 678 89</li>
</ul>

<ul style={{listStyle:"none",position:"absolute",top:"3750px",left:"304px",font:"Clash Display",fontSize:"14px"}}>
    <li style={{fontSize:"20px",fontWeight:"490"}}>Links</li>
    <li>Home</li>
    <li>About Us</li>
    <li>Bookings</li>
    <li>Blog</li>
</ul>

<ul style={{listStyle:"none",position:"absolute",top:"3750px",left:"403px",font:"Clash Display",fontSize:"14px"}}>
    <li style={{fontSize:"20px",fontWeight:"490"}}>Legal</li>
    <li>Terms Of Use</li>
    <li>Privacy Policy</li>
    <li>Cookie Policy</li>
    </ul>

    <ul style={{listStyle:"none",position:"absolute",top:"3750px",left:"512px",font:"Clash Display",fontSize:"14px"}}>
    <li style={{fontSize:"20px",fontWeight:"490"}}>Product</li>
    <li>Take Tour</li>
    <li>Live Chat</li>
    <li>Reviews</li>
    </ul>

    <ul style={{listStyle:"none",position:"absolute",top:"3750px",left:"613px",font:"Clash Display",fontSize:"14px"}}>
    <li style={{fontSize:"20px",fontWeight:"490"}}>Newsletter</li>
    <li>Stay Up To Date</li>
    </ul>

    <p style={{position:"absolute",top:"3820px",left:"646px",fontSize:"14px"}}>Your Email</p>
    <button style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>Subscribe</button>


    <p style={{position:"absolute",top:"3920px",left:"370px",fontSize:"15px"}}>Copyright 2022 Uifry.Com All Rights Reserved</p>
    </>
  )
}

export default Last