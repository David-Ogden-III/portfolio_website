import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import HomeComp from './components/HomeComp';
import AboutComp from './components/AboutComp';
import SkillsComp from './components/SkillsComp';
import ProjectsComp from './components/ProjectsComp';
import SocialComp from './components/SocialComp';

function App() {
	return (
		<BrowserRouter>
			<div
				style={{ backgroundColor: '#F6EEEA' }}
				className='snap-mandatory snap-y scroll-smooth h-screen w-screen overflow-auto'>
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
