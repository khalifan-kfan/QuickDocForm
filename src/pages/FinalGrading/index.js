import React, {  useState,useEffect } from "react";
import "./FinalGrading.css";

function FinalGrading({handleNext,handlePrev}) { 
  const [nameC, setNameC] = useState("")
    const [plan, setPlan] = useState("")
    const [sign,  setSign] =useState("");

    const [RRight,setRRight] = useState("")
    const [RLeft,setRLeft] = useState("")
    const [MRight,setMRight] = useState("")
    const [MLeft,setMLeft] = useState("")
    const [ORight,set0Right] = useState("")
    const [OLeft,setOLeft] = useState("")

//state
useEffect(() => {
 setRRight(localStorage.getItem("RRight"))
 setRLeft(localStorage.getItem("RLeft"))
 setMRight(localStorage.getItem("MRight"))
 setMLeft( localStorage.getItem("MLeft"))
 set0Right( localStorage.getItem("ORight"))
 setOLeft( localStorage.getItem("OLeft"))
});
const HandleNextin =()=>{
 handleNext()
}

const HandlePrevIn =()=>{
  handlePrev()
}

    return (  
        <div  className="dashboard2"> 
        <div className="CommonWid">
        <table className="TabWid">
        <tr>
                <th className="dashead">Final Grading </th>
                <th className="dashead">Right Eye</th>
               <th className="dashead">Left Eye</th>
        </tr>
        <tr>
                <td className="RowHead">Retinopathy (Highest grade per eye)</td>
                <td className="Row">
                 {localStorage.getItem("RRight1") && localStorage.getItem("RRight1")}
                 {localStorage.getItem("RRight2") && localStorage.getItem("RRight2")}
                 {localStorage.getItem("RRight3") && localStorage.getItem("RRight3")}
                 {localStorage.getItem("RRight4") && localStorage.getItem("RRight4")}
                 {localStorage.getItem("RRight5") && localStorage.getItem("RRight5")}
                </td>
                <td className="Row">
                   {localStorage.getItem("RLeft1") && localStorage.getItem("RLeft1")}
                 {localStorage.getItem("RLeft2") && localStorage.getItem("RLeft2")}
                 {localStorage.getItem("RLeft3") && localStorage.getItem("RLeft3")}
                 {localStorage.getItem("RLeft4") && localStorage.getItem("RLeft4")}
                 {localStorage.getItem("RLeft5") && localStorage.getItem("RLeft5")}</td>
           </tr>
           <tr>
                <td className="RowHead2">Maculopathy</td>
                <td className="Row">
                {MRight}
                    </td>
                <td className="Row">   
                {MLeft}
               </td>
              </tr>
              <tr>
                <td className="RowHead3">OCT</td>
                <td className="Row">
                {localStorage.getItem("ORightp") && localStorage.getItem("ORightp")}
                 {localStorage.getItem("ORightn") && localStorage.getItem("ORightn")}
                 {localStorage.getItem("ORightb") && localStorage.getItem("ORightb")}
                </td>
                <td className="Row">
                {localStorage.getItem("OLeftp") && localStorage.getItem("OLeftp")}
                 {localStorage.getItem("OLeftn") && localStorage.getItem("OLeftn")}
                 {localStorage.getItem("OLeftb") && localStorage.getItem("OLeftb")}
                </td>
              </tr>
             
        </table>
        <div className="Lowerfill">
        <div className="FirstEntry">
                <div className="RowHeadw">Management Plan 
                (Either continue annual screening, OCT surveillance 6-12m or Refer)</div>
                <div className="Row2">
                <form>
                    <textarea className="TableInput"
                     name="plan" onChange={e => setPlan(e.target.value)}  type="text" />
                    </form>
                </div>
                
          </div>
              <div className="FirstEntry">
                <div className="RowHeadw">Name of Clinician</div>
                <div className="Row2">
                <form>
                    <textarea className="TableInput"
                     name="nameC" onChange={e => setNameC(e.target.value)} 
                      type="text" />
                    </form>
                </div>
                
              </div>
              <div className="FirstEntry">
                <div className="RowHeadw">Signature</div>
                <div className="Row2">
                <form>
                    <textarea className="TableInput"
                     name="sign" onChange={e => setSign(e.target.value)} 
                      type="text" />
                    </form>
                </div>
                
              </div>
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


 
export default FinalGrading;