import React from "react";


function ExampleRMVNE({handleNext,handlePrev}) { 
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
        OTC Examples: R3A (NVE)
        </div>
        <div className="RBodyDImages">
          <div className="SideLabel">R3A (NVE) </div>
          <div className="Image">
          <img  className="" src={require('../../assests/Images/nve2.png')} alt="retina" />
          
         
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


 
export default ExampleRMVNE;