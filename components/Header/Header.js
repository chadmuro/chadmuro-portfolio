import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { links } from './links';

const Header = ({ darkMode, setDarkMode, showHeader }) => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';

	return (
		<header
			className={`w-full h-header py-10 sticky top-0 left-0 flex justify-between items-center z-20 transition duration-300 z-30 bg-transparent text-white ${
				isHomePage && 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
			} ${
				showHeader && 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
			}`}
		>
			<div className="ml-6 hover:text-green-300 z-10">
				<Link href="/">
					<a>CM</a>
				</Link>
			</div>
			<div className="w-full" />
			<ul className="block pt-10 sm:pt-0 sm:flex">
				{links &&
					links.map(link => (
						<li
							key={link.text}
							className={`flex justify-center
							sm:mr-6 sm:relative sm:top-0 sm:left-0 sm:p-0 hover:text-green-300 sm:w-min bg-white dark:bg-gray-800 sm:bg-transparent text-white transition duration-300
              ${isHomePage && `text-gray-800 dark:text-white`}
              ${!isHomePage && `sm:bg-transparent sm:dark:bg-transparent`} 
              ${showHeader && 'sm:text-gray-800 sm:dark:text-white'}
              `}
						>
							<Link href={link.path}>
								<a>{link.text}</a>
							</Link>
						</li>
					))}
			</ul>
			<button
				onClick={() => setDarkMode(!darkMode)}
				className="focus:outline-none mr-6 hover:text-green-300 z-10"
			>
				{darkMode ? (
					<IoSunnyOutline size="1.8rem" />
				) : (
					<IoMoonOutline size="1.8rem" />
				)}
			</button>
		</header>
	);
};

export default Header;
