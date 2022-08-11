import React, {useEffect} from "react";

export const Printable =React.forwardRef(({docInfor,patientInfor,HandlePrev}) => { 
    // const [seen, setSeen] = useState(true);
  useEffect(() => {
    window.print()
  });
    return (  
        <>
        <div >
            <div>
              <div>
              <div className="SubHeading"> DR SCREENING</div>
              <div className="SmallHeading">Medical Results</div>
              <span className="formheading">
             Patient name:{patientInfor?.name}</span>

         <div className="">
         <div className="Columns">
         <div className="headingCloumn"> 
          Patient Data
            </div>
        
         <table  className="TableStyle">
         
          <tbody className="bodyStyle" >
            <tr className="bodyStyle">
                <td className="ui headerTable"> Age</td>
                <td className="ui">
                {patientInfor?.age}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Sex</td>
                <td className="ui">
                {patientInfor?.sex}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Visual Acuity</td>
                <td className="ui">
                    <form  className="Insiderow">
                    <span>
                    Left: {patientInfor?.visualAcuityLeft}  
                    Right: {patientInfor?.visualAcuityRight}
                    </span>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> height</td>
                <td className="ui">
                {patientInfor?.height}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Weight</td>
                <td className="ui">
                {patientInfor?.weight}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Smoker Status</td>
                <td className="ui">
                {patientInfor?.smokerStatus}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabetes type</td>
                <td className="ui">
                {patientInfor?.diabatesType}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabates Diagnosis Date</td>
                <td  className="ui">
                {patientInfor?.diabatesCheckDate}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabates Medication</td>
                <td className="ui">
                {patientInfor?.daibatesMedication}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Hypertensive?</td>
                <td className="ui">
                {patientInfor?.Hypertensive}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Cardiovascular Disease? </td>
                <td className="ui">
                {patientInfor?.CardiovascularDisease}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> OTC Signal Strength</td>
                <td className="ui">
                <form  className="Insiderow">
                    <span>
                    Left: 
                    {patientInfor?.OTCSleft} 
                    Right: {patientInfor?.OTCSright}
                    </span>
                    </form>
                </td>
            </tr>
          </tbody>
          </table>
          </ div>
          <div className="Columns">
          <div className="headingCloumn2"> 
          Blood Pressure and Biochemistry
            </div>
          <table  className="TableStyle">
          <tbody className="bodyStyle" >
            <tr>
                <td className="ui headerTable"> Systolic Blood Pressure</td>
                <td className="ui">
                {patientInfor?.SBP}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diastolic Blood Pressure</td>
                <td className="ui">
                {patientInfor?.DBP}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Random Blood Glucose</td>
                <td className="ui">
                {patientInfor?.RBG}
                </td>
            </tr>   
            <tr>
                <td className="ui headerTable"> HbA1C</td>
                <td className="ui">
                {patientInfor?.HbA1C}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Total Cholestrol </td>
                <td className="ui">
                {patientInfor?.Cholestrol}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> LDL</td>
                <td className="ui">
                {patientInfor?.LDL}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable">HDL</td>
                <td className="ui">
                {patientInfor?.HDL}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Triglycerides</td>
                <td className="ui">
                {patientInfor?.Triglycerides}
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Albuminuria? </td>
                <td className="ui">
                {patientInfor?.Albuminuria}
                </td>
            </tr>        
          </tbody>
          </table>
          </div>
          </div>
          </div>
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
                {localStorage.getItem("MRight") && localStorage.getItem("MRight")}
                    </td>
                <td className="Row">   
                {localStorage.getItem("MLeft") && localStorage.getItem("MLeft")}
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
          <div className="Lowerfill"  >
        <div className="FirstEntry">
                <div className="RowHeadw">Management Plan 
                (Either continue annual screening, OCT surveillance 6-12m or Refer)</div>
                <div className="Row2">
                {docInfor?.Medicalplan}
                </div>
                
          </div>
              <div className="FirstEntry">
                <div className="RowHeadw">Name of Clinician</div>
                <div className="Row2">
                {docInfor?.name}
                </div>
                
              </div>
              <div className="FirstEntry">
                <div className="RowHeadw">Signature</div>
                <div className="Row2">
                {docInfor?.sign}
                </div>
                
               </div>
            
          </div>
        </div>
       
      
       </div>
      {/* {seen && <div className="ButtonSection">
       
        <button
            onClick={()=>{HandlePrev()}}
            >Back</button>
            <button
            onClick={()=>{
                setSeen(false)
                window.print()

            }}
            > confirm and Print</button>
           
          </div>} */}
       </>
    
    );
 });


