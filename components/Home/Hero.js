import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../Shared/Button';

const Hero = () => {
	const router = useRouter();

	return (
		<div className="w-full flex flex-col flex-1 sm:flex-row justify-start sm:justify-around items-center px-8 py-10 sm:py-20">
			<div className="text-center sm:text-left">
				<h1 className="uppercase text-5xl pb-10">
					Hello, my name is <span className="text-green-300">Chad</span>.
				</h1>
				<h3>I'm a Frontend Developer living in Tokyo, Japan.</h3>
				<h3 className="pb-10">
					I enjoy building user-friendly websites and web applications.
				</h3>
				<Button
					text="See my projects"
					onClick={() => router.push('/projects')}
					className="mb-10 sm:mb-0"
				/>
			</div>
			<div className="rounded-full bg-green-300">
				<Image
					src="/chad.png"
					alt="Picture of me"
					width={200}
					height={200}
					className="overflow-hidden rounded-full"
				/>
			</div>
		</div>
	);
};

export default Hero;
