import React, {  useState } from "react";
import "./DefinitionPage.css";

function DefinitionsPage({handleNext,handlePrev}) { 
//state
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
                <th className="dashead">OCT Grading </th>
                <th className="dashead">Criteria</th>
               <th className="dashead">Recomendation</th>
        </tr>
        <tr>
                <td className="RowHead">OCT Positive If present then grade = M1</td>
                <td className="Row">
                <div>Intraretinal cysts and one or more of:</div>
                    <ul>
                        <li> Central Retinal Thickness (CRT) >250μm* </li>
                        <li> A change in the foveal contour with intraretinal cysts </li>
                        <li>Retinal thickening ≥1/2 a disc area, the edge of which is ≤1 DD of the central fovea</li>
                        <li>Retinal thickening ≥1 disc area within the macula</li>
                    </ul>
                    </td>
                <td className="Row"><div>Refer to ophthalmology</div></td>
       </tr>
       <tr>
                <td className="RowHead2">OCT Borderline If present then grade = M1</td>
                <td className="Row">
                
                    <ul>
                        <li> Intraretinal cysts but no change in foveal contour and CRT ≤250μm*</li>
                        <li> Retinal thickening less than 1 disc area within the macula </li>
                       
                    </ul>
                    </td>
                <td className="Row"><div>OCT digital surveillance review in 3 or 6 months (if R1 or R3S)</div></td>
              </tr>
              <tr>
                <td className="RowHead3">OCT Negative</td>
                <td className="Row">
                
                    <ul>
                        <li> None of the above criteria met</li>
                        <li>[and]</li>
                        <li> Normal CRT </li>
                       
                    </ul>
                    </td>
                <td className="Row"><div>Screen Annually (if R1 or R3S)</div></td>
              </tr>
        </table>
        <div className="BottomText">*Normal CRT differs depending on machine used, check reference values for your OCT</div>
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


 
export default DefinitionsPage;