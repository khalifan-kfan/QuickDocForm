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
        <table>
        <tr>
                <th className="dashead">Final Grading </th>
                <th className="dashead">Right Eye</th>
               <th className="dashead">Left Eye</th>
        </tr>
        <tr>
                <td className="RowHead">Retinopathy (Highest grade per eye)</td>
                <td className="Row">
                 {RRight}
                </td>
                <td className="Row"> {RLeft}</td>
       </tr>
       <tr>
                <td className="RowHead2">Maculopathy</td>
                <td className="Row">
                 { MRight}
                    </td>
                <td className="Row">{MLeft}</td>
              </tr>
              <tr>
                <td className="RowHead3">OCT</td>
                <td className="Row">
                  {ORight}
                </td>
                <td className="Row">
                  {OLeft}
                </td>
              </tr>
             
        </table>
        <table>
        <tr>
                <td className="RowHeadw">Management Plan (Either continue annual screening, OCT surveillance 6-12m or Refer)</td>
                <td className="Row2">
                <form>
                    <textarea className="TableInput"
                     name="plan" onChange={e => setPlan(e.target.value)}  type="text" />
                    </form>
                </td>
                
              </tr>
              <tr>
                <td className="RowHeadw">Name of Clinician</td>
                <td className="Row2">
                <form>
                    <textarea className="TableInput"
                     name="nameC" onChange={e => setNameC(e.target.value)} 
                      type="text" />
                    </form>
                </td>
                
              </tr>
              <tr>
                <td className="RowHeadw">Signature</td>
                <td className="Row2">
                <form>
                    <textarea className="TableInput"
                     name="sign" onChange={e => setSign(e.target.value)} 
                      type="text" />
                    </form>
                </td>
                
              </tr>
        </table>
       
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