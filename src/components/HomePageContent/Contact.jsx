import React from "react";
import Map from "./map";


function Contact(){
    const email = 'instituterv@gmail.com';
    return(
        <div className="card map-card">
            <div className="col" style={{margin:'20px'}}>
            <h1>Contact Us</h1>

            <h6>Email: <a href={`mailto:${email}`}>instituterv@gmail.com</a></h6>

            <h6>Phone No:+91 9205136229 </h6>

            <h6>Address: B-4/68,Sector 11, Rohini, Delhi-85</h6>
        </div>
            <Map/>
        </div>
    )
}

export default Contact