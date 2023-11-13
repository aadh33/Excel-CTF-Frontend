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
            <div className="prizes_text_container">
                Prizes
            </div>
            <div className="prize_box_container">
                <div className="prize_box_container-row1">
                  <div className="prizes_box_prizes prizes_box_prizes_2_container" data-aos = "zoom-in" >
                     <div className="prize_1-img">
                      <img src={prize1} alt="prize1"/>
                     </div>
                     <div className="prize-1-amount">
                     ₹2500
                     </div>
                  </div>
                </div>
                <div className="prize_box_container-row2">
                  <div className="prizes_box_prizes prizes_box_prizes_1_container" data-aos = "fade-right">
                  <div className="prize_2-img">
                      <img src={prize2} alt="prize2"/>
                     </div>
                     <div className="prize-2-amount">
                     ₹1500
                     </div>
                  </div>
                  <div className="prizes_box_prizes prizes_box_prizes_3_container" data-aos = "fade-left">
                  <div className="prize_3-img">
                      <img src={prize3} alt="prize3"/>
                     </div>
                     <div className="prize-3-amount">
                     ₹1000
                     </div>
                  </div>
                </div>
            </div>
        </div>
    );
}
