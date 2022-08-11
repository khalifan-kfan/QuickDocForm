import React, {  useState } from "react";
import "./Firstform.css";
// import MyImage from '../../assests/Images/LogoICEID.png';


const getDate =()=>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;
  return today
}
function Firstform({callBack, patientInfor}) { 
    // state zero
    const [name, setName] = useState(patientInfor?.name ? patientInfor?.name :"" )
    const [age, setAge] = useState(patientInfor?.age ? patientInfor?.age :"")
    const [sex, setSex] = useState(patientInfor?.sex ? patientInfor?.sex :"")
    const [visualAcuityL, setvisualAcuityL] = useState(patientInfor?.visualAcuityLeft ? patientInfor?.visualAcuityLeft :"")
    const [visualAcuityR, setvisualAcuityR] = useState(patientInfor?.visualAcuityRight ? patientInfor?.visualAcuityRight :"")
    const [height, setHeight] = useState(patientInfor?.height ? patientInfor?.height :"")
    const [weight, setWeight] = useState(patientInfor?.weight ? patientInfor?.weight :"")
    const [smoker, setSmoker] = useState(patientInfor?.smokerStatus ? patientInfor?.smokerStatus :"")
    const [diaType, setdiaType] = useState(patientInfor?.diabatesType ? patientInfor?.diabatesType :"")
    const [diaDate, setDiaDate] = useState(patientInfor?.diabatesCheckDate ? patientInfor?.diabatesCheckDate :"")
    const [daiMed,setDiaMed] = useState(patientInfor?.daibatesMedication ? patientInfor?.daibatesMedication :"");
    const [Hypertensive, setHypertensiveL] = useState(patientInfor?.Hypertensive ? patientInfor?.Hypertensive :"")
    const[Cardiovascular ,setCardiovascular] = useState(patientInfor?.CardiovascularDisease ? patientInfor?.CardiovascularDisease :"")
    const[OTCSleft,setOTCleft] = useState(patientInfor?.OTCSleft ? patientInfor?.OTCSleft :"")
    const [OTCSright, setOTCSright] = useState(patientInfor?.OTCSright ? patientInfor?.OTCSright :"")
    const [SBP, setSBP] = useState(patientInfor?.SBP ? patientInfor?.SBP :"")
    const [DBP, setDBP] = useState(patientInfor?.DBP ? patientInfor?.DBP :"")
    const [RBG, setRBG] = useState(patientInfor?.RBG ? patientInfor?.RBG :"")
    const [HbA1C, setHbA1C] = useState(patientInfor?.HbA1C ? patientInfor?.HbA1C :"")
    const [Cholestrol, setCholestrol] = useState(patientInfor?.Cholestrol ? patientInfor?.Cholestrol :"")
    const [LDL, setLDL] = useState(patientInfor?.LDL ? patientInfor?.LDL :"")
    const [HDL, setHDL] = useState(patientInfor?.HDL ? patientInfor?.HDL :"")
    const [Triglycerides, setTriglycerides] = useState(patientInfor?.Triglycerides ? patientInfor?.Triglycerides :"")
    const [Albuminuria,setAlbuminuria] = useState(patientInfor?.Albuminuria ? patientInfor?.Albuminuria :"")
    const [consent, setConsent] = useState(patientInfor?.consent ? patientInfor?.consent:false )
    const [noconsent, setnoConsent] = useState(false)

    const handleNext =()=>{
        //all fields should be filled
        const data ={
            name,
            age,
            sex,
            visualAcuityLeft:visualAcuityL,
            visualAcuityRight: visualAcuityR,
            height,
            weight,
            smokerStatus:smoker,
            diabatesType:diaType,
            diabatesCheckDate:diaDate,
            daibatesMedication:daiMed,
            Hypertensive,
            CardiovascularDisease:Cardiovascular,
            OTCSleft,
            OTCSright,
            SBP,
            DBP,RBG,HbA1C,Cholestrol,
            LDL,HDL,Triglycerides,Albuminuria ,consent
        }
        //console.log(data)
        if(name !=="" && age  !=="" ){
            if(age>120){
                alert("Fill proper age") 
                return
            }
            if(SBP>300){
                alert("Fill proper blood pressure") 
                return
            }

            callBack(data)
            
        }else{
            alert("fill all fields please")
        }


    }



    return (
        <div className="dashboard">     
         <div className="HeaderSection">

            <div className="LeftHeader">
            <div  >
            <img  className="ImageHeader" src={require('../../assests/Images/LogoICEID.png')} alt="IASON" />
            </div>
             </div>
             <div className="RightHeader">
            {getDate()}
            <img  className="QRImageHeader" src={require('../../assests/Images/qrcode2.png')} alt="QR" />
             </div>
          </div>
          <div className="SubHeading"> DR SCREENING</div>
          <div className="SmallHeading"> Medical History Data</div>
          <div className="Concent">
            
            <div className="ConcentHead">Consent</div>
            <div className="ConcentText">I consent to the use of my anonymised data for research
                 and audit purposes, including the publication of 
                aggregate results and sharing of anonymised data with other researchers</div>
            <div className="ConcentBox">
                Yes
                <div>
                <input type="checkbox"
                 value="diabeticRetinopathy" 
                checked={noconsent? false: consent} 
                className="CheckBox" id="1" 
                onChange={()=>{setConsent(!consent)
                    setnoConsent(false)
                }}
                  />  
                  </div>
                  </div>
                  <div className="ConcentBox">
                No
                <div>
                <input type="checkbox"
                 value="diabeticRetinopathy" 
                checked={consent? false: noconsent} 
                className="CheckBox" id="2" 
                onChange={()=>{setConsent(false)
                setnoConsent(!noconsent)
                }}
                  />  
                  </div>
                  </div>
          </div>
          <span className="formheading">
             Patient name: <input  onChange={e => setName(e.target.value)} 
             className="Input" 
             value={name}
             type="text" 
             placeholder="Name"/></span>
         <div className="TableForm">
         <div className="Columns">
         <div className="headingCloumn"> 
          Patient Data
            </div>
        
         <table  className="TableStyle">
         
          <tbody className="bodyStyle" >
            <tr className="bodyStyle">
                <td className="ui headerTable"> Age</td>
                <td className="ui">
                    <form>
                    <input  
                    onChange={e =>{ 
                        if(e.target.value<120){
                        setAge(e.target.value)
                        }else{
                            alert("Invalid age")
                            setAge(0)
                        }
                        }
                    }
                     className="TableInput"  
                     type="number"
                     value={age}
                     name="age"
                      placeholder={"1-120"}
                      />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Sex</td>
                <td className="ui">
                    <form>
                    <select  className="Select" id="sex"  onChange={e => setSex(e.target.value)}>
    <option value="male"  >male</option>
    <option value="femmale" >female</option>
</select>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Visual Acuity</td>
                <td className="ui">
                    <form  className="Insiderow">
                    <span>
                    Left: <input className="TableInputIn" 
                     onChange={e => setvisualAcuityL(e.target.value)}  
                     name="VAleft"  type="text"  />
                    Right: <input className="TableInputIn" 
                    onChange={e => setvisualAcuityR(e.target.value)}
                     name="VAright"  type="text"  />
                    </span>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> height</td>
                <td className="ui">
                    <form>
                    <input className="TableInput" name="height" onChange={e => setHeight(e.target.value)} 
                     type="number"  placeholder="number" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Weight</td>
                <td className="ui">
                    <form>
                    <input className="TableInput"  onChange={e => setWeight(e.target.value)} name="weigth" type="number"
                     placeholder="number" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Smoker Status</td>
                <td className="ui">
                    <form>
                    <select id="smoker" onChange={e => setSmoker(e.target.value)} >
    <option value="currents">current smoker </option>
    <option value="ex_smoker">ex-smoker</option>
    <option value="non-smoker">non-smoker</option>
</select>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabetes type</td>
                <td className="ui">
                    <form>
                    <input className="TableInput" onChange={e => setdiaType(e.target.value)} name="daiType"  type="text"  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabates Diagnosis Date</td>
                <td  className="ui">
                    <form>
                    <input className="TableInput" onChange={e => setDiaDate(e.target.value)}  name="daiDate" type="date" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabates Medication</td>
                <td className="ui">
                    <form>
                    <input className="TableInput" onChange={e => setDiaMed(e.target.value)} name="daiMed"  type="text" placeholder="any" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Hypertensive?</td>
                <td className="ui">
                    <form>
                    <div onChange={e => setHypertensiveL(e.target.value)}>
                      <input type="radio" value="yes" name="Hypertensive"/> Yes
                    <input type="radio" value="no" name="Hypertensive"/> No
                </div>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Cardiovascular Disease? </td>
                <td className="ui">
                    <form>
                    <div onChange={e => setCardiovascular(e.target.value)}>
                      <input type="radio" value="yea" name="Cardiovascular"/> Yes
                    <input type="radio" value="no" name="Cardiovascular"/> No
                </div>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> OTC Signal Strength</td>
                <td className="ui">
                <form  className="Insiderow">
                    <span>
                    Left: <input className="TableInputIn"  onChange={e => setOTCleft(e.target.value)} name="OTCSleft"  type="text" placeholder="20" />
                    Right: <input className="TableInputIn"  name="OTCSright" onChange={e => setOTCSright(e.target.value)} type="text" placeholder="20" />
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
                    <form>
                    <input className="TableInput" onChange={e =>{ 
                        if(e.target.value < 301 && e.target.value > -1){
                        setSBP(e.target.value)
                        }else{
                            alert("Invalid blood pressure")
                            setSBP(0)
                        }
                        }
                    } type="number"
                    value={SBP}
                    name="Sbp" 
                    placeholder={"1-300"}  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diastolic Blood Pressure</td>
                <td className="ui">
                    <form>
                    <input  className="TableInput" onChange={e => setDBP(e.target.value)} type="number" placeholder={"number"} name="DBP" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Random Blood Glucose</td>
                <td className="ui">
                    <form>
                    <input className="TableInput" onChange={e => setRBG(e.target.value)} type="number"
                     placeholder={"number"} name="RBG"  />
                    </form>
                </td>
            </tr>   
            <tr>
                <td className="ui headerTable"> HbA1C</td>
                <td className="ui">
                    <form>
                    <input className="TableInput" onChange={e => setHbA1C(e.target.value)} name="HbA1C"  type="number" placeholder={"number"}  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Total Cholestrol </td>
                <td className="ui">
                    <form>
                    <input className="TableInput"   onChange={e => setCholestrol(e.target.value)}name="cholestrol" type="number" placeholder={"number"}  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> LDL</td>
                <td className="ui">
                    <form>
                    <input className="TableInput" onChange={e => setLDL(e.target.value)}  type="number" placeholder={"number"} name="LDL"/>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable">HDL</td>
                <td className="ui">
                    <form>
                    <input className="TableInput"  onChange={e => setHDL(e.target.value)}name="HDL"   type="number" placeholder={"number"}  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Triglycerides</td>
                <td className="ui">
                    <form>
                    <input className="TableInput"  type="number" placeholder={"number"} onChange={e => setTriglycerides(e.target.value)} name="Triglycerides" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Albuminuria? </td>
                <td className="ui">
                    <form>
                    <div onChange={e => setAlbuminuria(e.target.value)}>
                      <input type="radio" value="yea" name="Albuminuria"/> Yes
                    <input type="radio" value="no" name="Albuminuria"/> No
                </div>
                    </form>
                </td>
            </tr>        
          </tbody>
          </table>
          </div>
          </div>
          <div className="ButtonSection">
            <button
            onClick={()=>{handleNext()}}
            >Next</button>
          </div>
          <div  >
            <img  className="ImageHeadereye" src={require('../../assests/Images/eyeicon.png')} alt="IASON" />
            </div>
         </div>
      );
    }


 
export default Firstform;