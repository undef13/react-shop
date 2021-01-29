import React from "react";

import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="error-image-container">
        <img alt="error!" src="https://cdn0.iconfinder.com/data/icons/technology-business-and-people/1000/file_light-43-512.png"></img>
      </div>
      <div>
        <h3>Something went wrong...</h3>
      </div>
    </div>
  );
}

export default ErrorIndicator;