import React from 'react'
import arrow from './arrow.png'
import play from './play.png'
import zig from './zig.png'
import spot from './spot.png'
import { useState } from 'react'

function Test() {


  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonStyle = {
    color:"white",position:"absolute",top:"270px",left:"160px",fontSize:"17px",
    background: isHovered ? 'grey' : 'black',
    color:isHovered ? 'black':'white',
  };


  return (
    <>

<img src={spot} style={{position:"absolute",width:"618px",height: "128px",
left:"215px",opacity:"65%",top:"40px",width:"327px",height:"237.26px"}}></img>
    <p style={{position:"absolute",width:"618px",height: "128px",
left:"155px",
top:"124px",
fontFamily:'Clash Display',
fontStyle: "normal",
fontWeight:"700",
fontSize:"45px",
lineHeight:"40px",
/* or 100% */
textTransform:"capitalize",color: "black",opacity:"300"}}>make the best<br></br>financial desision</p>



<p style={{position:"absolute",width:"683px",height: "56px",
left:"157px",
top:"207px",
fontFamily:'Clash Display',
fontStyle: "normal",
fontWeight:"200",
fontSize:"16px",
lineHeight:"28px",color: "black",opacity:"50%"}}>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br></br> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>


<button style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>Get Started<img src={arrow} ></img></button>
<button style={{color:"black",position:"absolute",top:"270px",left:"310px",fontSize:"17px",backgroundColor:"white",border:"0px"}}><img src={play} style={{height:"21px"}}></img>Watch Video</button>

<img src={zig} style={{width:"390px",height:"357.67px",position:"absolute",top:"320px",left:"137px"}}></img>

</>
  );
}


export default Test;