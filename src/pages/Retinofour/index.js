import React, {  useState,useEffect } from "react";
import "./Retinofour.css";

function Retinofour({leftSelection,rightSelection,handleNext,handlePrev}) { 
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
  if("R4" in leftPick ){
    if(0 in leftPick.R4){
     setleftChecked1(true)
    }
    if(1 in leftPick.R4){
      setleftChecked2(true)
    }
    if(2 in leftPick.R4){
      setleftChecked3(true)
    }

  }
  if("R4" in rightPick ){
    if(0 in rightPick.R4){
      setrightChecked1(true)
      }
      if(1 in rightPick.R4){
        setrightChecked2(true)
      }
      if(2 in rightPick.R4){
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
 if((rightChecked1 || rightChecked2 || 
  rightChecked3)){
  localStorage.setItem("RRight",
  " active proliferative retinopathy present")
 }
 if((leftChecked1 || leftChecked2
  || leftChecked3)){
  localStorage.setItem("RLeft",
   "active proliferative retinopathy present")
 }
}
const HandlePrevIn =()=>{
  var data ={
    Rleft: leftPick,
    Rright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 || rightChecked2 || 
    rightChecked3)){
    localStorage.setItem("RRight",
    " active proliferative retinopathy present")
   }
   if((leftChecked1 || leftChecked2
    || leftChecked3)){
    localStorage.setItem("RLeft",
     "active proliferative retinopathy present")
   }
}
const deleteKey =(obj,keym)=>{
  delete obj[keym]
  return obj
}
const handleChange=(which, pick, position)=>{
  if(which==="right"){  
    if(("R4" in rightPick) || Object.keys(rightPick).length===0){
      //add or remove it
      if("R4" in rightPick){
        var obk =  {...rightPick.R4}
       
        if(rightPick.R4[position] !== undefined){
          
          var obj = deleteKey(obk, position)
         if(position===0){
          setRightPick({R4: obj })
          setrightChecked1(false)
         }
         if(position===1){
          setRightPick({R4: obj })
          setrightChecked2(false)
         }
        
         if(position===2){
          setRightPick({R4: obj })
          setrightChecked3(false)
         }
          }else{
            if(position===0){

              setRightPick({R4:{...rightPick.R4, 0:pick}}) 
              setrightChecked1(true)
             }
             if(position===1){
              setRightPick({R4:{...rightPick.R4, 1:pick}})
              setrightChecked2(true)
             }
             if(position===2){
              setRightPick({R4:{...rightPick.R4, 2:pick}})
              setrightChecked3(true)
             }
            
          }
        
      }
     if(Object.keys(rightPick).length===0){
      if(position===0){
        setRightPick({R4:{0:pick}});
        setrightChecked1(true)
       }
       if(position===1){
        setRightPick({R4:{1:pick}});
        setrightChecked2(true)
       }
       if(position===2){
        setRightPick({R4:{2:pick}});
        setrightChecked3(true)
       }
       
     }
    }
     if(!("R4" in rightPick )&& Object.keys(rightPick).length>0){
      alert("Can't add to right eye")
    } 

  }
  if(which==="left"){
    
    if(("R4" in leftPick) || Object.keys(leftPick).length===0){
      //add or remove it
      if("R4" in leftPick){
        var obk =  {...leftPick.R4}
       
        if(leftPick.R4[position] !== undefined){
        
          var obj = deleteKey(obk, position)
         if(position===0){
          setLeftPick({R4: obj })
          setleftChecked1(false)
         }
         if(position===1){
          setLeftPick({R4: obj })
          setleftChecked2(false)
         }
         if(position===2){
          setLeftPick({R4: obj })
          setleftChecked3(false)
         }
          }else{
            if(position===0){

              setLeftPick({R4:{...leftPick.R4, 0:pick}}) 
              setleftChecked1(true)
             }
             if(position===1){
              setLeftPick({R4:{...leftPick.R4, 1:pick}})
              setleftChecked2(true)
             }
             if(position===2){
              setLeftPick({R4:{...leftPick.R4, 2:pick}})
              setleftChecked3(true)
             }
             
          }
        // setLeftPick({})
        // setleftChecked1(false)
      }
     if(Object.keys(leftPick).length===0){
      if(position===0){
        setLeftPick({R4:{0:pick}});
        setleftChecked1(true)
       }
       if(position===1){
        setLeftPick({R4:{1:pick}});
        setleftChecked2(true)
       }
       if(position===2){
        setLeftPick({R4:{2:pick}});
        setleftChecked3(true)
       }
       
     }
    }
     if(!("R4" in leftPick )&& Object.keys(leftPick).length>0){
      alert("Can't add to left eye")
    } 
  }




  
}
    return (  
        <div  className="dashboard"> 
        
        <div className="HeaderR"> 
        R3A: One or more present
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
                <td>New vessels on the disc (NVD) or ≤1 DD of the margin of the disc</td>
                <td><form>
                <input type="checkbox"
                  checked={rightChecked1} 
                className="CheckBox" id="myCheckRight" 
                value="newvessselsdic"
                onChange={(e) =>
                   {handleChange("right",e.target.value,0)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" value="newvessselsdic" 
                checked={leftChecked1} 
                className="CheckBox" id="myCheckleft" 
                onChange={(e) => 
                {handleChange("left",e.target.value,0)}}/>
          
                  </form></td>
              </tr>
              <tr>
                <td>New vessels elsewhere in the retina (NVE) (>1 DD from the disc)</td>
                <td><form>
                <input type="checkbox"  checked={rightChecked2} 
                className="CheckBox" id="myCheckRight" 
                value='NewVesselsNVE'
                checked={rightChecked2}
                onChange={(e) => 
                  {handleChange("right",e.target.value,1)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"  
                value='NewVesselsNVE'
                className="CheckBox"
                 checked={leftChecked2}
                onChange={(e) => 
                {handleChange("left",e.target.value,1)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Pre-retinal or vitreous haemorrhage</td>
                <td><form>
                <input type="checkbox" value="Pre-retinal" 
                checked={rightChecked3} 
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => 
                  {handleChange("right",e.target.value,2)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                value="Pre-retinal"
                checked={leftChecked3} 
                className="CheckBox"
                 id="myCheckleft" 
                onChange={(e) => 
                {handleChange("left",e.target.value,2)}}/>
               
                  </form></td>
              </tr>
            
              
            </table>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{(rightChecked1 ||
               rightChecked2 || rightChecked3)?"Active proliferative retinopathy present":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 || 
              leftChecked2|| leftChecked3)?"Ative proliferative retinopathy present":""}</div></span>
           
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


 
export default Retinofour;