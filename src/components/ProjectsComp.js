import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import wtscreenshot from '../images/Workout-Tracker.png';

const ProjectsComp = () => {
	return (
		<div
			className='snap-center bg-white w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20'
			id='projects'>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-start pt-2 opacity-50'>
				<HashLink smooth to='#skills'>
					<FontAwesomeIcon icon={faAngleUp} size='xl' className='text-black' />
				</HashLink>
			</div>
			<div className='flex flex-col justify-center items-center w-full h-2/3'>
				<h2 className='text-base sm:text-xl text-center xl:text-2xl mt-2 md:mt-4 xl:w-2/3 font-ubuntu500'>
					Projects
				</h2>
				<div className='flex flex-col justify-center items-center w-full divide-y divide-2 divide-black'>
					<div className='flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 py-2'>
						<div className='hidden lg:flex flex-col justify-center items-center w-1/2 h-full mx-3'>
							<h3 className='text-sm sm:text-lg text-center xl:text-xl xl:w-2/3 font-ubuntu400'>
								Workout Tracker
							</h3>
							<a
								href='https://workout-tracker-387521.web.app/'
								target='_blank'
								rel='noreferrer'
								className='flex justify-center items-center'>
								<img
									src={wtscreenshot}
									alt='Workout Tracker Screenshot'
									className='w-2/3 border-2 border-black rounded-md hover:brightness-75'
								/>
							</a>
						</div>
						<div className='flex lg:hidden flex-col justify-center items-center w-1/2 h-full mx-3'>
							<a
								href='https://workout-tracker-387521.web.app/'
								target='_blank'
								rel='noreferrer'
								className='flex justify-center items-center decoration-black'>
								<h3 className='text-sm sm:text-lg text-center xl:text-xl xl:w-2/3 font-ubuntu400 text-black'>
									Workout Tracker
								</h3>
							</a>
						</div>
						<div className='flex justify-center items-center w-1/2 mx-3 h-full w-full lg:w-1/2'>
							<p className='text-xs sm:text-base text-justify xl:text-lg mt-2 md:mt-4 w-full font-ubuntu400'>
								Easily log and monitor your workouts to track progress over
								time. No more relying on memory, our user-friendly interface
								keeps a comprehensive workout history for you. Effortlessly
								navigate past workouts for quick comparisons. Workout Tracker is
								a front-end only <span className='font-ubuntu500'>React</span>{' '}
								app built with the help of{' '}
								<span className='font-ubuntu500'>Reactstrap</span> and{' '}
								<span className='font-ubuntu500'>Formik</span>.
							</p>
						</div>
					</div>
					{/* <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 py-2'>
						<div className='flex lg:hidden flex-col justify-center items-center w-1/2 h-full mx-3'>
							<a
								href='https://workout-tracker-387521.web.app/'
								target='_blank'
								rel='noreferrer'
								className='flex justify-center items-center decoration-black'>
								<h3 className='text-sm sm:text-lg text-center xl:text-xl xl:w-2/3 font-ubuntu400 text-black'>
									Workout Tracker
								</h3>
							</a>
						</div>
						<div className='flex justify-center items-center w-1/2 mx-3 h-full w-full lg:w-1/2'>
							<p className='text-xs sm:text-base text-justify xl:text-lg mt-2 md:mt-4 w-full font-ubuntu400'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
						<div className='hidden lg:flex flex-col justify-center items-center w-1/2 h-full mx-3'>
							<h3 className='text-sm sm:text-lg text-center xl:text-xl xl:w-2/3 font-ubuntu400'>
								Workout Tracker
							</h3>
							<a
								href='https://workout-tracker-387521.web.app/'
								target='_blank'
								rel='noreferrer'
								className='flex justify-center items-center'>
								<img
									src={wtscreenshot}
									alt='Workout Tracker Screenshot'
									className='w-2/3 border-2 border-black rounded-md hover:brightness-75'
								/>
							</a>
						</div>
					</div> */}
				</div>
			</div>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-end pb-2 opacity-50'>
				<HashLink smooth to='#social'>
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
export default ProjectsComp;
