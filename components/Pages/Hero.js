const Hero = ({ title }) => {
	return (
		<>
			<div className="w-full h-80v bg-hero-pattern bg-center bg-cover absolute top-0 left-0">
				<div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
				<h1 className="z-10 uppercase h-full text-6xl tracking-wider text-white flex justify-center items-center relative">
					{title}
				</h1>
			</div>
			<div className="h-80v" />
		</>
	);
};

export default Hero;
