import React, { useState, useEffect } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const end = new Date(now.getFullYear(), 10, 21); // Month is 0-indexed (10 = November)
            const distance = end - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in the countdown timer
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            // If the countdown is over, clear the interval
            if (distance < 0) {
                clearInterval(interval);
                setCountdown("Challenge has started!");
            }
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="register-container">
            <h4>Coming Soon</h4>
            <div className="reg-container">
                <p>Cyber Quest</p>
                <p className="first-page">Challenge starts on 21st November</p>
                <p>Register now to be notified before challenge starts</p>
                <div className="reg-button">Register Now!</div>
                <div className="countdown">Starts in: {countdown}</div>
            </div>
        </div>
    );
};

export default RegisterPage;


// import React from "react";
// import "./RegisterPage.css";
// const RegisterPage = () => {
//     return (
//         <div className="register-container">
//           <h4> Coming Soon</h4>
//           <div className="reg-container">
//           <p>Cyber Quest</p>
//           <p>Challenge starts on 21st November</p>
//           <p>Register now to be notified before challenge starts</p>
//           <div className="reg-button">Register Now!</div>
//           <div className="countdown">Starts in :
//            </div>
//           </div>
//         </div>

//     );
 
// };
  
//   export default RegisterPage;