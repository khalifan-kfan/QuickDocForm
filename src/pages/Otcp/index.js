import React, {  useState,useEffect } from "react";
import "./Otcp.css";

function OtcP({leftSelection,rightSelection,handleNext,handlePrev}) { 
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
    Oleft: leftPick,
    Oright: rightPick
  }
 handleNext(data)
 if((rightChecked1 || rightChecked2 || rightChecked3|| rightChecked4)){
  localStorage.setItem("ORight",
  "OCT positive")
 }
 if((leftChecked1 || leftChecked2||rightChecked3|| rightChecked4)){
  localStorage.setItem("OLeft",
  "OCT positive")
 }
}
const HandlePrevIn =()=>{
  var data ={
    Oleft: leftPick,
    Oright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 || rightChecked2 || rightChecked3|| rightChecked4)){
    localStorage.setItem("ORight",
    "OCT positive")
   }
   if((leftChecked1 || leftChecked2||rightChecked3|| rightChecked4)){
    localStorage.setItem("OLeft",
    "OCT positive")
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

        <div className="HeaderR5"> 
        OCT Positive: One or more present
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/otcp.jpg')} alt="retina" />
          <div className="Caption">Source: AAO Eye Wiki</div>
          </div>
          <div className="SideTable">
            <table>
              <tr>
                <th className="dasheadp2">
                Criteria
                </th >
                <th className="dasheadp2">Right Eye
               (tick if present)</th>
               <th className="dasheadp2">Left Eye
               (tick if present)</th>
              </tr>
              <tr>
                <td>{"CRT >250μm*"}</td>
                <td><form>
                <input type="checkbox" 
                value="CRT >250μm*"
                 
                className="CheckBox" 
                checked={rightChecked1}
                id="myCheckRight" 
                onChange={(e) => {handleChange("right", e.target.value, 0)}
              }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                value="CRT >250μm*"
                 checked={leftChecked1}
                className="CheckBox" id="myCheckleft" 
                onChange={(e) => {handleChange("left",e.target.value, 0)}}/>
                  </form></td>
              </tr>
              <tr>
                <td>{"Intraretinal cysts (IRCs) with change in the foveal contour"} </td>
                <td><form>
                <input type="checkbox" 
                checked={rightChecked2}
                 value ="Intraretinal cysts (IRCs) with change in the foveal contour" 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,1)}
              }/>
                    </form></td>
                <td><form>
                <input type="checkbox"
                checked={leftChecked2} 
                   value ="Intraretinal cysts (IRCs) with change in the foveal contour"
                 className="CheckBox" id="myCheckleft" 
                 onChange={(e) => {handleChange("left",e.target.value,1)}}/>
               
                  </form></td>
              </tr>
              <tr>
            <td>{"Retinal thickening ≥1/2 a disc area and ≤1 DD from fovea"}</td>
                <td><form>
                <input type="checkbox" 
                value="Retinal thickening ≥1/2"
                checked={rightChecked3} 
                
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,2)}}/>
               
                    </form></td>
                <td><form>
                <input type="checkbox"
                 checked={leftChecked3} className="CheckBox"
                  id="myCheckleft" 
                 onChange={(e) => {handleChange("left",e.target.value,2)}}/>
               
                  </form></td>
              </tr>
              
              <tr>
            <td>{"Retinal thickening ≥1 disc area within the macula"}</td>
                <td><form>
                <input type="checkbox"  
                value="Retinal thickening ≥1 disc area within the macula"
                checked={rightChecked4}
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,3)}
              }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                checked={leftChecked4} 
                value="Retinal thickening ≥1 disc area within the macula"
                 className="CheckBox" id="myCheckleft" 
                 onChange={(e) => {handleChange("left",e.target.value,3)}}/>
               
                  </form></td>
              </tr>
             
              
            </table>
            <div>* Normal CRT differ depending on machine used, check reference values for your OCT</div>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{(rightChecked1 || rightChecked2 || 
                rightChecked3|| rightChecked4)?"OCT positive":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 || leftChecked2
               || leftChecked3||leftChecked4)?"OCT positive":""}</div></span>
           
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


 
export default OtcP;