import Header from './components/Header';
import HomeComp from './components/HomeComp';
import AboutComp from './components/AboutComp';
import SkillsComp from './components/SkillsComp';
import ProjectsComp from './components/ProjectsComp';
import SocialComp from './components/SocialComp';

const HomePage = () => {
	return (
		<div fluid className='h-screen w-full'>
			<Header />
			<HomeComp />
			<AboutComp />
			<SkillsComp />
			<ProjectsComp />
			<SocialComp />
		</div>
	);
};

export default HomePage;
