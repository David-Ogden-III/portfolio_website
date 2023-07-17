import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialComp = () => {
	return (
		<div
			className='snap-center w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20'
			id='social'>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-start pt-2 opacity-50'>
				<HashLink
					smooth
					to='#projects'
					className='flex justify-center items-center flex-col'>
					<FontAwesomeIcon icon={faAngleUp} size='xl' className='text-black' />
				</HashLink>
			</div>
			<div className='flex flex-col justify-center items-center w-full h-2/3'>
				<h2 className='text-base sm:text-xl text-center xl:text-2xl mt-2 md:mt-4 !leading-relaxed xl:w-2/3 font-ubuntu500'>
					Check me out on:
				</h2>
				<div className='flex flex-col w-full justify-center items-center'>
					<div className='flex flex-row w-full justify-center items-center'>
						<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
							<a
								href='https://www.linkedin.com/in/david-o-5a601224a/'
								target='_blank'
								rel='noreferrer'>
								<FontAwesomeIcon
									icon={faLinkedin}
									className='w-full h-full text-[#0a66c2] hover:scale-105'
								/>
							</a>
						</div>
						<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
							<a
								href='https://github.com/David-Ogden-III'
								target='_blank'
								rel='noreferrer'>
								<FontAwesomeIcon
									icon={faGithub}
									className='w-full h-full text-black hover:scale-105'
								/>
							</a>
						</div>
					</div>
					<div className='flex flex-col w-full justify-center items-center'>
						<h4 className='text-base sm:text-lg text-center xl:text-xl !leading-relaxed xl:w-2/3 font-ubuntu400'>
							Or
						</h4>
						<h3 className='text-base sm:text-xl text-center xl:text-2xl !leading-relaxed xl:w-2/3 font-ubuntu400'>
							Email me at:
						</h3>
						<a href='mailto:davidogden.dev@gmail.com' className='no-underline'>
							<h2 className='text-base sm:text-xl text-center xl:text-2xl !leading-relaxed xl:w-2/3 font-ubuntu500 text-black hover:scale-105'>
								DavidOgden.Dev@gmail.com
							</h2>
						</a>
					</div>
				</div>
			</div>
			<div className='sm:hidden w-full h-1/6 flex flex-col justify-end items-center pb-2 opacity-50'>
				<HashLink
					smooth
					to='#home'
					className='flex justify-center items-center'>
					<FontAwesomeIcon icon={faAnglesUp} size='xl' className='text-black' />
				</HashLink>
				<p className='m-0'>Top</p>
			</div>
		</div>
	);
};
export default SocialComp;
