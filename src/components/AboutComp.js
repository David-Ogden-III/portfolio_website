import familyPhoto from '../images/familyPhotoPng.png';

const AboutComp = () => {
	return (
		<div
			className='snap-center bg-white w-screen h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20'
			id='about'>
			<section className='w-full xl:container mx-auto'>
				<div className='lg:flex lg:space-x-10'>
					<div className='hidden lg:block w-1/2'>
						<img
							src={familyPhoto}
							className='w-[65%] mx-auto'
							alt='nothing yet'
						/>
					</div>
					<div className='flex items-center w-full lg:w-1/2'>
						<div className='max-w-[700px] mx-auto'>
							<h4 className='text-base sm:text-lg text-center xl:text-xl mt-2 md:mt-4 !leading-relaxed xl:w-2/3  font-ubuntu500'>
								About Me
							</h4>
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
		</div>
	);
};
export default AboutComp;
