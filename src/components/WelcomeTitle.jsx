import React from "react";

const WelcomeTitle = () => {
  return (
    <div
      className="container-fluid vh-100 d-flex 
    justify-content-center align-items-center text-white
    position-relative z-1
    "
    >
      <div className="text-center">
        <div style={{ fontFamily: "Macondo" }}>
          <h3 className="display-5">Aquí están tus Flores Amarillas</h3>
          <h4 className="display-5">Mi Niña💕</h4>
        </div>
        <p className="lead">Follow Me</p>
        <p className="lead">@AmbatoTech</p>
      </div>
    </div>
  );
};

export default WelcomeTitle;
