import { RichText } from 'prismic-reactjs';
import DescriptionBox from './DescriptionBox';

const ProjectCard = ({ project }) => {
	return (
		<article className="w-full min-h-screen mb-10 mx-5 relative p-4 dark:border-white border-2 border-gray-800 rounded">
			<div className="flex justify-center items-center flex-col sm:flex-row pb-4">
				<div className="flex flex-col items-center w-full sm:w-1/2 py-4">
					<h3 className="text-2xl sm:text-3xl text-center pb-8">
						{RichText.asText(project.data.project_name)}
					</h3>
					<a
						href={RichText.asText(project.data.project_url)}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline text-green-300 text-lg"
					>
						View Project
					</a>
				</div>
				<div className="w-full sm:w-1/2">
					<img
						src={project.data.main_image.url}
						alt={RichText.asText(project.data.project_name)}
						height={project.data.main_image.dimensions.height}
						width={project.data.main_image.dimensions.width}
					/>
				</div>
			</div>
			<div className="flex flex-wrap justify-center pb-8">
				{project.data.tech_stack.map(tech => (
					<DescriptionBox key={tech.tech[0].text} text={tech.tech[0].text} />
				))}
			</div>
			<div className="px-2 sm:px-8 pb-8">
				<p>{RichText.asText(project.data.description)}</p>
			</div>
			<div className="flex flex-col items-center">
				<h4 className="text-xl pb-2">Screenshots</h4>
				<div className="flex flex-col items-center sm:flex-row">
					{project.data.screenshots.map(screenshot => (
						<div key={screenshot.screenshot.alt} className="mb-8 mx-2">
							<img
								src={screenshot.screenshot.url}
								alt={screenshot.screenshot.alt}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center pb-8">
				<a
					href={RichText.asText(project.data.project_github)}
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
