// Hero.js
import "./Hero.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className='main__page_container'>
            <div className='main__text_container'>
                <h1 className='evnt__name_quest'>Cyber Quest</h1>
                <h1 className='evnt__name_quest'>CTF Challenge</h1>
                <h2>November 21st to November 23rd</h2>
            </div>
            {/* Wrap the button with Link to navigate to "/register" */}
            <Link to="/register" className='reg__btn'>
                Register
            </Link>
        </div>
    );
}
