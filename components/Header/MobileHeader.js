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
import { links } from './links';

const MobileHeader = ({ darkMode, setDarkMode, showHeader }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const controls = useAnimation();
	const router = useRouter();
	const isHomePage = router.pathname === '/';

	const items = {
		hidden: { y: -200, transition: { duration: 0.5 } },
		visible: { y: 0, transition: { duration: 0.5 } },
	};

	const handleMenuClick = () => {
		setOpenMenu(!openMenu);
		if (openMenu) {
			controls.start('hidden');
		}
		if (!openMenu) {
			controls.start('visible');
		}
	};

	const handleLinkClick = () => {
		setOpenMenu(false);
		controls.start('hidden');
	};

	const handleLogoClick = () => {
		setOpenMenu(false);
		controls.start('hidden');
	};

	return (
		<header
			className={`w-full h-header py-10 sticky top-0 left-0 flex justify-between items-center z-20 transition duration-300 z-30 bg-transparent text-white ${
				(isHomePage || showHeader) &&
				'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
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
				className={`block pt-10 ${
					(isHomePage || showHeader) &&
					'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
				}`}
			>
				{links &&
					links.map((link, index) => (
						<motion.li
							variants={items}
							initial="hidden"
							animate={controls}
							key={link.text}
							className={`absolute left-0 w-screen py-3 flex justify-center
							hover:text-green-300 bg-white dark:bg-gray-800 text-white
              ${isHomePage && `text-gray-800 dark:text-white`}
              ${openMenu && `text-gray-800 dark:text-white`}
              `}
							style={{ top: `${index * 40}px` }}
						>
							<Link href={link.path}>
								<a onClick={handleLinkClick}>{link.text}</a>
							</Link>
						</motion.li>
					))}
			</ul>
			<button
				onClick={handleMenuClick}
				className={`focus:outline-none mr-6 flex hover:text-green-300 z-10 ${
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

export default MobileHeader;
