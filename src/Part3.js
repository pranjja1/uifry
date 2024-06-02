import React from 'react'
import phone2 from './phone2.png'
import star from './star.png'
import spot from './spot.png'

function Part3() {
  return (
    <>
 

    <p style={{position: "absolute",width: "116px",height: "28px",font:'Clash Display',fontWeight: "500",fontSize: "18px",lineHeight: "28px",color:"#FF5555",height: "555.14px",left: "150px",top: "1230.85px"}} data-aos="zoom-y-out">ADVANTAGES</p>

    <p style={{position: "absolute",width: "3596px",height: "48px",font:'Clash Display',fontWeight: "700",fontSize: "38px",lineHeight: "48px",color:"black",height: "555.14px",left: "150px",top: "1250.85px"}} data-aos="zoom-y-out">Why Choose Uifry?</p>

    <img src={star} style={{position: "absolute",width: "44px",height: "44px",
   right: "65px",top: "1080.85px"}}></img>

   <img src={spot} style={{position: "absolute",width: "413px",height: "355.14px",
   right: "140px",top: "1250.85px",opacity:"100%"}}></img>

<img src={phone2} style={{position: "absolute",width: "493px",height: "555.14px",right: "26px",top: "1090.85px"}}></img>
    </>
  )
}

export default Part3;