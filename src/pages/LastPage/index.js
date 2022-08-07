import React, {  useState } from "react";
import "./LastPage.css";

function LastPage({handlePrint,handlePrev,handleFormSubmission}) { 
//state

const HandleNextin =()=>{
 
    handlePrint({})
}
const HandlePrevIn =()=>{
 
  handlePrev({})
}  

    return (  
        <div  className="dashboard"> 
        <div className="RBodyD">
          <div className="ImageMid">
          <img  className="HeaderSideLast" src={require('../../assests/Images/lastTable.png')} alt="retina" />
          </div>
        </div>
        <div className="ButtonSection">
        <button
            onClick={()=>{HandlePrevIn()}}
            >Previous</button>
            <button
            onClick={()=>{HandleNextin()}}
            >Print</button>
            <button
            onClick={()=>{handleFormSubmission()}}
            > Click to Submit Form</button>
          </div>
          {/* <img  className="Machine" src={require('../../assests/Images/machine.jpg')} alt="machine" /> */}
        </div>
        
      );

    }


 
export default LastPage;