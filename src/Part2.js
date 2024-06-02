import React from 'react'
import phone1 from './phone1.png'
import spot from './spot.png'
import star from './star.png'
import bud from './bud.png'

function Part2() {
  return (
   <>
   
   <img src={spot} style={{position: "absolute",width: "413px",height: "355.14px",
   left: "45px",top: "614.85px",rotate:"120deg",opacity:"100%"}}></img>
   <img src={phone1} style={{position: "absolute",width: "493px",height: "555.14px",left: "76px",top: "644.85px"}}></img>
   <img src={star} style={{position: "absolute",width: "44px",height: "44px",
   left: "44px",top: "684.85px"}}></img>

   <p style={{position: "absolute",width: "116px",height: "28px",font:'Clash Display',fontWeight: "500",fontSize: "18px",lineHeight: "28px",color:"#FF5555",height: "555.14px",left: "546px",top: "728.85px"}}  data-aos='fade-up'>FEATURES</p>
   <p style={{position: "absolute",width: "3596px",height: "48px",font:'Clash Display',fontWeight: "700",fontSize: "38px",lineHeight: "48px",color:"black",height: "555.14px",left: "545px",top: "752.85px"}} data-aos="zoom-y-out">Uifry Premium</p>

   <img src={spot} style={{position: "absolute",width: "172.96px",height: "157.83px",background: "#FF5555",filter: "blur(51.5773px)",right: "-10px",top: "772.85px" }}></img>


   </>
  )
}




export default Part2