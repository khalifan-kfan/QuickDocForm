import React, {  useState, useEffect } from "react";
import "./RetinoOne.css";

function RetinoOne({leftSelection,
  rightSelection,
  handleNext,handlePrev}) { 
//state
const [leftChecked, setleftChecked] = useState(false);
const [rightChecked, setRightChecked] = useState(false);
const [leftPick, setLeftPick] = useState(leftSelection);
const [rightPick, setRightPick] = useState(rightSelection);
const [infor, setInfor] = useState([]);



useEffect(() => {
  if("RO" in leftPick ){
    setleftChecked(true)
  }
  if("RO" in rightPick ){
    setRightChecked(true)
  } 
});

const HandleNextin =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
 handleNext(data)

 if(rightChecked){
  localStorage.setItem("RRight",
   "Diabetic Renopathy Absent")
 }else{
  localStorage.setItem("RRight",
  "")
 }
 if(leftChecked){
  localStorage.setItem("RLeft",
   "Diabetic Renopathy Absent")
 }else{
  localStorage.setItem("RLeft",
   "")
 }
}

const HandlePrevIn =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
  handlePrev(data)
  if(rightChecked){
    localStorage.setItem("RRight",
     "Diabetic Renopathy Absent")
   
   }
   if(leftChecked){
    localStorage.setItem("RLeft",
     "Diabetic Renopathy Absent")
   }
}
const handleLeftChange=(pick)=>{
 
  if(("RO" in leftPick) || Object.keys(leftPick).length===0){
    //add or remove it
    if("RO" in leftPick){
      setLeftPick({})
      setleftChecked(false)
    }
   if(Object.keys(leftPick).length===0){
    setLeftPick({RO:pick})
    setleftChecked(true)
   }
  }
   if(!("RO" in leftPick )&& Object.keys(leftPick).length>0){
    alert("Can't add to left eye")
  } 
}
const handleRightChange=(pick)=>{

  if( ("RO" in rightPick) || Object.keys(rightPick).length===0){
    //add or remove it
    if("RO" in rightPick){
      setRightPick({})
      setRightChecked(false)
    }
   if(Object.keys(rightPick).length===0){
    setRightPick({RO:pick})
    setRightChecked(true)
   }
  }
  if(!("RO" in rightPick )&& Object.keys(rightPick).length>0){
    alert("Can't add to right eye")
  } 
}

    return (  
        <div  className="dashboard"> 
        <div className="HeaderR"> 
          R0: No signs of diabetic retinopathy
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/retino1.jpg')} alt="retina" />
          <div className="Caption">Source: DDR Dataset</div>
          </div>
          <div className="SideTable">
            <table>
              <tr>
                <th>
                Criteria
                </th>
                <th>Right Eye
               (tick if present)</th>
               <th>Left Eye
               (tick if present)</th>
              </tr>
              <tr>
                <td>No signs of diabetic retinopathy</td>
                <td><form>
                <input type="checkbox"
                 value="diabeticRetinopathy" 
                checked={rightChecked} 
                className="CheckBox" id="1" 
                onChange={(e) => {handleRightChange(e.target.value)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"  
                 value="diabeticRetinopathy" 
                 checked={leftChecked} 
                className="CheckBox" 
                id="1" 
                onChange={(e) => {handleLeftChange(e.target.value)}}/>
                  </form></td>
              </tr>
              
            </table>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{rightChecked?"Diabetic Renopathy Absent":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{leftChecked?"Diabetic Renopathy Absent":""}</div></span>
           
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


 
export default RetinoOne;