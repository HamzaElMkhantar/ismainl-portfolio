import React from 'react'

function About() {
  return (
    <div className='container' style={{width:'100%', height:'60dvh'}}>
        <div className="pt-5" style={{ textAlign: "start", paddingBottom: "" }}>
          <h4
            className="mb-4 pt-5"
            style={{
              fontSize: "35px",
              fontWeight: "300",
              color: "#424242",
              fontStretch: "expanded",
              letterSpacing: "4px",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            ABOUT
          </h4>
          <p
            className="mb-4"
            style={{
              fontSize: "20px",
              fontWeight: "130",
              color: "#424242",
              fontStretch: "expanded",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            
            Smail Jaddi aka Jhsmail
            b.2000
            Based in SALE, MOROCCO.{" "}
          </p>
        </div>
    </div>
  )
}

export default About
