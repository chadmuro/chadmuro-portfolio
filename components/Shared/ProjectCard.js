import DescriptionBox from './DescriptionBox';

const ProjectCard = ({ project }) => {
	return (
		<article className="w-full min-h-screen mb-10 mx-5 relative p-4 dark:border-white border-2 border-gray-800 rounded">
			<div className="flex justify-center items-center flex-col sm:flex-row">
				<div className="flex flex-col items-center w-full sm:w-1/2 py-4">
					<h3 className="text-2xl sm:text-3xl text-center pb-8">
						{project.name}
					</h3>
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline text-green-300 text-lg"
					>
						View Project
					</a>
				</div>
				<div className="w-full sm:w-1/2">{project.image}</div>
			</div>
			<div className="flex flex-wrap justify-center pb-8">
				{project.tech.map(tech => (
					<DescriptionBox text={tech} />
				))}
			</div>
			<div className="pb-8">
				<p>{project.description}</p>
			</div>
			<div className="flex flex-col items-center">
				<h4 className="text-xl pb-2">Screenshots</h4>
				<div className="flex flex-col items-center sm:flex-row">
					{project.screenshots.map(screenshot => (
						<div className="mb-8 mx-2">{screenshot}</div>
					))}
				</div>
			</div>
			<div className="flex justify-center pb-8">
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline text-green-300 text-lg"
				>
					View Source Code
				</a>
			</div>
		</article>
	);
};

export default ProjectCard;
