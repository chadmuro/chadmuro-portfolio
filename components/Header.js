import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const Header = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [showHeader, setShowHeader] = useState(false);
	const router = useRouter();
	const isHomePage = router.pathname === '/';

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const handleScroll = () => {
		const position = window.pageYOffset;
		if (position > 80) {
			setShowHeader(true);
		} else {
			setShowHeader(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	console.log(showHeader);

	return (
		<header
			className={`w-full h-20 sticky top-0 left-0 flex justify-between items-center z-20 py-10 transition duration-300 ${
				isHomePage
					? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
					: 'bg-transparent'
			} ${
				showHeader
					? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
					: 'text-white'
			}`}
		>
			<div className="ml-6">
				<Link href="/">
					<a>CM</a>
				</Link>
			</div>
			<button
				onClick={() => setDarkMode(!darkMode)}
				className="focus:outline-none"
			>
				{darkMode ? (
					<IoSunnyOutline size="1.8rem" />
				) : (
					<IoMoonOutline size="1.8rem" />
				)}
			</button>
			<ul className="flex">
				<li className="mr-6 hover:text-green-300">
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li className="mr-6 hover:text-green-300">
					<Link href="/projects">
						<a>Projects</a>
					</Link>
				</li>
				<li className="mr-6 hover:text-green-300">
					<Link href="/articles">
						<a>Articles</a>
					</Link>
				</li>
				<li className="mr-6 hover:text-green-300">
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
