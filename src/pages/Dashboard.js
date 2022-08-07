import React, {  useState,  useRef  } from "react";
import "./Dashboard.css";
import Firstform from "./Firstform";
import RetinoOne from "./RetinoOne"
import RetinoTwo from "./RetinoTwo"
import RetinoThree from "./RetinoThree"
import Retinofour from "./Retinofour"
import Retinofive from "./Retinofive"
import DefinitionsPage from "./DefinitionsPage";
import Otcn  from "./Otcn";
import OtcB from "./OtcB";
import OtcP from "./Otcp";
import FinalGrading from "./FinalGrading";
import ExampleRM from "./ExampleRM";
import ExampleRMVNE from "./ExampleRANVE";
import ExampleNVD from "./ExampleNVD";
import LastPage from "./LastPage";

import {Printable} from "./Printable";

import MScreen from "./MScreen";



function Dashboard() { 

//state
const [viewPosition, setviewPosition] = useState(0)
const [patientInfor,setpatientInfor] = useState({})
//retino
const [retinoLeft,setRetinoLeft] =  useState({})
const [retinoRight,setRetinoRight] =  useState({})
//m1 state
const [mLeft,setMLeft] =  useState({})
const [mRight,setMRight] =  useState({})
//otc
const [oLeft,setOLeft] =  useState({})
const [oRight,setORight] =  useState({})
//doctor information
const [docInfor, setdocInfor] = useState({})

const [printable, setPrintable] =  useState(false)



const NextFromForm =(infor)=>{
  setviewPosition(1);
  setpatientInfor(infor)
 // console.log(infor)
  // store infor
}
const handleNextR=(data)=>{
  //if(Object.keys(data).length !== 0 && )
  if(Object.keys(data).length>0){
    setRetinoLeft(data.Rleft)
    setRetinoRight(data.Rright)
   }
  setviewPosition(viewPosition+1);
}

const handlePrevR=(data)=>{
   if(Object.keys(data).length>0){
    setRetinoLeft(data.Rleft)
    setRetinoRight(data.Rright)
   }
  setviewPosition(viewPosition-1);
}
const handleNextM =(data)=>{
  if(Object.keys(data).length>0){
    setMLeft(data.Mleft)
    setMRight(data.Mright)
   }
  setviewPosition(viewPosition+1);
}
const handlePrevM =(data)=>{
  if(Object.keys(data).length>0){
    setMLeft(data.Mleft)
    setMRight(data.Mright)
   }
  setviewPosition(viewPosition-1);
}

const handleNextGrading =(data)=>{
  if(Object.keys(data).length>0){
    setdocInfor(data)
   }
  setviewPosition(viewPosition+1);
}
const handlePrevGrading =(data)=>{
  if(Object.keys(data).length>0){
    setdocInfor(data)
  }
  setviewPosition(viewPosition-1);
}
const handleNextO =(data)=>{
  if(Object.keys(data).length>0){
    setOLeft(data.Oleft)
    setORight(data.Oright)
   }
  setviewPosition(viewPosition+1);
}
const handlePrevO=(data)=>{
  if(Object.keys(data).length>0){
    setOLeft(data.Oleft)
    setORight(data.Oright)
   }
  setviewPosition(viewPosition-1);
}

const handleNext =()=>{
  setviewPosition(viewPosition+1);
}
const handlePrev =()=>{
  setviewPosition(viewPosition-1);
}
const handlePrint =()=>{
  setviewPosition(viewPosition+1);
 
}

const handleFormSubmission=()=>{ 
  alert("Form Submitted")
 }
    return (  
        <>{
        (viewPosition === 0 )?(
             <Firstform callBack={NextFromForm} patientInfor={patientInfor}/>
        ):
        (viewPosition === 1 )?(
          <RetinoOne 
          leftSelection={retinoLeft} 
          rightSelection={retinoRight} 
          handleNext={handleNextR} 
          handlePrev={handlePrevR}/>
        ): 
        (viewPosition === 2 )?(
         <RetinoTwo 
         leftSelection={retinoLeft} 
         rightSelection={retinoRight} 
         handleNext={handleNextR}
          handlePrev={handlePrevR}/>
        
       ):
       (viewPosition === 3 )?(
        <RetinoThree leftSelection={retinoLeft} rightSelection={retinoRight} handleNext={handleNextR} handlePrev={handlePrevR}/>
       
      ):
      (viewPosition === 4 )?(
       <Retinofour leftSelection={retinoLeft} rightSelection={retinoRight} handleNext={handleNextR} handlePrev={handlePrevR}/>
      
     ):
     (viewPosition === 5 )?(
      <Retinofive leftSelection={retinoLeft} rightSelection={retinoRight} handleNext={handleNextR} handlePrev={handlePrevR}/>
     
    ):
    (viewPosition === 6 )?(
      <MScreen leftSelection={mLeft} rightSelection={mRight} handleNext={handleNextM} handlePrev={handlePrevM}/>
     
    ):
    (viewPosition === 7 )?(
      <DefinitionsPage  handleNext={handleNext} handlePrev={handlePrev}/>
     
    ):
    (viewPosition === 8 )?(
      <Otcn leftSelection={oLeft} rightSelection={oRight} handleNext={handleNextO} handlePrev={handlePrevO}/>
     
    ):
    (viewPosition === 9 )?(
      <OtcB leftSelection={oLeft} rightSelection={oRight} handleNext={handleNextO} handlePrev={handlePrevO}/>
     
    ):
    (viewPosition === 10 )?(
      <OtcP leftSelection={oLeft} rightSelection={oRight} handleNext={handleNextO} handlePrev={handlePrevO}/>
     
    ):
    (viewPosition === 11 )?(
      <FinalGrading handleNext={handleNextGrading} handlePrev={handlePrevGrading} docInfor={docInfor}/>
     
    ):
    (viewPosition === 12 )?(
      <ExampleRM handleNext={handleNext} handlePrev={handlePrev}/>
    ):
    (viewPosition === 13 )?(
      <ExampleRMVNE handleNext={handleNext} handlePrev={handlePrev}/>
    ):
    (viewPosition === 14 )?(
      <ExampleNVD handleNext={handleNext} handlePrev={handlePrev}/>
    ):
    (viewPosition === 15 )?(
      <LastPage handlePrint={handlePrint} handlePrev={handlePrev} handleFormSubmission={handleFormSubmission}/>
    ):(viewPosition===16)?(<Printable HandlePrev={handlePrev} docInfor={docInfor} patientInfor={patientInfor} />):
       <>  </>}
       </>
       
    
    );
 }


export default Dashboard;