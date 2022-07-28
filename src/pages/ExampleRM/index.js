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
        <div className="RBodyD">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/rm1.png')} alt="retina" />
          <div className="Caption">Source: Nadia K. Waheed & Jay S. Duker. OCT in the Management of Diabetic Macular Edema.</div>
         
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