import React, {  useState,useEffect } from "react";
import "./RetunoThree.css";

function RetinoThree({leftSelection,rightSelection,handleNext,handlePrev}) { 
//state

const [leftChecked1, setleftChecked1] = useState(false);
const [leftChecked2, setleftChecked2] = useState(false);
const [leftChecked3, setleftChecked3] = useState(false);
const [leftChecked4, setleftChecked4] = useState(false);

const [rightChecked1, setrightChecked1] = useState(false);
const [rightChecked2, setrightChecked2] = useState(false);
const [rightChecked3, setrightChecked3] = useState(false);
const [rightChecked4, setrightChecked4] = useState(false);

const [leftPick, setLeftPick] = useState(leftSelection);
const [rightPick, setRightPick] = useState(rightSelection);

useEffect(() => {
  if("R2" in leftPick ){
    if(0 in leftPick.R2){
    setleftChecked1(true)
    }
    if(1 in leftPick.R2){
      setleftChecked2(true)
    }
    if(2 in leftPick.R2){
      setleftChecked3(true)
     }
     if(3 in leftPick.R2){
      setleftChecked4(true)
     }

  }
  if("R2" in rightPick ){
    if(0 in rightPick.R2){
      setrightChecked1(true)
      }
      if(1 in rightPick.R2){
        setrightChecked2(true)
      }
      if(2 in rightPick.R2){
        setrightChecked3(true)
       }
       if(3 in rightPick.R2){
        setrightChecked4(true)
       }
  } 
});

const HandleNextin =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
 handleNext(data)
 if((rightChecked1 || rightChecked2 || 
  rightChecked3|| rightChecked4)){
  localStorage.setItem("RRight",
  "Pre-proliferative retinopathy present")
 }
 if((leftChecked1 || leftChecked2
  || leftChecked3||leftChecked4)){
  localStorage.setItem("RLeft",
   "Pre-proliferative retinopathy present")
 }
}
const HandlePrevIn =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 || rightChecked2 || 
    rightChecked3|| rightChecked4)){
    localStorage.setItem("RRight",
    "Pre-proliferative retinopathy present")
   }
   if((leftChecked1 || leftChecked2
    || leftChecked3||leftChecked4)){
    localStorage.setItem("RLeft",
     "Pre-proliferative retinopathy present")
   }
}
const deleteKey =(obj,keym)=>{
  delete obj[keym]
  return obj
}
const handleChange=(which, pick, position)=>{
  if(which==="right"){  
    if(("R2" in rightPick) || Object.keys(rightPick).length===0){
      //add or remove it
      if("R2" in rightPick){
        var obk =  {...rightPick.R2}
       
        if(rightPick.R2[position] !== undefined){
          var obj = deleteKey(obk, position)
         if(position===0){
          setRightPick({R2: obj })
          setrightChecked1(false)
         }
         if(position===1){
          setRightPick({R2: obj })
          setrightChecked2(false)
         }
         if(position===2){
          setRightPick({R2: obj })
          setrightChecked3(false)
         }
         if(position===3){
          setRightPick({R2: obj })
          setrightChecked4(false)
         }
          }else{
            if(position===0){

              setRightPick({R2:{...rightPick.R2, 0:pick}}) 
              setrightChecked1(true)
             }
             if(position===1){
              setRightPick({R2:{...rightPick.R2, 1:pick}})
              setrightChecked2(true)
             }
             if(position===2){
              setRightPick({R2: {...rightPick.R2, 2:pick}})
              setrightChecked3(true)
             }
             if(position===3){
              setRightPick({R2: {...rightPick.R2, 3:pick}})
              setrightChecked4(true)
             }
          }
        // setrightPick({})
        // setrightChecked1(false)
      }
     if(Object.keys(rightPick).length===0){
      if(position===0){
        setRightPick({R2:{0:pick}});
        setrightChecked1(true)
       }
       if(position===1){
        setRightPick({R2:{1:pick}});
        setrightChecked2(true)
       }
       if(position===2){
        setRightPick({R2:{2:pick}});
        setrightChecked3(true)
       }
       if(position===3){
        setRightPick({R2:{3:pick}});
        setrightChecked4(true)
       }
     }
    }
     if(!("R2" in rightPick )&& Object.keys(rightPick).length>0){
      alert("Can't add to right eye")
    } 

  }
  if(which==="left"){
    
    if(("R2" in leftPick) || Object.keys(leftPick).length===0){
      //add or remove it
      if("R2" in leftPick){
        var obk =  {...leftPick.R2}
        if(leftPick.R2[position] !== undefined){
          var obj = deleteKey(obk, position)
         if(position===0){
          setLeftPick({R2: obj })
          setleftChecked1(false)
         }
         if(position===1){
          setLeftPick({R2: obj })
          setleftChecked2(false)
         }
         if(position===2){
          setLeftPick({R2: obj })
          setleftChecked3(false)
         }
         if(position===3){
          setLeftPick({R2: obj })
          setleftChecked4(false)
         }
          }else{
            if(position===0){
              setLeftPick({R2:{...leftPick.R2, 0:pick}}) 
              setleftChecked1(true)
             }
             if(position===1){
              setLeftPick({R2:{...leftPick.R2, 1:pick}})
              setleftChecked2(true)
             }
             if(position===2){
              setLeftPick({R2: {...leftPick.R2, 2:pick}})
              setleftChecked3(true)
             }
             if(position===3){
              setLeftPick({R2: {...leftPick.R2, 3:pick}})
              setleftChecked4(true)
             }
          }
        // setLeftPick({})
        // setleftChecked1(false)
      }
     if(Object.keys(leftPick).length===0){
      if(position===0){
        setLeftPick({R2:{0:pick}});
        setleftChecked1(true)
       }
       if(position===1){
        setLeftPick({R2:{1:pick}});
        setleftChecked2(true)
       }
       if(position===2){
        setLeftPick({R2:{2:pick}});
        setleftChecked3(true)
       }
       if(position===3){
        setLeftPick({R2:{3:pick}});
        setleftChecked4(true)
       }
     }
    }
     if(!("R2" in leftPick )&& Object.keys(leftPick).length>0){
      alert("Can't add to left eye")
    } 
  }

  
}

    return (  
        <div  className="dashboard"> 
  
        <div className="HeaderR"> 
          R2:One or more present
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/retina3.jpg')} alt="retina" />
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
                <td>Multiple Blot haemorrhages (~8 or more)</td>
                <td><form>
                <input type="checkbox" 
                 checked={rightChecked1}
                className="CheckBox"
                 id="myCheckRight" 
                 value="haemorrhages"
                onChange={(e) => {handleChange("right", e.target.value, 0)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                checked={leftChecked1} 
                className="CheckBox"
                value="haemorrhages" 
                id="myCheckleft" 
                onChange={(e) => {handleChange("left",e.target.value, 0)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>IRMA</td>
                <td><form>
                <input type="checkbox" 
                 checked={rightChecked2} 
                className="CheckBox" id="myCheckRight" 
                value="IRMA"
                onChange={(e) => {handleChange("right",e.target.value,1)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                checked={leftChecked2} 
                className="CheckBox" 
                id="myCheckleft" 
                value="IRMA"
                onChange={(e) => {handleChange("left",e.target.value,1)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Venous Beading</td>
                <td><form>
                <input type="checkbox"
                 value="VenousBeading" 
                 checked={rightChecked3} 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,2)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                checked={leftChecked3} 
                className="CheckBox" 
                id="myCheckleft" 
                value="VenousBeading" 
                onChange={(e) => {handleChange("left",e.target.value,2)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Venous Reduplication</td>
                <td><form>
                <input type="checkbox"
                  checked={rightChecked4} 
                className="CheckBox"  
                value="VenousReduplication" 
                id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,3)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                checked={leftChecked4} 
                className="CheckBox" id="myCheckleft" 
                 value="VenousReduplication"
                onChange={(e) => {handleChange("left",e.target.value,3)}}/>
               
                  </form></td>
              </tr>
              
            </table>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">
              {(rightChecked1 || rightChecked2 || 
                rightChecked3|| rightChecked4)?"Pre-proliferative retinopathy present":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 || leftChecked2
               || leftChecked3||leftChecked4)?"Pre-proliferative retinopathy present":""}</div></span>
           
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

 
export default RetinoThree;