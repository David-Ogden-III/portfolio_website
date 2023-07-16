import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

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
				<h4>Social</h4>
				<h2>**Coming Soon**</h2>
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
