import React from "react";


function ExampleNVD({handleNext,handlePrev}) { 
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
        OTC Examples: R3A (NVD)
        </div>
        <div className="RBodyD">
          <div className="Image">
          <img  className="" src={require('../../assests/Images/nvd.png')} alt="retina" />
          <div className="Caption">Source: octscans.com</div>
         
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


 
export default ExampleNVD;