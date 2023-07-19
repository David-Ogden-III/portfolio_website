import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const HomeComp = () => {
	return (
		<div
			className='snap-start w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20'
			id='home'>
			<div className='flex flex-col h-5/6 items-center justify-center sm:justify-center'>
				<div className='flex flex-col justify-center items-center'>
					<h6 className='text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-ubuntu400'>
						Hello, I'm
					</h6>
					<h1 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-[120px] xl:leading-[120px] font-marker'>
						David
						<br />
						<span className='sm:ml-16 -mt-36'>Ogden</span>
					</h1>
					<h5 className='text-base md:text-xl lg:text-2xl xl:text-3xl mt-2 md:mt-09 font-ubuntu400'>
						Front-End Developer222
					</h5>
				</div>
			</div>
			<div className='sm:hidden w-full h-1/6 flex justify-center items-end pb-2 opacity-50'>
				<HashLink smooth to='#about'>
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
export default HomeComp;
