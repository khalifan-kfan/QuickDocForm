import React, {  useState } from "react";
import "./ExampleRM.css";

function ExampleRM({handleNext,handlePrev}) { 
//state

const HandleNextin =()=>{
 
 handleNext({})
}
const HandlePrevIn =()=>{
 
  handlePrev({})
}


  
    return (  
        <div  className="dashboard"> 
       
        <div className="HeaderR2A"> 
        OTC Examples: R1M1
        </div>
        <div className="RBodyDImages">
        <div className="SideLabel">R1M1</div>
          <div className="Image">
          <img  className="" src={require('../../assests/Images/rm2.png')} alt="retina" />
          
         
          </div>
        </div>
        <div className="ButtonSection">
        <button
            onClick={()=>{HandlePrevIn()}}
            >Previous</button>
            <button
            onClick={()=>{HandleNextin()}}
            >Next</button>
          </div>
        </div>
        
      );

    }


 
export default ExampleRM;