import React, {  useState,useEffect } from "react";
import "./OtcB.css";

function OtcB({leftSelection,rightSelection,handleNext,handlePrev}) { 
//state
const [leftChecked1, setleftChecked1] = useState(false);
const [leftChecked2, setleftChecked2] = useState(false);
const [leftChecked3, setleftChecked3] = useState(false);
const [rightChecked1, setrightChecked1] = useState(false);
const [rightChecked2, setrightChecked2] = useState(false);
const [rightChecked3, setrightChecked3] = useState(false);

const [leftPick, setLeftPick] = useState(leftSelection);
const [rightPick, setRightPick] = useState(rightSelection);

const HandleNextin =()=>{
  var data ={
    Oleft: leftPick,
    Oright: rightPick
  }
 handleNext(data)
 if((rightChecked1 && rightChecked2 && rightChecked3)){
 
  localStorage.setItem("ORightb",
  "BorderLine present")
 }else{
  
  localStorage.setItem("ORightb",
  "")}
 if((leftChecked1 && leftChecked2 && leftChecked3)){
  localStorage.setItem("OLeftb",
  "BorderLine present")
 }else{
  localStorage.setItem("OLeftb",
  "")}
}
const HandlePrevIn =()=>{
  var data ={
    Oleft: leftPick,
    Oright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 && rightChecked2 && rightChecked3)){
    localStorage.setItem("ORightb",
    "BorderLine present")
   }else{
    localStorage.setItem("ORightb",
    "")}
   if((leftChecked1 && leftChecked2&& leftChecked3)){
    localStorage.setItem("OLeftb",
    "BorderLine present")
   }else{
    localStorage.setItem("OLeftb",
    "")}
  
}
useEffect(() => {
  if("O2" in leftPick ){
    if(0 in leftPick.O2){
     setleftChecked1(true)
    }
    if(1 in leftPick.O2){
      setleftChecked2(true)
    }
    if(2 in leftPick.O2){
      setleftChecked3(true)
    }

  }
  if("O2" in rightPick ){
    if(0 in rightPick.O2){
      setrightChecked1(true)
      }
      if(1 in rightPick.O2){
        setrightChecked2(true)
      }
      if(2 in rightPick.O2){
        setrightChecked3(true)
      }
  } 
});
const deleteKey =(obj,keym)=>{
  delete obj[keym]
  return obj
}
const handleChange=(which, pick, position)=>{
  if(which==="right"){  
    if(("O2" in rightPick) || Object.keys(rightPick).length===0){
      //add or remove it
      if("O2" in rightPick){
        var obk =  {...rightPick.O2}
       
        if(rightPick.O2[position] !== undefined){
          
          var obj = deleteKey(obk, position)
         if(position===0){
          setRightPick({O2: obj })
          setrightChecked1(false)
         }
         if(position===1){
          setRightPick({O2: obj })
          setrightChecked2(false)
         }
        
         if(position===2){
          setRightPick({O2: obj })
          setrightChecked3(false)
         }
         if(Object.keys(obj).length===0){
         
          setRightPick({})
         }
          }else{
            if(position===0){

              setRightPick({O2:{...rightPick.O2, 0:pick}}) 
              setrightChecked1(true)
             }
             if(position===1){
              setRightPick({O2:{...rightPick.O2, 1:pick}})
              setrightChecked2(true)
             }
             if(position===2){
              setRightPick({O2:{...rightPick.O2, 2:pick}})
              setrightChecked3(true)
             }
            
          }
        
      }
     if(Object.keys(rightPick).length===0){
      if(position===0){
        setRightPick({O2:{0:pick}});
        setrightChecked1(true)
       }
       if(position===1){
        setRightPick({O2:{1:pick}});
        setrightChecked2(true)
       }
       if(position===2){
        setRightPick({O2:{2:pick}});
        setrightChecked3(true)
       }
       
     }
    }
     if(!("O2" in rightPick )&& Object.keys(rightPick).length>0){
      alert("You already selected OCT")
    } 

  }
  if(which==="left"){
    
    if(("O2" in leftPick) || Object.keys(leftPick).length===0){
      //add or remove it
      if("O2" in leftPick){
        var obk =  {...leftPick.O2}
       
        if(leftPick.O2[position] !== undefined){
        
          var obj = deleteKey(obk, position)
         if(position===0){
          setLeftPick({O2: obj })
          setleftChecked1(false)
         }
         if(position===1){
          setLeftPick({O2: obj })
          setleftChecked2(false)
         }
         if(position===2){
          setLeftPick({O2: obj })
          setleftChecked3(false)
         }
         if(Object.keys(obj).length===0){
          
          setLeftPick({})
         }
          }else{
            if(position===0){

              setLeftPick({O2:{...leftPick.O2, 0:pick}}) 
              setleftChecked1(true)
             }
             if(position===1){
              setLeftPick({O2:{...leftPick.O2, 1:pick}})
              setleftChecked2(true)
             }
             if(position===2){
              setLeftPick({O2:{...leftPick.O2, 2:pick}})
              setleftChecked3(true)
             }
             
          }
        // setLeftPick({})
        // setleftChecked1(false)
      }
     if(Object.keys(leftPick).length===0){
      if(position===0){
        setLeftPick({O2:{0:pick}});
        setleftChecked1(true)
       }
       if(position===1){
        setLeftPick({O2:{1:pick}});
        setleftChecked2(true)
       }
       if(position===2){
        setLeftPick({O2:{2:pick}});
        setleftChecked3(true)
       }
       
     }
    }
     if(!("O2" in leftPick )&& Object.keys(leftPick).length>0){
      alert("You already selected OCT")
    } 
  }
  
}
    return (  
        <div  className="dashboard"> 

        <div className="HeaderR4"> 
        OCT Borderline: All present
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/otcb.png')} alt="retina" />
          <div className="Caption">Source: Kermany OCT dataset</div>
          </div>
          <div className="SideTable">
            <table>
              <tr>
                <th className="dasheadb">
                Criteria
                </th >
                <th className="dasheadb">Right Eye
               (tick if present)</th>
               <th className="dasheadb">Left Eye
               (tick if present)</th>
              </tr>
              <tr>
                <td>No OCT positive signs</td>
                <td><form>
                <input type="checkbox" 
                value="NoBoardlineOTC"
                checked={rightChecked1}
                className="CheckBox" id="myCheckRight" 
                onChange={(e) =>
                  {handleChange("right",e.target.value,0)}
                 
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"
                 value="NoBoardlineOTC"
                 checked={leftChecked1} className="CheckBox" id="myCheckleft" 
                 onChange={(e) =>
                  {handleChange("left",e.target.value,0)}
                  }/>
               
                  </form></td>
              </tr>
              <tr>
                <td>{"Intraretinal cysts but no change in foveal contour and CRT < 250μm* T)*"} </td>
                <td><form>
                <input type="checkbox" 
                value="Intraretinal cysts but no change in foveal contour"
                checked={rightChecked2} 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => 
                  {handleChange("right",e.target.value,1)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                checked={leftChecked2}
                 className="CheckBox" id="myCheckleft" 
                 onChange={(e) => 
                  {handleChange("left",e.target.value,1)}}/>
               
                  </form></td>
              </tr>
              <tr>
            <td>{"Retinal thickening within the macula but <1 disc area"}</td>
                <td><form>
                <input type="checkbox" 
                value="Retinal thickening within the macula but <1 disc area"
                checked={rightChecked3}  
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,2)}
              }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                 value="Retinal thickening within the macula but <1 disc area"
                 checked={leftChecked3} 
                 className="CheckBox" id="myCheckleft" 
                 onChange={(e) => 
                  {handleChange("left",e.target.value,2)}}/>
               
                  </form></td>
              </tr>
             
              
            </table>
            <div>* Normal CRT differ depending on machine used, check reference values for your OCT</div>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{(rightChecked1 && rightChecked2 && rightChecked3)?"BorderLine present":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 && leftChecked2&& leftChecked3)?"BorderLine present":""}</div></span>
           
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


 
export default OtcB;