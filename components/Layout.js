import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
	return (
		<div className="min-h-screen h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-800">
			<Head>
				<title>Chad Murobayashi</title>
				<meta name="chadmuro" content="Chad Murobayashi Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="py-20 px-0 flex-1 flex flex-col justify-center items-center text-gray-800 dark:text-white">
				{props.children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
