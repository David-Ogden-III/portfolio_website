import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import HomeComp from './components/HomeComp';
import AboutComp from './components/AboutComp';
import SkillsComp from './components/SkillsComp';
import ProjectsComp from './components/ProjectsComp';
import SocialComp from './components/SocialComp';
import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from 'react';

function App() {
	const scrollRef = useRef(null);
	useScrollSnap({ ref: scrollRef, duration: 250, delay: 50 });

	return (
		<BrowserRouter>
			<div
				className='snap-mandatory snap-y scroll-smooth h-screen overflow-auto'
				ref={scrollRef}>
				<Header />
				<HomeComp />
				<AboutComp />
				<SkillsComp />
				<ProjectsComp />
				<SocialComp />
			</div>
		</BrowserRouter>
	);
}

export default App;
