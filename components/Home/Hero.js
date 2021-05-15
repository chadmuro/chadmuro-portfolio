import Image from 'next/image';

const Hero = () => {
	return (
		<div className="w-full h-80v flex justify-around items-center px-8">
			<div>
				<h1 className="uppercase text-5xl pb-8">
					Hello, my name is <span className="text-green-300">Chad</span>.
				</h1>
				<h3>I'm a Frontend Developer living in Tokyo, Japan.</h3>
				<h3>I enjoy building user-friendly websites and web applications.</h3>
			</div>
			<div className="rounded-full bg-green-300">
				<Image
					src="/chad.png"
					alt="Picture of me"
					width={250}
					height={250}
					className="overflow-hidden rounded-full"
				/>
			</div>
		</div>
	);
};

export default Hero;
