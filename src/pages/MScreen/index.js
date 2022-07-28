import React, {  useState,useEffect } from "react";
import "./MScreen.css";

function MScreen({leftSelection,rightSelection,handleNext,handlePrev}) { 
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
  if("M1" in leftPick ){
    if(0 in leftPick.M1){
     setleftChecked1(true)
    }
    if(1 in leftPick.M1){
      setleftChecked2(true)
    }
    if(2 in leftPick.M1){
      setleftChecked3(true)
    }

  }
  if("M1" in rightPick ){
    if(0 in rightPick.M1){
      setrightChecked1(true)
      }
      if(1 in rightPick.M1){
        setrightChecked2(true)
      }
      if(2 in rightPick.M1){
        setrightChecked3(true)
      }

  } 
});

const HandleNextin =()=>{
  var data ={
    Mleft: leftPick,
    Mright: rightPick
  }
 handleNext(data)
 if((rightChecked1 || rightChecked2 || rightChecked3)){
  localStorage.setItem("MRight",
  "High risk moculopathy present")
 }
 if((leftChecked1 || leftChecked2|| leftChecked3)){
  localStorage.setItem("MLeft",
   "High risk moculopathy present")
 }
}
const HandlePrevIn =()=>{
  var data ={
    Mleft: leftPick,
    Mright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 || rightChecked2 || rightChecked3)){
    localStorage.setItem("MRight",
    "High risk moculopathy present")
   }
   if((leftChecked1 || leftChecked2|| leftChecked3)){
    localStorage.setItem("MLeft",
     "High risk moculopathy present")
   }
}

const deleteKey =(obj,keym)=>{
  delete obj[keym]
  return obj
}
const handleChange=(which, pick, position)=>{
  if(which==="right"){  
    if(("M1" in rightPick) || Object.keys(rightPick).length===0){
      //add or remove it
      if("M1" in rightPick){
        var obk =  {...rightPick.M1}
       
        if(rightPick.M1[position] !== undefined){
          
          var obj = deleteKey(obk, position)
         if(position===0){
          setRightPick({M1: obj })
          setrightChecked1(false)
         }
         if(position===1){
          setRightPick({M1: obj })
          setrightChecked2(false)
         }
        
         if(position===2){
          setRightPick({M1: obj })
          setrightChecked3(false)
         }
          }else{
            if(position===0){

              setRightPick({M1:{...rightPick.M1, 0:pick}}) 
              setrightChecked1(true)
             }
             if(position===1){
              setRightPick({M1:{...rightPick.M1, 1:pick}})
              setrightChecked2(true)
             }
             if(position===2){
              setRightPick({M1:{...rightPick.M1, 2:pick}})
              setrightChecked3(true)
             }
            
          }
        
      }
     if(Object.keys(rightPick).length===0){
      if(position===0){
        setRightPick({M1:{0:pick}});
        setrightChecked1(true)
       }
       if(position===1){
        setRightPick({M1:{1:pick}});
        setrightChecked2(true)
       }
       if(position===2){
        setRightPick({M1:{2:pick}});
        setrightChecked3(true)
       }
       
     }
    }
     if(!("M1" in rightPick )&& Object.keys(rightPick).length>0){
      alert("Can't add to right eye")
    } 

  }
  if(which==="left"){
    
    if(("M1" in leftPick) || Object.keys(leftPick).length===0){
      //add or remove it
      if("M1" in leftPick){
        var obk =  {...leftPick.M1}
       
        if(leftPick.M1[position] !== undefined){
        
          var obj = deleteKey(obk, position)
         if(position===0){
          setLeftPick({M1: obj })
          setleftChecked1(false)
         }
         if(position===1){
          setLeftPick({M1: obj })
          setleftChecked2(false)
         }
         if(position===2){
          setLeftPick({M1: obj })
          setleftChecked3(false)
         }
          }else{
            if(position===0){

              setLeftPick({M1:{...leftPick.M1, 0:pick}}) 
              setleftChecked1(true)
             }
             if(position===1){
              setLeftPick({M1:{...leftPick.M1, 1:pick}})
              setleftChecked2(true)
             }
             if(position===2){
              setLeftPick({M1:{...leftPick.M1, 2:pick}})
              setleftChecked3(true)
             }
             
          }
        // setLeftPick({})
        // setleftChecked1(false)
      }
     if(Object.keys(leftPick).length===0){
      if(position===0){
        setLeftPick({M1:{0:pick}});
        setleftChecked1(true)
       }
       if(position===1){
        setLeftPick({M1:{1:pick}});
        setleftChecked2(true)
       }
       if(position===2){
        setLeftPick({M1:{2:pick}});
        setleftChecked3(true)
       }
       
     }
    }
     if(!("M1" in leftPick )&& Object.keys(leftPick).length>0){
      alert("Can't add to left eye")
    } 
  }
  
}
  

    return (  
        <div  className="dashboard"> 
         {console.log("new")}
        <div className="HeaderR2"> 
        M1: One or more of the following present
      M0: All absent
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/m2.jpg')} alt="retina" />
          <div className="Caption">Source: IDRiD Dataset</div>
          </div>
          <div className="SideTable">
            <table>
              <tr>
                <th className="dasheadp">
                Criteria
                </th >
                <th className="dasheadp">Right Eye
               (tick if present)</th>
               <th className="dasheadp">Left Eye
               (tick if present)</th>
              </tr>
              <tr>
                <td>Macula exudate ≤1 DD of the fovea</td>
                <td><form>
                <input type="checkbox" 
                  checked={rightChecked1}
                className="CheckBox" id="myCheckRight" 
                value="MaculaExudate"
                onChange={(e) =>
                  {handleChange("right",e.target.value,0)}
                 
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"
                  checked={leftChecked1}
                 value="MaculaExudate"
                  className="CheckBox" id="myCheckleft" 
                onChange={(e) => 
                  {handleChange("left",e.target.value,0)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Group of macula exudates ≥1/2 a disc area (DA)</td>
                <td><form>
                <input type="checkbox" 
                 value="macula exudates ≥1/2"
                 checked={rightChecked2}
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => 
                  {handleChange("right",e.target.value,1)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                value="macula exudates ≥1/2"
                checked={leftChecked2}
                 className="CheckBox" id="myCheckleft" 
                onChange={(e) => 
                  {handleChange("left",e.target.value,1)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Visual acuity ≤6/12 AND microorganism  ≤1 DD from fovea</td>
                <td><form>
                <input type="checkbox"  
                value="Visual acuity ≤6/12 AND microorganism  ≤1 DD"
                checked={rightChecked3} 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,2)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                 value="Visual acuity ≤6/12 AND microorganism  ≤1 DD"
                 checked={leftChecked3} 
                 className="CheckBox" id="myCheckleft" 
                onChange={(e) => 
                {handleChange("left",e.target.value,2)}}/>
               
                  </form></td>
              </tr>
              
            </table>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{(rightChecked1 || rightChecked2 || rightChecked3)?
            "High risk moculopathy present":"low risk moculopathy present "}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 || leftChecked2|| leftChecked3)?
            "High risk moculopathy present":"low risk moculopathy present "}</div></span>
           
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


 
export default MScreen;