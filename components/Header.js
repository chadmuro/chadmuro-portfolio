import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useAnimation } from 'framer-motion';
import {
	IoSunnyOutline,
	IoMoonOutline,
	IoMenuOutline,
	IoCloseOutline,
} from 'react-icons/io5';
import { useWindowSize } from '../hooks/useWindowSize';

const Header = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [showHeader, setShowHeader] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const router = useRouter();
	const controls = useAnimation();
	const isHomePage = router.pathname === '/';
	const width = useWindowSize();

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

	const items = {
		hidden: { y: -150, opacity: 0, transition: { duration: 0.5 } },
		visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	};

	const handleMenuClick = () => {
		setOpenMenu(!openMenu);
		if (openMenu && width < 640) {
			controls.start('hidden');
		}
		if (!openMenu && width < 640) {
			controls.start('visible');
		}
		if (width > 640) {
			controls.set('visible');
		}
	};

	const handleLinkClick = () => {
		setOpenMenu(false);
		if (openMenu && width < 640) {
			controls.start('hidden');
		}
		if (!openMenu && width < 640) {
			controls.start('visible');
		}
		if (width >= 640) {
			controls.set('visible');
		}
	};

	const handleLogoClick = () => {
		setOpenMenu(false);
		if (width < 640) {
			controls.start('hidden');
		}
		if (width >= 640) {
			controls.set('visible');
		}
	};

	useEffect(() => {
		if (width < 640) {
			controls.set('hidden');
		} else {
			controls.set('visible');
		}
	}, [width]);

	useEffect(() => {
		if (width >= 640 && openMenu) {
			setOpenMenu(false);
		}
	}, [width]);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<header
			className={`w-full h-header py-10 sticky top-0 left-0 flex justify-between items-center z-20 transition duration-300 z-30 bg-transparent text-white ${
				isHomePage && 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
			} ${
				showHeader && 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
			}`}
		>
			<div
				className={`ml-6 hover:text-green-300 z-10 ${
					openMenu && 'text-gray-800 dark:text-white'
				}`}
			>
				<Link href="/">
					<a onClick={handleLogoClick}>CM</a>
				</Link>
			</div>
			<div className="w-full" />
			<ul
				variants={items}
				initial="hidden"
				animate="visible"
				className={`block pt-10 sm:pt-0 sm:flex ${
					(isHomePage || showHeader) &&
					'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
				}`}
			>
				{links &&
					links.map((link, index) => (
						<motion.li
							variants={items}
							animate={controls}
							key={link.text}
							className={`absolute top-${
								index * 8
							} left-0 w-screen py-3 flex justify-center
							sm:mr-6 sm:relative sm:top-0 sm:left-0 sm:p-0 hover:text-green-300 sm:w-min bg-white dark:bg-gray-800 sm:bg-transparent text-white
              ${isHomePage && `text-gray-800 dark:text-white`}
              ${!isHomePage && `sm:bg-transparent sm:dark:bg-transparent`} 
              ${showHeader && 'sm:text-gray-800 sm:dark:text-white'}
              ${openMenu && `text-gray-800 dark:text-white`}
              `}
						>
							<Link href={link.path}>
								<a onClick={handleLinkClick}>{link.text}</a>
							</Link>
						</motion.li>
					))}
			</ul>
			<button
				onClick={handleMenuClick}
				className={`focus:outline-none mr-6 flex sm:hidden hover:text-green-300 z-10 ${
					openMenu && 'text-gray-800 dark:text-white'
				}`}
			>
				{openMenu ? (
					<IoCloseOutline size="1.8rem" />
				) : (
					<IoMenuOutline size="1.8rem" />
				)}
			</button>
			<button
				onClick={() => setDarkMode(!darkMode)}
				className={`focus:outline-none mr-6 hover:text-green-300 z-10 ${
					openMenu && 'text-gray-800 dark:text-white'
				}`}
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
