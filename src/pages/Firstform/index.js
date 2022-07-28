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
function Firstform({callBack}) { 
    // state zero
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [sex, setSex] = useState("")
    const [visualAcuityL, setvisualAcuityL] = useState("")
    const [visualAcuityR, setvisualAcuityR] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [smoker, setSmoker] = useState("")
    const [diaType, setdiaType] = useState("")
    const [diaDate, setDiaDate] = useState("")
    const [daiMed,setDiaMed] = useState("");
    const [Hypertensive, setHypertensiveL] = useState("")
    const[Cardiovascular ,setCardiovascular] = useState("")
    const[OTCSleft,setOTCleft] = useState("")
    const [OTCSright, setOTCSright] = useState("")
    const [SBP, setSBP] = useState("")
    const [DBP, setDBP] = useState("")
    const [RBG, setRBG] = useState("")
    const [HbA1C, setHbA1C] = useState("")
    const [Cholestrol, setCholestrol] = useState("")
    const [LDL, setLDL] = useState("")
    const [HDL, setHDL] = useState("")
    const [Triglycerides, setTriglycerides] = useState("")
    const [Albuminuria,setAlbuminuria] = useState("")

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
            LDL,HDL,Triglycerides,Albuminuria 
        }
        //console.log(data)
        if(name !=="" && age  !=="" && sex !==""&& visualAcuityL  !==""&&
        visualAcuityR  !=="" && height  !=="" && weight !=="" && smoker  !==""
        &&diaType  !==""&& diaDate !==""&&daiMed !==""&& Hypertensive !==""&&
        Cardiovascular !==""&& OTCSleft !==""&&OTCSright !==""&&
        SBP!==""&& DBP !=="" && RBG  !=="" && HbA1C !=="" && Cholestrol !==""
        && LDL !=="" && HDL !=="" && Triglycerides  !==""&&Albuminuria !=="" 
        ){
            if(age>120){
                alert("Fill proper age") 
                return
            }else{
            callBack(data)
            }
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
          <span className="formheading"> Patient name: <textarea  onChange={e => setName(e.target.value)} className="Input" type="text" placeholder="Name"/></span>
         <div className="TableForm">
         <div className="Columns">
         <div className="headingCloumn"> 
          Patient Data
            </div>
        
         <table  className="TableStyle">
         
          <tbody className="bodyStyle" >
            <tr className="bodyStyle">
                <td className="ui headerTable"> Age</td>
                <td>
                    <form>
                    <textarea  onChange={e => setAge(e.target.value)} className="TableInput"  type="number" name="age" placeholder="20" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Sex</td>
                <td>
                    <form>
                    <select id="sex"  onChange={e => setSex(e.target.value)}>
    <option value="male"  >male</option>
    <option value="femmale" >female</option>
</select>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Visual Acuity</td>
                <td>
                    <form  className="Insiderow">
                    <span>
                    Left: <textarea className="TableInputIn" onChange={e => setvisualAcuityL(e.target.value)}  name="VAleft"  type="text"  />
                    Right: <textarea className="TableInputIn" onChange={e => setvisualAcuityR(e.target.value)} name="VAright"  type="text"  />
                    </span>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> height</td>
                <td>
                    <form>
                    <textarea className="TableInput" name="height" onChange={e => setHeight(e.target.value)}  type="number" placeholder="20" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Weight</td>
                <td>
                    <form>
                    <textarea className="TableInput"  onChange={e => setWeight(e.target.value)} name="weigth" type="text" placeholder="60" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Smoker Status</td>
                <td>
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
                <td>
                    <form>
                    <textarea className="TableInput" onChange={e => setdiaType(e.target.value)} name="daiType"  type="text"  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabates Diagnosis Date</td>
                <td>
                    <form>
                    <input className="TableInput" onChange={e => setDiaDate(e.target.value)}  name="daiDate" type="date" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diabates Medication</td>
                <td>
                    <form>
                    <textarea className="TableInput" onChange={e => setDiaMed(e.target.value)} name="daiMed"  type="text" placeholder="any" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Hypertensive?</td>
                <td>
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
                <td>
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
                <td>
                <form  className="Insiderow">
                    <span>
                    Left: <textarea className="TableInputIn"  onChange={e => setOTCleft(e.target.value)} name="OTCSleft"  type="text" placeholder="20" />
                    Right: <textarea className="TableInputIn"  name="OTCSright" onChange={e => setOTCSright(e.target.value)} type="text" placeholder="20" />
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
                <td>
                    <form>
                    <textarea className="TableInput" onChange={e => setSBP(e.target.value)} type="text" name="Sbp"  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Diastolic Blood Pressure</td>
                <td>
                    <form>
                    <textarea  className="TableInput" onChange={e => setDBP(e.target.value)} type="text" name="DBP" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Random Blood Glucose</td>
                <td>
                    <form>
                    <textarea className="TableInput" onChange={e => setRBG(e.target.value)} type="text" name="RBG"  />
                    </form>
                </td>
            </tr>   
            <tr>
                <td className="ui headerTable"> HbA1C</td>
                <td>
                    <form>
                    <textarea className="TableInput" onChange={e => setHbA1C(e.target.value)} name="HbA1C"  type="text"  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Total Cholestrol </td>
                <td>
                    <form>
                    <textarea className="TableInput"   onChange={e => setCholestrol(e.target.value)}name="cholestrol" type="text"  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> LDL</td>
                <td>
                    <form>
                    <textarea className="TableInput" onChange={e => setLDL(e.target.value)} type="text" name="LDL"/>
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable">HDL</td>
                <td>
                    <form>
                    <textarea className="TableInput"  onChange={e => setHDL(e.target.value)}name="HDL"  type="text"  />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Triglycerides</td>
                <td>
                    <form>
                    <textarea className="TableInput"  onChange={e => setTriglycerides(e.target.value)} name="Triglycerides" />
                    </form>
                </td>
            </tr>
            <tr>
                <td className="ui headerTable"> Albuminuria? </td>
                <td>
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
         </div>
      );
    }


 
export default Firstform;