import "./Hero.css";
import React from 'react';
import excelLogo from '../../../assets/png/excel_logo.png';
import IEDCLogo from '../../../assets/png/IEDCLogo.png';

export default function Hero() {
	return (
		<>
		<div className='navbar__container'>
			<div className='navbar__main_body'>
				<img className='excel_logo' src={excelLogo} alt='' />
				<p className='and__txt'>&</p>
				<img className='iedc_logo' src={IEDCLogo} alt='' />
			</div>
			<p className='presents__txt'>Present</p>
		</div>
		<div className='main__page_container'>
			<div className='main__text_container'>
				<h1 className='evnt__name_quest1'>Cyber Quest</h1>
				<h1 className='evnt__name_quest2'>CTF Challenge</h1>
				<h2>November 21st to November 23rd</h2>
			</div>
			<button className='reg__btn'>Go to Challenge</button>
		</div>
		</>
	);
}
