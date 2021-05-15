import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
	return (
		<div className="min-h-screen h-screen flex flex-col justify-center items-center">
			<Head>
				<title>Chad Murobayashi</title>
				<meta name="chadmuro" content="Chad Murobayashi Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-1 flex-col w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition duration-300">
				{props.children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
