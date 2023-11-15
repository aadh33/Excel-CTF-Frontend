import "./Prizes.css";
import prize1 from '../../../assets/png/prize1.jpeg'
import prize2 from '../../../assets/png/prize2.jpeg'
import prize3 from '../../../assets/png/prize3.jpeg'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function Prizes() {
    useEffect(() => {
        AOS.init({ duration: "2000"});
    }, []);
	return (
        <div className='prizes__container'>
			<h2 className='prizes_text_container'>Prizes</h2>
                <div className='prize_box_container prize_1'>
                    <div className='prizes' data-aos = "zoom-in" >
                    <div className="prize_img">
                        <img src={prize1} alt="prize1"/>
                    </div>
                    <div className="prize-amount">
                        ₹2500
                    </div>
                    </div>
                </div>
                <div className='prize_box_container'>
                    <div className='prizes' data-aos = "fade-right"  >
                    <div className="prize_img">
                        <img src={prize2} alt="prize2"/>
                    </div>
                    <div className="prize-amount">
                        ₹1500
                    </div>
                    </div>
                    <div className='prizes' data-aos = "fade-left">
                        <div className="prize_img">
                        <img src={prize3} alt="prize3"/>
                        </div>
                        <div className="prize-amount">
                            ₹1000
                        </div>
                    </div>
                </div>
            </div>
    );
    }