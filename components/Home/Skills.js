import { useEffect } from 'react';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiRedux,
	SiNextDotJs,
	SiTypescript,
	SiGit,
	SiGithub,
	SiFirebase,
	SiSass,
	SiMaterialUi,
	SiTailwindcss,
	SiStorybook,
} from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from '../Shared/Title';
import Container from '../Shared/Container';

const techIcons = [
	{
		logo: <SiHtml5 size="4em" />,
		name: 'HTML5',
		color: '#E34F26',
	},
	{
		logo: <SiCss3 size="4em" />,
		name: 'CSS',
		color: '#1572B6',
	},
	{
		logo: <SiJavascript size="4em" />,
		name: 'JavaScript',
		color: '#F7DF1E',
	},
	{
		logo: <SiTypescript size="4em" />,
		name: 'Typescript',
		color: '#3178C6',
	},
	{
		logo: <SiReact size="4em" />,
		name: 'React',
		color: '#61DAFB',
	},
	{
		logo: <SiNextDotJs size="4em" />,
		name: 'Next.js',
		color: '#000000',
	},
	{
		logo: <SiRedux size="4em" />,
		name: 'Redux',
		color: '#764ABC',
	},
	{
		logo: <SiGit size="4em" />,
		name: 'Git',
		color: '#F05032',
	},
	{
		logo: <SiGithub size="4em" />,
		name: 'GitHub',
		color: '#181717',
	},
	{
		logo: <SiFirebase size="4em" />,
		name: 'Firebase',
		color: '#FFCA28',
	},
	{
		logo: <SiSass size="4em" />,
		name: 'Sass',
		color: '#CC6699',
	},
	{
		logo: <SiMaterialUi size="4em" />,
		name: 'Material-UI',
		color: '#0081CB',
	},
	{
		logo: <SiTailwindcss size="4em" />,
		name: 'Tailwind CSS',
		color: '#38B2AC',
	},
	{
		logo: <SiStorybook size="4em" />,
		name: 'Storybook',
		color: '#FF4785',
	},
];

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Skills = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<Container>
			<Title title="Tech Stack" home />
			<motion.section
				ref={ref}
				variants={container}
				initial="hidden"
				animate={controls}
				className="flex flex-wrap justify-center max-w-xl"
			>
				{techIcons.map(techIcon => (
					<motion.div
						key={techIcon.name}
						variants={item}
						whileHover={{
							scale: [1, 1.2],
							rotate: [0, 15],
							transition: { duration: 0.3 },
						}}
						className="mx-4 mb-6"
						style={{ color: techIcon.color }}
					>
						{techIcon.logo}
					</motion.div>
				))}
			</motion.section>
		</Container>
	);
};

export default Skills;
