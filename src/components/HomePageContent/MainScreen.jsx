import React from "react";
import { Link as ScrollLink } from 'react-scroll';

function StartScreen(){
    return (
        <div>
        <div className="start-content">
        <section>
            <h1 className="start-content-text">R.V. Institute</h1>
            <h3 className="start-content-subtext">Linking Students and tutors for academic's session</h3>
            <p class="know-more-button"><ScrollLink to="navigate-features" spy={true} smooth={true} duration={500}   className="nav-link" activeclassname="active">
                Know More
              </ScrollLink></p>
        </section>
        </div>

        </div>
      )
}

export default StartScreen