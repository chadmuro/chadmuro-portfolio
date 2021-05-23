import Image from 'next/image';
import Hero from '../components/Pages/Hero';
import Button from '../components/Shared/Button';
import ProjectCard from '../components/Shared/ProjectCard';

const projects = [
	{
		name: 'Learn Code, Teach Code',
		image: (
			<Image
				src="/lctc.png"
				alt="learn code, teach code"
				height={408}
				width={612}
			/>
		),
		url: 'https://learn-code-teach-code.vercel.app/',
		tech: ['Next.js', 'Sanity', 'Framer Motion', 'Sass', 'Vercel'],
		description:
			'Learning to code is a challenge and I want to help other who are just starting out. I created this platform to help beginners to code getting started. There is an articles section of my recent blog posts, resources section, and a mentor section.',
		screenshots: [
			<Image src="/lctc1.png" alt="lctc ss1" height={200} width={320} />,
			<Image src="/lctc2.png" alt="lctc ss2" height={200} width={320} />,
			<Image src="/lctc3.png" alt="lctc ss3" height={200} width={320} />,
		],
		github: 'https://github.com/chadmuro/lctc',
	},
];

const Projects = () => {
	return (
		<div className="w-full max-w-screen-2xl flex flex-col items-center py-36">
			<Hero title="Projects" />
			<section className="flex flex-col items-center w-full">
				<h2 className="pb-24 text-3xl sm:4xl text-center">
					My Recent Projects
				</h2>
				<div className="flex flex-wrap justify-center items-stretch w-full">
					{projects &&
						projects.map(project => (
							<ProjectCard key={project.name} project={project} />
						))}
				</div>
			</section>
			<section className="pt-6">
				<a
					href="https://github.com/chadmuro"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button text="See all projects" variant="primary" type="button" />
				</a>
			</section>
		</div>
	);
};

export default Projects;
