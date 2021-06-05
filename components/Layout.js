import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
import Footer from './Footer';
import { useWindowSize } from '../hooks/useWindowSize';

const Layout = props => {
	const width = useWindowSize();
	const [isMobile, setIsMobile] = useState(width < 640);
	const [darkMode, setDarkMode] = useState(true);
	const [showHeader, setShowHeader] = useState(false);

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

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	useEffect(() => {
		if (width < 640 && !isMobile) {
			setIsMobile(true);
		}
		if (width >= 640 && isMobile) {
			setIsMobile(false);
		}
	}, [width]);

	return (
		<div className="min-h-screen flex flex-col justify-center items-start bg-white dark:bg-gray-800 text-gray-800 dark:text-white ">
			<Head>
				<title>Chad Murobayashi | Portfolio</title>
				<meta name="description" content="Chad Murobayashi Portfolio" />
				<link rel="icon" href="/favicon.ico" />
				{/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"></meta> */}
			</Head>
			{isMobile ? (
				<MobileHeader
					darkMode={darkMode}
					setDarkMode={setDarkMode}
					showHeader={showHeader}
				/>
			) : (
				<Header
					darkMode={darkMode}
					setDarkMode={setDarkMode}
					showHeader={showHeader}
				/>
			)}
			<main className="flex flex-col items-center flex-1 w-full transition duration-300">
				{props.children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
