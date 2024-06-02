import React from 'react'
import spot from './spot.png'
import phone3 from './phone3.png'
import star from './star.png'

function Part4() {
  return (
    <>
    <img src={spot} style={{position: "absolute",width: "413px",height: "355.14px",
   left: "45px",top: "1600.85px",rotate:"120deg",opacity:"100%"}}></img>
   <img src={phone3} style={{position: "absolute",width: "873px",height: "555.14px",left: "76px",top: "1600.85px"}}></img>
   <img src={star} style={{position: "absolute",width: "44px",height: "44px",
   right: "161px",top: "2069.85px"}}></img>
   <img src={star} style={{position :"absolute",width: "34px",height: "34px",left: "555px",top: "1592.85px" }}></img>

   <img src={spot} style={{position: "absolute",width: "172.96px",height: "157.83px",background: "#FF5555",filter: "blur(51.5773px)",right: "-10px",top: "772.85px" }}></img>
    </>
  )
}

export default Part4