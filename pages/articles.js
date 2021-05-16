import Hero from '../components/Pages/Hero';
import ArticleCard from '../components/Shared/ArticleCard';
import Button from '../components/Shared/Button';

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

const Articles = ({ posts }) => {
	console.log(posts);

	return (
		<div className="w-full max-w-screen-2xl flex flex-col items-center py-36">
			<Hero title="articles" />
			<h2 className="pb-24 text-2xl">Recently Published Articles</h2>
			<section className="flex flex-wrap justify-center items-stretch">
				{posts &&
					posts.map(post => <ArticleCard key={post.title} post={post} />)}
			</section>
			<section className="pt-6">
				<a
					href="https://chadmuro.medium.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button text="See all articles" />
				</a>
			</section>
		</div>
	);
};

export default Articles;
