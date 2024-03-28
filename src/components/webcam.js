import React, { useState } from 'react';
import Webcam from 'react-webcam'; 
import '../App.css'

const WebcamCom = () => {
  // Reference to the webcam component
  const webcamRef = React.useRef(null);
  return (
    <div className="container mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Webcam Task</h1>
              <div className="text-center mb-3">
                <Webcam audio={false} ref={webcamRef} />
              </div>
            </div>
      </div>
    </div>
  );
};

export default WebcamCom;