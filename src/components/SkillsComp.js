import { useState } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faReact,
	faHtml5,
	faCss3Alt,
	faBootstrap,
	faJs,
	faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const SkillsComp = () => {
	const [skills, setSkills] = useState(true);

	return (
		<div
			id='skills'
			className='snap-center w-full h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20'>
			<div className='flex flex-col justify-center items-center'>
				<div>
					<h4 className='text-base sm:text-lg text-center xl:text-xl mt-2 md:mt-4 !leading-relaxed xl:w-2/3 font-ubuntu500'>
						Skills
					</h4>
				</div>
				<div className='font-ubuntu400'>
					{skills ? (
						<>
							<Button className='mr-2' color='dark' disabled>
								Hard Skills
							</Button>
							<Button
								className='ml-2'
								color='dark'
								onClick={() => setSkills(false)}>
								Soft Skills
							</Button>
						</>
					) : (
						<>
							<Button
								className='mr-2'
								color='dark'
								onClick={() => setSkills(true)}>
								Hard Skills
							</Button>
							<Button color='dark' className='ml-2' disabled>
								Soft Skills
							</Button>
						</>
					)}
				</div>
				<div className='flex flex-col my-4'>
					{skills ? (
						<>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex items-center justify-center text-[#e34c26] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon icon={faHtml5} className='w-full h-full' />
								</div>
								<div className='flex items-center justify-center text-[#264de4] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon icon={faCss3Alt} className='w-full h-full' />
								</div>
								<div className='flex items-center justify-center text-[#f0db4f] w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'>
									<FontAwesomeIcon
										icon={faJs}
										className='w-full h-full bg-black'
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
						</>
					) : (
						<>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
								<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
								<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
							</div>
							<div className='flex flex-row items-center justify-center'>
								<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
								<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
								<div className='flex items-center justify-center w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 m-3'></div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
export default SkillsComp;
