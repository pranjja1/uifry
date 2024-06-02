import React from 'react'
import Navbr from './Navbr.js'
import Test from './Test.js'
import image from './phone.png'
import './App.css'
import Part2 from './Part2.js'
import Part3 from './Part3.js'
import Part4 from './Part4.js'
import Testi from './Testi.js'
import Faq from './Faq.js'
import Last from './Last.js'
import Data from './Data.js'


function App() {

  
return(
<>


<Navbr/>
<Test/>
<img src={image} style={{width:"442px",height:"432px", position:"absolute",left:"530px",top:"58px"}}></img>


<Part2/>
<Part3/>
<Part4/>
<Data/>
<Testi/>
<Faq/>
<Last/>


<hr className="divider" style={{ border: "3px solid black",
  margin: "10px 0", /* Adjust margins as needed */
  height: "14px",position:"absolute",top:"3900px"}}/>


    </>
  );

}

export default App;