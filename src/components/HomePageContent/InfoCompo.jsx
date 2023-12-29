import React from "react";


function WhyComponent({name, description,align}) {
    const alignString = "row justify-content-" + align
    return (
        <div className={alignString}>
        <div className="card col-md-8 why-compo-card">
            <div className="card-body">
                <h5 className="card-text">{name}</h5>
                <p>{description}</p>
            </div>
        </div>
        </div>  
    );
}


export default WhyComponent