import React, { useState, useEffect } from 'react';
import image from '../assest/p.png';


const Spinner = () => {
    const [spin, setSpin] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [congrate, setCongrate] = useState(false);

    const user = ["user1", "user2", "user3", "user4", "user5", "user6"];

    const startSpinning = () => {
        setSpin(true);

        // Stop spinning after 3 seconds
        setTimeout(() => {
            setSpin(false);
            setCongrate(true); // Show congratulation message
        }, 3000);
    };

    useEffect(() => {
        let interval;

        if (spin) {
            interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * user.length);
                setSelectedUser(user[randomIndex]);
            }, 100); // Adjust the interval as needed
        }

        return () => clearInterval(interval);
    }, [spin, user]);

    return (
        <>
            <div className="relative">
                <div className="absolute top-56 right-1/3 text-center w-25">
                    <div className="bg-gray-800 p-4 rounded text-white shadow-lg">{selectedUser}</div>
                </div>
                <div className="">
                    <img className={`spinner ${spin ? 'spin-animation' : ''} absolute  right-3 top-40`} src={image} alt="Spinner" />
                </div>
            </div>
            <button type="button" onClick={startSpinning} className="absolute bottom-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 mt-4">Spin</button>
     </>
    );
};

export default Spinner;
