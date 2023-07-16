import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

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
				<h4>Projects</h4>
				<h2>**Coming Soon**</h2>
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
