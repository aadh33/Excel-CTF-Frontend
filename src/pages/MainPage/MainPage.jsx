import React from 'react';
import './MainPage.css';
import Navbar from '../../components/MainPage/Navbar/Navbar';
import Animation from '../../components/MainPage/Animation/Animation';
import Hero from '../../components/MainPage/Hero/Hero';
import ChallengeFormat from '../../components/MainPage/ChallengeFormat/ChallengeFormat';
import Prizes from '../../components/MainPage/Prizes/Prizes';
import FAQ from '../../components/MainPage/FAQ/FAQ';
import Footer from '../../components/MainPage/Footer/Footer';

const MainPage = () => {
	return (
		<>
			<Navbar />
			<Animation />
			<Hero />
			<ChallengeFormat />
			<Prizes />
			<FAQ />
			<Footer />
		</>
	);
};

export default MainPage;
