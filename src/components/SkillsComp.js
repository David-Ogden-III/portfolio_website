import { useState } from 'react';
import { Button } from 'reactstrap';

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
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
							</div>
							<div className='flex flex-row items-center justify-center'>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
							</div>
						</>
					) : (
						<>
							<div className='flex flex-row items-center justify-center'>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
							</div>
							<div className='flex flex-row items-center justify-center'>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
								<div className='w-16 h-16 sm:w-20 md:w-22 lg:w-25 xl:w-28 sm:h-20 md:h-22 lg:h-25 xl:h-28 border-2 border-black bg-white rounded-lg m-3'></div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
export default SkillsComp;
