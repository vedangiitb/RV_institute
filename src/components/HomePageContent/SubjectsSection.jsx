import React from "react";
import SubjectCompo from "./SubjectCompo";
import OlympiadCompo from "./OlympiadCompo";

function SubjectsSection(){
    return (
        <div>
            <h1 style={{padding:20, textAlign:"center", fontWeight:"bold"}}>Subjects Offered</h1>
        <div className="row subjects justify-content-end">
            <SubjectCompo name="3rd to 8th" description="All Subjects"/>
            <SubjectCompo name="9th and 10th" description="Maths & Science"/>
        </div>
        <OlympiadCompo/>
        </div>
    )
}

export default SubjectsSection