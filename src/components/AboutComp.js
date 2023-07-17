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
					<div className='hidden sm:block w-1/2'>
						<img src={selfPortrait} className='mx-auto' alt='nothing yet' />
					</div>
					<div className='flex items-center justify-center w-full sm:w-1/2'>
						<div className='max-w-[700px] mx-auto flex items-center justify-center flex-col'>
							<h2 className='text-base sm:text-xl text-center xl:text-2xl mt-2 md:mt-4 !leading-relaxed xl:w-2/3 font-ubuntu500'>
								About Me
							</h2>
							<p className='text-sm sm:text-base text-justify xl:text-lg mt-2 md:mt-4 !leading-relaxed xl:w-2/3 font-ubuntu400'>
								I am a passionate and skilled Software Developer specializing in
								**Mobile and Web development** with a strong dedication to
								quality and **attention to detail**. I am constantly seeking new
								challenges and opportunities to improve my craft. I stay updated
								with the latest industry trends and best practices by
								**attending conferences**, **taking online courses**, and
								**experimenting with new technologies**. I build **functional,
								beautiful and user-friendly designs**. My commitment to
								innovation ensures that clients receive cutting-edge and
								effective solutions.
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
