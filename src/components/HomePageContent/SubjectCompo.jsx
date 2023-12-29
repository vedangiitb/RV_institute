import React from "react";

function SubjectCompo({name,description}){
    var isAllSubject = false
    var classname = "card col-4 col-md-4 subjectCard"
    if (name=="3rd to 8th"){
        isAllSubject=true
    }

    if (isAllSubject){
        classname += " all"
    }
    else{
        classname += " math"
    }
    return(
        <div className={classname}>
            <div className="card-body">
                <h5 className="card-text">{name}</h5>
                <p >{description}</p>
            </div>
        </div>
    )
}

export default SubjectCompo