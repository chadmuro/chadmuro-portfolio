import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const icons = [
	{
		name: 'Github',
		icon: <FaGithub size="3em" />,
		link: 'https://github.com/chadmuro',
	},
	{
		name: 'LinkedIn',
		icon: <FaLinkedin size="3em" />,
		link: 'https://www.linkedin.com/in/chadmuro/',
	},
	{
		name: 'Medium',
		icon: <FaMedium size="3em" />,
		link: 'https://chadmuro.medium.com/',
	},
];

const Icons = ({ dark }) => {
	return (
		<div className="flex pt-4 z-20">
			{dark &&
				icons.map(icon => (
					<a
						aria-label={icon.name}
						key={icon.name}
						className="mx-3 focus:outline-none text-gray-800 hover:text-gray-600"
						href={icon.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{icon.icon}
					</a>
				))}
			{!dark &&
				icons.map(icon => (
					<a
						key={icon.name}
						className="mx-3 focus:outline-none text-white hover:text-gray-300"
						href={icon.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{icon.icon}
					</a>
				))}
		</div>
	);
};

export default Icons;
