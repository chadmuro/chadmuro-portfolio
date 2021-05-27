import Hero from '../components/Home/Hero';
import Skills from '../components/Home/Skills';
import Projects from '../components/Home/Projects';
import Articles from '../components/Home/Articles';
import Contact from '../components/Home/Contact';

export async function getStaticProps() {
	const res = await fetch(
		'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40chadmuro'
	);
	const posts = await res.json();

	return {
		props: {
			posts: posts.items,
		},
	};
}

const Home = ({ posts }) => {
	return (
		<div className="w-full max-w-screen-2xl flex flex-col items-center">
			<Hero />
			<Skills />
			<Projects />
			<Articles posts={posts} />
			<Contact />
		</div>
	);
};

export default Home;
