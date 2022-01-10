import Hero from '../components/Pages/Hero';
import Container from '../components/Shared/Container';
import Title from '../components/Shared/Title';
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
      revalidate: 10,
    },
  };
}

const Articles = ({ posts }) => {
  return (
    <Container>
      <Hero title="articles" />
      <section className="flex flex-col items-center">
        <Title title="Recently Published Articles" />
        <div className="flex flex-wrap justify-center items-stretch">
          {posts &&
            posts.map(post => <ArticleCard key={post.title} post={post} />)}
        </div>
      </section>
      <section className="pt-6">
        <a
          href="https://chadmuro.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" type="button">
            See all Articles
          </Button>
        </a>
      </section>
    </Container>
  );
};

export default Articles;
