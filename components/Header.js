import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	IoSunnyOutline,
	IoMoonOutline,
	IoMenuOutline,
	IoCloseOutline,
} from 'react-icons/io5';

const Header = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [showHeader, setShowHeader] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
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

	const links = [
		{
			path: '/',
			text: 'Home',
		},
		{
			path: '/projects',
			text: 'Projects',
		},
		{
			path: '/articles',
			text: 'Articles',
		},
		{
			path: '/contact',
			text: 'Contact',
		},
	];

	return (
		<header
			className={`w-full h-header py-10 sticky top-0 left-0 flex justify-between items-center z-20 transition duration-300 z-30 ${
				isHomePage
					? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
					: 'bg-transparent'
			} ${
				showHeader
					? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
					: 'text-white'
			}`}
		>
			<div className="ml-6 hover:text-green-300">
				<Link href="/">
					<a>CM</a>
				</Link>
			</div>
			<div className="w-full" />
			<ul className="block pt-10 sm:pt-0 sm:flex">
				{links &&
					links.map((link, index) => (
						<li
							key={link.text}
							className={`sm:mr-6 sm:flex sm:relative hover:text-green-300 ${
								openMenu ? `flex` : 'hidden'
							}`}
						>
							<Link href={link.path}>
								<a onClick={() => setOpenMenu(false)}>{link.text}</a>
							</Link>
						</li>
					))}
			</ul>
			<button
				onClick={() => setOpenMenu(!openMenu)}
				className="focus:outline-none mr-6 flex sm:hidden hover:text-green-300"
			>
				{openMenu ? (
					<IoCloseOutline size="1.8rem" />
				) : (
					<IoMenuOutline size="1.8rem" />
				)}
			</button>
			<button
				onClick={() => setDarkMode(!darkMode)}
				className="focus:outline-none mr-6 hover:text-green-300"
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
