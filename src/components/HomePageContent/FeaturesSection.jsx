import React from "react";
import WhyComponent from "./InfoCompo";

function Features(){
    return (
        <div>
            <h1 style={{padding:20, textAlign:"center", fontWeight:"bold"}} >Why RV Institute?</h1>
        <div className="features">
            <WhyComponent name="Experienced and Result Oriented Faculty." description = "Expert instructors drive success with proven experience and focused guidance for optimal learning outcomes." align = 'start' />

            <WhyComponent name="Small Group to Give Individual Attention" description = "Personalized learning in small classes ensures individualized attention, fostering student understanding and engagement." align = 'end' />
            
            <WhyComponent name="Regular Test & Providing Feedback Via Mails" description = "Continuous assessment, timely feedback via emails, empowering students to excel with informed guidance." align = 'start' />
            
            <WhyComponent name="Providing Problem Solving Sessions." description = "Targeted problem-solving sessions enhance critical thinking, equipping students to conquer academic challenges confidently." align = 'end' />
        </div>
        </div>
    )
}


export default Features