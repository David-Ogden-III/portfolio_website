import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import selfPortrait from '../images/mediumSelfPhoto.png';

const AboutComp = () => {
	return (
		<div
			className='snap-center bg-white w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20'
			id='about'>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-start pt-2 opacity-50'>
				<HashLink smooth to='#home'>
					<FontAwesomeIcon icon={faAngleUp} size='xl' className='text-black' />
				</HashLink>
			</div>
			<section className='w-full xl:container mx-auto h-2/3 flex justify-center items-center'>
				<div className='lg:flex lg:space-x-10 flex justify-center items-center'>
					<div className='hidden md:block w-1/2'>
						<img src={selfPortrait} className='mx-auto' alt='nothing yet' />
					</div>
					<div className='flex items-center justify-center w-full md:w-1/2'>
						<div className='max-w-[700px] mx-auto flex items-center justify-center flex-col'>
							<h2 className='text-base sm:text-xl text-center xl:text-2xl mt-2 md:mt-4 !leading-relaxed xl:w-2/3 font-ubuntu500'>
								About Me
							</h2>
							<p className='text-xs sm:text-base text-justify xl:text-lg mt-2 md:mt-4 !leading-relaxed xl:w-2/3 font-ubuntu400'>
								I'm a Marine Corps veteran turned Front-End Developer with a
								background as a satellite communication technician. This
								experience has equipped me with the ability to solve complex
								problems and think logically when developing or debugging my
								projects. I bring together technical skills and creativity to
								craft a combination of form and function, resulting in
								easy-to-use and visually appealing products. As a Front-End
								Developer, I am constantly seeking opportunities to grow and
								stay updated with the latest industry trends. Collaborating with
								like-minded professionals and taking on exciting projects is
								what fuels my passion for web development. I thrive in a team
								environment where ideas are shared, resulting in innovative
								solutions. If you're seeking a dedicated and detail-oriented
								Front-End Developer, I would love to showcase the skills and
								expertise I can contribute to your team.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-end pb-2 opacity-50'>
				<HashLink smooth to='#skills'>
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
export default AboutComp;
