import selfPortrait from '../images/familyPhoto.png';

const HomeComp = () => {
	return (
		<div
			className='snap-start w-full h-screen flex  items-center justify-center px-6 sm:px-12 lg:px-20'
			id='home'>
			<div>
				<div className='flex justify-center' style={{ transform: 'none' }}>
					<img src={selfPortrait} alt='no pic yet' className='w-1/2' />
				</div>

				<div className='flex flex-col justify-center items-center'>
					<h6 className='text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-ubuntu400'>
						Hello, I'm
					</h6>
					<h1 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-[120px] xl:leading-[120px] font-marker'>
						David
						<br />
						<span className='sm:ml-16 -mt-36'>Ogden</span>
					</h1>
					<h5 className='text-base md:text-xl lg:text-2xl xl:text-3xl mt-4 md:mt-09 font-ubuntu400'>
						Full Stack Developer
					</h5>
				</div>

				<div
					className='w-full flex flex-col justify-center items-center mt-7'
					style={{ opacity: 1 }}></div>
			</div>
		</div>
	);
};
export default HomeComp;
