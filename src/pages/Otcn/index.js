import React, {  useState,useEffect } from "react";
import "./Otcn.css";

function Otcn({leftSelection,rightSelection,handleNext,handlePrev}) { 
//state
const [leftChecked1, setleftChecked1] = useState(false);
const [leftChecked2, setleftChecked2] = useState(false);

const [rightChecked1, setrightChecked1] = useState(false);
const [rightChecked2, setrightChecked2] = useState(false);


const [leftPick, setLeftPick] = useState(leftSelection);
const [rightPick, setRightPick] = useState(rightSelection);

useEffect(() => {
  if("O1" in leftPick ){
    if(0 in leftPick.O1){
    setleftChecked1(true)
    }
    if(1 in leftPick.O1){
      setleftChecked2(true)
    }
   
  }
  if("O1" in rightPick ){
    if(0 in rightPick.O1){
      setrightChecked1(true)
      }
      if(1 in rightPick.O1){
        setrightChecked2(true)
      }
     
  } 
});

const HandleNextin =()=>{
  var data ={
    Oleft: leftPick,
    Oright: rightPick
  }
 handleNext(data)
 if((rightChecked1 && rightChecked2 )){
  localStorage.setItem("ORightn",
  "OCT negative")
 }else{
  localStorage.setItem("ORightn",
  "")
 }
 if((leftChecked1 && leftChecked2)){
  localStorage.setItem("OLeftn",
   "OCT negative")
 } else{
  localStorage.setItem("OLeftn",
  "")
 }
}
const HandlePrevIn =()=>{
  var data ={
    Oleft: leftPick,
    Oright: rightPick
  }
  handlePrev(data)
  if((rightChecked1 && rightChecked2 )){
    localStorage.setItem("ORightn",
    "OCT negative")
   }
   else{
    localStorage.setItem("ORightn",
    "")
   }
   if((leftChecked1 && leftChecked2)){
    localStorage.setItem("OLeftn",
     "OCT negative")
   }else{
    localStorage.setItem("OLeftn",
    "")
   }
}
const deleteKey =(obj,keym)=>{
  delete obj[keym]
  return obj
}
const handleChange=(which, pick, position)=>{
  if(which==="right"){  
    if(("O1" in rightPick) || Object.keys(rightPick).length===0){
      //add or remove it
      if("O1" in rightPick){
        var obk =  {...rightPick.O1}
       
        if(rightPick.O1[position] !== undefined){
          
          var obj = deleteKey(obk, position)
         if(position===0){
          setRightPick({O1: obj })
          setrightChecked1(false)
         }
         if(position===1){
          setRightPick({O1: obj })
          setrightChecked2(false)
         }
         if(Object.keys(obj).length===0){
        
          setRightPick({})
         }
          }else{
            if(position===0){

              setRightPick({O1:{...rightPick.O1, 0:pick}}) 
              setrightChecked1(true)
             }
             if(position===1){
              setRightPick({O1:{...rightPick.O1, 1:pick}})
              setrightChecked2(true)
             }
            
          }
        // setrightPick({})
        // setrightChecked1(false)
      }
     if(Object.keys(rightPick).length===0){
      if(position===0){
        setRightPick({O1:{0:pick}});
        setrightChecked1(true)
       }
       if(position===1){
        setRightPick({O1:{1:pick}});
        setrightChecked2(true)
       }
    
     }
    }
     if(!("O1" in rightPick )&& Object.keys(rightPick).length>0){
      alert("You already selected OCT")
    } 

  }
  if(which==="left"){
    
    if(("O1" in leftPick) || Object.keys(leftPick).length===0){
      //add or remove it
      if("O1" in leftPick){
        var obk =  {...leftPick.O1}
        
        if(leftPick.O1[position] !== undefined){
        
          var obj = deleteKey(obk, position)
         if(position===0){
          setLeftPick({O1: obj })
          setleftChecked1(false)
         }
         if(position===1){
          setLeftPick({O1: obj })
          setleftChecked2(false)
         }
         if(Object.keys(obj).length===0){
          
          setLeftPick({})
         }
        
          }else{
            if(position===0){

              setLeftPick({O1:{...leftPick.O1, 0:pick}}) 
              setleftChecked1(true)
             }
             if(position===1){
              setLeftPick({O1:{...leftPick.O1, 1:pick}})
              setleftChecked2(true)
             }
            
          }
        // setLeftPick({})
        // setleftChecked1(false)
      }
     if(Object.keys(leftPick).length===0){
      if(position===0){
        setLeftPick({O1:{0:pick}});
        setleftChecked1(true)
       }
       if(position===1){
        setLeftPick({O1:{1:pick}});
        setleftChecked2(true)
       }
       
     }
    }
     if(!("O1" in leftPick )&& Object.keys(leftPick).length>0){
      alert("You already selected OCT")
    }   
}
 
}
    return (  
        <div  className="dashboard"> 
         {console.log("new")}
        <div className="HeaderR3"> 
        OCT Negative: All present 
        </div>
        <div className="RBody">
          <div className="Image">
          <img  className="HeaderSide" src={require('../../assests/Images/otcn.png')} alt="retina" />
          <div className="Caption">Source: Kermany OCT dataset</div>
          </div>
          <div className="SideTable">
            <table>
              <tr>
                <th className="dasheadn">
                Criteria
                </th >
                <th className="dasheadn">Right Eye
               (tick if present)</th>
               <th className="dasheadn">Left Eye
               (tick if present)</th>
              </tr>
              <tr>
                <td>No OCT positive or borderline signs</td>
                <td><form>
                <input type="checkbox"  
                value="No OCT positive"
                checked={rightChecked1}  
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => {handleChange("right",e.target.value,0)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox" 
                value="No OCT positive"
                checked={leftChecked1}
                className="CheckBox" id="myCheckleft" 
                onChange={(e) =>
                  {handleChange("left",e.target.value,0)}}/>
               
                  </form></td>
              </tr>
              <tr>
                <td>Normal central retinal thickness (CRT)*</td>
                <td><form>
                <input type="checkbox"  
                value="Normal central retinal thickness"
                checked={rightChecked2}  
                className="CheckBox" id="myCheckRight" 
                onChange={(e) => 
                  {handleChange("right",e.target.value,1)}
                  }/>
                    </form></td>
                <td><form>
                <input type="checkbox"
                 value="Normal central retinal thickness"
                 checked={leftChecked2} 
                 className="CheckBox" id="myCheckleft" 
                onChange={(e) => {handleChange("left",e.target.value,1)}}/>
                  </form></td>
              </tr>
             
              
            </table>
            <div>* Normal CRT differ depending on machine used, check reference values for your OCT</div>
            <span ><div  className="RigthAnswer">Right eye:</div>
            <div className="AnswerDisplay">{(rightChecked1 && rightChecked2)?"OCT negative":""}</div></span>
            <span><div  className="LeftAnswer">Left eye:</div>
            <div  className="AnswerDisplay">{(leftChecked1 && leftChecked2)?"OCT negative":""}</div></span>
           
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
 
export default Otcn;