import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<header className="h-20 w-full bg-green-300 sticky flex justify-between items-center">
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
				<li className="mr-6">
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li className="mr-6">
					<Link href="/projects">
						<a>Projects</a>
					</Link>
				</li>
				<li className="mr-6">
					<Link href="/articles">
						<a>Articles</a>
					</Link>
				</li>
				<li className="mr-6">
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
