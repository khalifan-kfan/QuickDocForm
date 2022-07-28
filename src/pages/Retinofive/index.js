import React, {  useState,useEffect } from "react";
import "./Retinofive.css";

function Retinofive({leftSelection,rightSelection,handleNext,handlePrev}) { 
//state
const [leftChecked1, setleftChecked1] = useState(false);
const [leftChecked2, setleftChecked2] = useState(false);

const [rightChecked1, setrightChecked1] = useState(false);
const [rightChecked2, setrightChecked2] = useState(false);

const [leftPick, setLeftPick] = useState(leftSelection);
const [rightPick, setRightPick] = useState(rightSelection);

useEffect(() => {
  if("R5" in leftPick ){
    if(0 in leftPick.R5){
    setleftChecked1(true)
    }
    if(1 in leftPick.R5){
      setleftChecked2(true)
    }
   
  }
  if("R5" in rightPick ){
    if(0 in rightPick.R5){
      setrightChecked1(true)
      }
      if(1 in rightPick.R5){
        setrightChecked2(true)
      }
     
  } 
});
const deleteKey =(obj,keym)=>{
  delete obj[keym]
  return obj
}
const handleChange=(which, pick, position)=>{
  if(which==="right"){  
    if(("R5" in rightPick) || Object.keys(rightPick).length===0){
      //add or remove it
      if("R5" in rightPick){
        var obk =  {...rightPick.R5}
       
        if(rightPick.R5[position] !== undefined){
          
          var obj = deleteKey(obk, position)
         if(position===0){
          setRightPick({R5: obj })
          setrightChecked1(false)
         }
         if(position===1){
          setRightPick({R5: obj })
          setrightChecked2(false)
         }
       
          }else{
            if(position===0){

              setRightPick({R5:{...rightPick.R5, 0:pick}}) 
              setrightChecked1(true)
             }
             if(position===1){
              setRightPick({R5:{...rightPick.R5, 1:pick}})
              setrightChecked2(true)
             }
            
          }
        // setrightPick({})
        // setrightChecked1(false)
      }
     if(Object.keys(rightPick).length===0){
      if(position===0){
        setRightPick({R5:{0:pick}});
        setrightChecked1(true)
       }
       if(position===1){
        setRightPick({R5:{1:pick}});
        setrightChecked2(true)
       }
    
     }
    }
     if(!("R5" in rightPick )&& Object.keys(rightPick).length>0){
      alert("Can't add to right eye")
    } 

  }
  if(which==="left"){
    
    if(("R5" in leftPick) || Object.keys(leftPick).length===0){
      //add or remove it
      if("R5" in leftPick){
        var obk =  {...leftPick.R5}
        
        if(leftPick.R5[position] !== undefined){
        
          var obj = deleteKey(obk, position)
         if(position===0){
          setLeftPick({R5: obj })
          setleftChecked1(false)
         }
         if(position===1){
          setLeftPick({R5: obj })
          setleftChecked2(false)
         }
        
          }else{
            if(position===0){

              setLeftPick({R5:{...leftPick.R5, 0:pick}}) 
              setleftChecked1(true)
             }
             if(position===1){
              setLeftPick({R5:{...leftPick.R5, 1:pick}})
              setleftChecked2(true)
             }
            
          }
        // setLeftPick({})
        // setleftChecked1(false)
      }
     if(Object.keys(leftPick).length===0){
      if(position===0){
        setLeftPick({R5:{0:pick}});
        setleftChecked1(true)
       }
       if(position===1){
        setLeftPick({R5:{1:pick}});
        setleftChecked2(true)
       }
       
     }
    }
     if(!("R5" in leftPick )&& Object.keys(leftPick).length>0){
      alert("Can't add to left eye")
    } 
  

  
}
 
}
const HandleNextin =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
 handleNext(data)
 if((rightChecked1 && rightChecked2  
  )){
  localStorage.setItem("RRight",
  " Treated proliferative retinopathy present")
 }
 if((rightChecked1 && rightChecked2  
  )){
  localStorage.setItem("RLeft",
   "Treated proliferative retinopathy present")
 }
}
const HandlePrevIn =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 && rightChecked2  
    )){
    localStorage.setItem("RRight",
    " Treated proliferative retinopathy present")
   }
   if((rightChecked1 && rightChecked2  
    )){
    localStorage.setItem("RLeft",
     "Treated proliferative retinopathy present")
   }
}
    return (  
        <div  className="dashboard"> 
        
        <div className="HeaderR"> 
        R3S: All present
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/ret5.jpg')} alt="retina" />
          <div className="Caption">Source: IDRiD Dataset</div>
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
                <td>Peripheral laser scars</td>
                <td><form>
                <input type="checkbox" 
                 checked={rightChecked1}  
                 value="Peripheral laser scars"
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => 
                  {handleChange("right",e.target.value,0)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                value="Peripheral laser scars"
                checked={leftChecked1}
                className="CheckBox" id="myCheckleft" 
                onChange={(e) =>
                 {handleChange("left",e.target.value,0)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Stable retinal appearance with no R3A lesions (Compare current and 
previous photos if 
available)</td>
                <td><form>
                <input type="checkbox" 
                 checked={rightChecked2} 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => 
                  {handleChange("right",e.target.value,1)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"  checked={leftChecked2} 
                className="CheckBox" id="myCheckleft" 
                onChange={(e) => {handleChange("left",e.target.value,1)}}/>
                  </form></td>
              </tr>
              
            </table>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{(rightChecked1 && rightChecked2)?"Treated proliferative retinopathy present":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 && leftChecked2 )?"Treated proliferative retinopathy present":""}</div></span>
           
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

  
 
export default Retinofive;