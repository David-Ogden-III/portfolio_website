const HomeComp = () => {
	return (
		<div
			className='snap-start bg-white w-screen h-screen flex  items-center justify-center px-6 sm:px-12 lg:px-20'
			id='home'>
			<div
				className='snap-start bg-white h-screen w-full flex items-center justify-center'
				id='home'>
				<div>
					<div className='flex justify-center' style={{ transform: 'none' }}>
						<img
							className='xs:w-[220px] sm:w-[45%] md:w-[35%] lg:w=[26%] xl:w-[22%]'
							alt='no pic yet'
						/>
					</div>

					<div className='flex flex-col justify-center items-center'>
						<h6 className='text-base sm:text-xl'>Hello, I'm</h6>
						<h1 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-10xl xl:text-[120px] xl:leading-[120px]'>
							David
							<br />
							<span className='sm:ml-16 -mt-36'>Ogden</span>
						</h1>
						<h5 className='text-base md:text-xl lg:text-2xl xl:text-3xl mt-4 md:mt-09'>
							Full Stack Developer
						</h5>
					</div>

					<div
						className='w-full flex flex-col justify-center items-center mt-7'
						style={{ opacity: 1 }}></div>
				</div>
			</div>
		</div>
	);
};
export default HomeComp;
