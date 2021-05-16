import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="min-h-footer w-full bg-green-300 text-gray-800 flex justify-center items-center py-10">
			<div className="flex flex-col items-center">
				<p>Copyright &copy; 2021 Chad Murobayashi</p>
				<div className="flex pt-4">
					<a
						className="mr-6 focus:outline-none text-gray-800 hover:text-gray-600"
						href="https://github.com/chadmuro"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub size="2em" />
					</a>
					<a
						className="mr-6 focus:outline-none text-gray-800 hover:text-gray-600"
						href="https://chadmuro.medium.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaMedium size="2em" />
					</a>
					<a
						className="focus:outline-none text-gray-800 hover:text-gray-600"
						href="https://www.linkedin.com/in/chadmuro/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size="2em" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
