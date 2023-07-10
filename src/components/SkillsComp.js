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
					<h4>Skills</h4>
				</div>
				<div>
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
				<div>
					{skills ? (
						<div>
							<div className='w-20 h-20 border-2 border-black rounded-lg'></div>
						</div>
					) : (
						<div>Skills is not true</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default SkillsComp;
