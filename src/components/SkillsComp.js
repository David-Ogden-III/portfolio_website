import { useState } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faReact,
	faBootstrap,
	faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
	faAngleUp,
	faAngleDown,
	faUsers,
	faArrowRightArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import reduxLogo from '../images/redux-logo-svgrepo-com.svg';
import mongoLogo from '../images/MongoDB_Logomark_ForestGreen.svg';
import firebaseLogo from '../images/firebaseLogo.svg';
import jsLogo from '../images/javascript-1.svg';
import html5Logo from '../images/html-1.svg';
import css3Logo from '../images/css-3.svg';
import {
	faLightbulb,
	faComments,
	faClock,
} from '@fortawesome/free-regular-svg-icons';

const SkillsComp = () => {
	const [skills, setSkills] = useState(true);

	return (
		<div
			id='skills'
			className='snap-center w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20'>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-start pt-2 opacity-50'>
				<HashLink smooth to='#about'>
					<FontAwesomeIcon icon={faAngleUp} size='xl' className='text-black' />
				</HashLink>
			</div>
			<div className='h-2/3 flex justify-center items-center flex-col w-full'>
				<div className='font-ubuntu400 flex flex-row items-center justify-evenly w-48 sm:w-60 md:w-66 lg:w-75 xl:w-84'>
					{skills ? (
						<>
							<Button className='mr-2 w-1/2' color='dark' disabled>
								Technical
								<br />
								Skills
							</Button>
							<Button
								className='ml-2 w-1/2'
								color='dark'
								onClick={() => setSkills(false)}>
								Soft
								<br />
								Skills
							</Button>
						</>
					) : (
						<>
							<Button
								className='mr-2 w-1/2'
								color='dark'
								onClick={() => setSkills(true)}>
								Technical
								<br />
								Skills
							</Button>
							<Button color='dark' className='ml-2 w-1/2' disabled>
								Soft
								<br />
								Skills
							</Button>
						</>
					)}
				</div>
				<div className='flex flex-col my-4 items-center justify-center'>
					{skills ? (
						<>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex items-center justify-center text-[#e34c26] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<img
										src={html5Logo}
										className='w-full h-full'
										alt='HTML 5 Logo'
									/>
								</div>
								<div className='flex items-center justify-center text-[#264de4] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<img
										src={css3Logo}
										className='w-full h-full'
										alt='CSS 3 Logo'
									/>
								</div>
								<div className='flex items-center justify-center text-[#f0db4f] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<img
										src={jsLogo}
										alt='JavaScript Logo'
										className='w-full h-full'
									/>
								</div>
							</div>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex items-center justify-center text-[#6f42c1] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon
										icon={faBootstrap}
										className='w-full h-full'
									/>
								</div>
								<div className='flex items-center justify-center text-[#61DBFB] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon icon={faReact} className='w-full h-full' />
								</div>
								<div className='flex items-center justify-center text-[#68a063] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon icon={faNodeJs} className='w-full h-full' />
								</div>
							</div>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex items-center justify-center text-[#6f42c1] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<img
										src={firebaseLogo}
										alt='Firebase Logo'
										className='h-full w-full'
									/>
								</div>
								<div className='flex items-center justify-center text-[#61DBFB] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<img
										src={mongoLogo}
										alt='MongoDB Logo'
										className='h-full w-full'
									/>
								</div>
								<div className='flex items-center justify-center text-[#68a063] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<img
										src={reduxLogo}
										alt='Redux Logo'
										className='h-full w-full'
									/>
								</div>
							</div>
						</>
					) : (
						<>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex flex-col items-center justify-end w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon icon={faUsers} className='w-full h-5/6' />
									<p className='text-xs sm:text-sm text-center xl:text-md w-full h-1/6 font-ubuntu400 m-0'>
										Team Oriented
									</p>
								</div>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon
										icon={faArrowRightArrowLeft}
										className='w-full h-5/6'
									/>
									<p className='text-xs sm:text-sm text-center xl:text-md w-full h-1/6 font-ubuntu400 m-0'>
										Adaptability
									</p>
								</div>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon icon={faComments} className='w-full h-5/6' />
									<p className='text-xs sm:text-sm text-center xl:text-md w-full h-1/6 font-ubuntu400 m-0'>
										Communication
									</p>
								</div>
							</div>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon
										icon={faLightbulb}
										className='w-full h-5/6'
									/>
									<p className='text-xs sm:text-sm text-center xl:text-md w-full h-1/6 font-ubuntu400 m-0'>
										Problem Solving
									</p>
								</div>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon icon={faClock} className='w-full h-5/6' />
									<p className='text-xs sm:text-sm text-center xl:text-md w-full h-1/6 font-ubuntu400 m-0'>
										Time Management
									</p>
								</div>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
							</div>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
								<div className='flex flex-col items-center justify-center w-18 h-16 sm:w-22 md:w-24 lg:w-27 xl:w-30 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
							</div>
						</>
					)}
				</div>
			</div>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-end pb-2 opacity-50'>
				<HashLink smooth to='#projects'>
					<FontAwesomeIcon
						icon={faAngleDown}
						size='xl'
						className='text-black'
					/>
				</HashLink>
			</div>
		</div>
	);
};
export default SkillsComp;
