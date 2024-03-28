import React, { useState, useEffect } from 'react';
import image from '../assets/wheelImage.png'
import '../App.css'; // Assuming you have a CSS file for styling
import Congrate from './congratulations';

const Spinner = () => {
  const [spin, setSpin] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [congrate,setCongrate] = useState(false)


  const user = ["user1", "user2", "user3", "user4", "user5", "user6"];

  const spining = () => {
    // Start spinning after component mounts
    setSpin(true);

    // Stop spinning after 5 seconds
    const timer = setTimeout(() => {
      setSpin(false);
      setCongrate(true)
    }, 3000);
    
    return () => clearTimeout(timer); // Clear the timer on component unmount
  };
  let interval
  useEffect(() => {
    if (spin) {
      interval = setInterval(() => {
        // Randomly select a user from the users array
        const randomIndex = Math.floor(Math.random() * user.length);
        setSelectedUser(user[randomIndex]);
        setCongrate(false)
      }, 100); // Adjust the interval as needed
    }
    return () => clearInterval(interval);
  }, [spin, user,congrate]);


  return (
    <div className='mt-5'>
    {congrate&&<Congrate/>}
      <div className='flex flex-end'>
    
          <div
            className="text-white bg-gradient-to-r from-cyan-800 via-cyan-500 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 border-cyan-900 focus:ring-cyan-300 ml-3 shadow-black-600 dark:focus:ring-cyan-800 rounded-3xl font-medium text-sm px-5 py-2.5 text-center h-24 p-5 content-center"
            style={{ border: "10px solid #148181", width:"40%", position:"absolute", top:"34%", right:"4%",left:"9%"}} // Add inline style for border
          >
            {selectedUser}

        </div>
        <img className={`spinner ${spin ? 'spin-animation' : ''}`} src={image} alt="Spinner"  style={{position:"relative", left:"45%" ,top:"7%"}}/>
        
      </div>
      <div>
        <button type="button" onClick={spining} class="text-white bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-800 hover:bg-gradient-to-br focus:ring-4 border-green-300 focus:ring-cyan-300 p-3 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center content-center ml-3">spin</button>
      </div>
    </div>

  );
};

export default Spinner;


body{
  background: linear-gradient(300deg,rgb(12, 64, 82),rgb(154, 187, 218),rgb(13, 13, 36));
  background-size: 180% 180%;
  animation: gradient-animation 7s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.spin-animation {
  animation: spin 4s linear infinite; /* Adjust the duration to make it spin slower or faster */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(180deg); /* Spin slowly for the first part */
  }
  30% {
    transform: rotate(1000deg); /* Spin quickly for the middle part */
  }
  40% {
    transform: rotate(1800deg); /* Spin slowly for the last part */
  }
  100% {
    transform: rotate(2160deg); /* Complete rotation */
  }
}
