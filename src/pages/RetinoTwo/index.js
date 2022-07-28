import React, {  useState,useEffect } from "react";
import "./RetinoTwo.css";

function RetinoTwo({leftSelection,rightSelection,handleNext,handlePrev}) { 
//state
const [leftChecked1, setleftChecked1] = useState(false);
const [leftChecked2, setleftChecked2] = useState(false);
const [leftChecked3, setleftChecked3] = useState(false);
const [rightChecked1, setrightChecked1] = useState(false);
const [rightChecked2, setrightChecked2] = useState(false);
const [rightChecked3, setrightChecked3] = useState(false);

const [leftPick, setLeftPick] = useState(leftSelection);
const [rightPick, setRightPick] = useState(rightSelection);

useEffect(() => {
  if("R1" in leftPick ){
    if(0 in leftPick.R1){
    setleftChecked1(true)
    }
    if(1 in leftPick.R1){
      setleftChecked2(true)
    }
    if(2 in leftPick.R1){
      setleftChecked3(true)
     }

  }
  if("R1" in rightPick ){
    if(0 in rightPick.R1){
      setrightChecked1(true)
      }
      if(1 in rightPick.R1){
        setrightChecked2(true)
      }
      if(2 in rightPick.R1){
        setrightChecked3(true)
       }
  } 
});

const HandleNextin =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
 handleNext(data)
 if((rightChecked1 || rightChecked2
  || rightChecked3)){
  localStorage.setItem("RRight",
   "Background retinopathy present")
 }
 if((leftChecked1 ||
  leftChecked2 || leftChecked3)){
  localStorage.setItem("RLeft",
   "Background retinopathy present")
 }
}
const HandlePrevIn =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 || rightChecked2
    || rightChecked3)){
    localStorage.setItem("RRight",
     "Background retinopathy present")
   }
   if((leftChecked1 ||
    leftChecked2 || leftChecked3)){
    localStorage.setItem("RLeft",
     "Background retinopathy present")
   }
}
const deleteKey =(obj,keym)=>{
  delete obj[keym]
  return obj
}
const handleChange=(which, pick, position)=>{
  if(which==="right"){  
    if(("R1" in rightPick) || Object.keys(rightPick).length===0){
      //add or remove it
      if("R1" in rightPick){
        var obk =  {...rightPick.R1}
       
        if(rightPick.R1[position] !== undefined){
          
          var obj = deleteKey(obk, position)
         if(position===0){
          setRightPick({R1: obj })
          setrightChecked1(false)
         }
         if(position===1){
          setRightPick({R1: obj })
          setrightChecked2(false)
         }
         if(position===2){
          setRightPick({R1: obj })
          setrightChecked3(false)
         }
          }else{
            if(position===0){

              setRightPick({R1:{...rightPick.R1, 0:pick}}) 
              setrightChecked1(true)
             }
             if(position===1){
              setRightPick({R1:{...rightPick.R1, 1:pick}})
              setrightChecked2(true)
             }
             if(position===2){
              setRightPick({R1: {...rightPick.R1, 2:pick}})
              setrightChecked3(true)
             }
          }
        // setrightPick({})
        // setrightChecked1(false)
      }
     if(Object.keys(rightPick).length===0){
      if(position===0){
        setRightPick({R1:{0:pick}});
        setrightChecked1(true)
       }
       if(position===1){
        setRightPick({R1:{1:pick}});
        setrightChecked2(true)
       }
       if(position===2){
        setRightPick({R1:{2:pick}});
        setrightChecked3(true)
       }
     }
    }
     if(!("R1" in rightPick )&& Object.keys(rightPick).length>0){
      alert("Can't add to right eye")
    } 

  }
  if(which==="left"){
    
    if(("R1" in leftPick) || Object.keys(leftPick).length===0){
      //add or remove it
      if("R1" in leftPick){
        var obk =  {...leftPick.R1}
        console.log(leftPick.R1[position] !== undefined)
        if(leftPick.R1[position] !== undefined){
          console.log("de")
          var obj = deleteKey(obk, position)
         if(position===0){
          setLeftPick({R1: obj })
          setleftChecked1(false)
         }
         if(position===1){
          setLeftPick({R1: obj })
          setleftChecked2(false)
         }
         if(position===2){
          setLeftPick({R1: obj })
          setleftChecked3(false)
         }
          }else{
            if(position===0){

              setLeftPick({R1:{...leftPick.R1, 0:pick}}) 
              setleftChecked1(true)
             }
             if(position===1){
              setLeftPick({R1:{...leftPick.R1, 1:pick}})
              setleftChecked2(true)
             }
             if(position===2){
              setLeftPick({R1: {...leftPick.R1, 2:pick}})
              setleftChecked3(true)
             }
          }
        // setLeftPick({})
        // setleftChecked1(false)
      }
     if(Object.keys(leftPick).length===0){
      if(position===0){
        setLeftPick({R1:{0:pick}});
        setleftChecked1(true)
       }
       if(position===1){
        setLeftPick({R1:{1:pick}});
        setleftChecked2(true)
       }
       if(position===2){
        setLeftPick({R1:{2:pick}});
        setleftChecked3(true)
       }
     }
    }
     if(!("R1" in leftPick )&& Object.keys(leftPick).length>0){
      alert("Can't add to left eye")
    } 
  }

  
}
    return (  
        <div  className="dashboard"> 
      
        <div className="HeaderR"> 
          R1:One or more present
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/retina2.jpg')} alt="retina" />
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
                <td>Microaneurysm(s)</td>
                <td><form>
                <input type="checkbox"  checked={rightChecked1} 
                className="CheckBox" value="Microaneurysm" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,0)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                 value="Microaneurysm" checked={leftChecked1}
                  className="CheckBox" id="myCheckleft" 
                onChange={(e) => {handleChange("left",e.target.value,0)}}/>
                  </form></td>
              </tr>
              <tr>
                <td>Retinal haemorrhage(s)</td>
                <td><form>
                <input type="checkbox" value="haemorrhage" 
                 checked={rightChecked2} 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right", e.target.value,1)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"  value="haemorrhage"
                 checked={leftChecked2} className="CheckBox" id="myCheckleft" 
                onChange={(e) => {handleChange("left",e.target.value,1)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Any Exudates</td>
                <td><form>
                <input type="checkbox" value="Exudates"  checked={rightChecked3} 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,2)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"  value="Exudates" checked={leftChecked3} 
                className="CheckBox" id="myCheckleft" 
                onChange={(e) => {handleChange("left",e.target.value,2)}}/>
               
                  </form></td>
              </tr>
              
            </table>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{(rightChecked1 || rightChecked2
               || rightChecked3)?"Background retinopathy present":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 ||
               leftChecked2 || leftChecked3)?"Background retinopathy present":""}</div></span>
           
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


 
export default RetinoTwo;