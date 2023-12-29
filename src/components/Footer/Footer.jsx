import React from "react";

function Footer(){
    const emailAddress = 'pragnyajain07@gmail.com';
    
    return (
        <footer className="bg-dark text-light p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h5>Contact Us</h5>
                <p>Email: <a href={`mailto:${emailAddress}`}>pragnyajain07@gmail.com</a></p>
                <p>Phone: +91 9205136229</p>
              </div>
              <div className="col-md-2">
                <h5>Follow Us On</h5>
                <div className="row" style={{justifyContent:"center"}}>
                  <div className="col" style={{marginBottom: '3%' }}>
                    <a href="https://www.facebook.com/instituterv" target="_blank">
                      <img src="fb_logo.png" style={{ width: '33px', height: '33px' }} alt="Facebook Logo" />
                    </a>
                  </div>
                  <div className="col" style={{marginBottom: '3%' }}>
                    <a href="https://www.instagram.com/r.v.institute" target="_blank">
                      <img src="insta_logo.jpeg" style={{ width: '29px', height: '29px' }} alt="Instagram Logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2023 RV Institute. All rights reserved.</p>
          </div>
        </footer>
      );
} 

export default Footer;
